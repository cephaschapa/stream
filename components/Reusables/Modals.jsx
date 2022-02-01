import React from "react";
import { Portal } from "@reach/portal";
import Loader from "./Loader";

const MainModal = () => {
    const [isOpen, setIsOpen] = React.useState(true)
   

    const toggle = () => {
        setIsOpen(!isOpen);
      };
    
    return(
        <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader>StreamIO</ModalHeader>
        <ModalBody>
            <Spinner color="#16A34A" className="h-12" />
            Signing you out...

        </ModalBody>
      </Modal>
    )
}


const Spinner = ({ color, className }) => (
    <svg
      fill={color}
      viewBox="0 0 1792 1792"
      className={`${className} flex-no-shrink animate-spin`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1760 896q0 176-68.5 336t-184 275.5-275.5 184-336 68.5-336-68.5-275.5-184-184-275.5-68.5-336q0-213 97-398.5t265-305.5 374-151v228q-221 45-366.5 221t-145.5 406q0 130 51 248.5t136.5 204 204 136.5 248.5 51 248.5-51 204-136.5 136.5-204 51-248.5q0-230-145.5-406t-366.5-221v-228q206 31 374 151t265 305.5 97 398.5z" />
    </svg>
);

export default MainModal;

/*Logic*/

const style = {
    body: `flex flex-col flex-shrink items-center justify-center flex-grow p-4`,
    headerTitle: `text-2xl md:text-3xl font-bold`,
    header: `items-start justify-between p-4 border-b border-gray-300`,
    container: `fixed flex items-center justify-center top-0 overflow-y-auto left-0 z-40 w-full h-full m-0`,
    overlay: `fixed top-0 left-0 z-30 w-screen h-screen bg-black opacity-50`,
    content: `animate-modal rounded-2xl w-72 relative flex flex-col bg-white pointer-events-auto`,
    footer: `flex flex-wrap items-center justify-end p-3 border-t border-gray-300`,
    orientation: `mt-12 mx-8 pb-6 md:m-auto md:w-6/12 lg:w-4/12 md:pt-12 focus:outline-none`,
  };
  
  function Modal({ children, isOpen, toggle }) {
    const ref = React.useRef();
  
    // close modal on click outside
    React.useEffect(() => {
      const handleOutsideClick = (event) => {
        if (!ref.current?.contains(event.target)) {
          if (!isOpen) return;
          toggle(false);
        }
      };
      window.addEventListener('click', handleOutsideClick);
      return () => window.removeEventListener('click', handleOutsideClick);
    }, [isOpen, ref, toggle]);
  
    // close modal when you click on "ESC" key
    React.useEffect(() => {
      const handleEscape = (event) => {
        if (!isOpen) return;
        if (event.key === 'Escape') {
          toggle(false);
        }
      };
      document.addEventListener('keyup', handleEscape);
      return () => document.removeEventListener('keyup', handleEscape);
    }, [isOpen, toggle]);
  
    // hide scrollbar and prevent body from moving when modal is open
    //put focus on modal dialogue
    React.useEffect(() => {
      if (!isOpen) return;
  
      ref.current?.focus();
  
      const html = document.documentElement;
      const scrollbarWidth = window.innerWidth - html.clientWidth;
  
      html.style.overflow = 'hidden';
      html.style.paddingRight = `${scrollbarWidth}px`;
  
      return () => {
        html.style.overflow = '';
        html.style.paddingRight = '';
      };
    }, [isOpen]);
  
    return (
      <Portal>
        {isOpen && (
          <>
            <div className={style.overlay} />
            <div className={style.container}>
              <div
                aria-modal={true}
                className={style.orientation}
                ref={ref}
                role="dialogue"
                tabIndex={-1}
              >
                <div className={style.content}>{children}</div>
              </div>
            </div>
          </>
        )}
      </Portal>
    );
  }
  
  function ModalHeader({ children }) {
    return (
      <div className={style.header}>
        <h4 className={style.headerTitle}>{children}</h4>
      </div>
    );
  }
  
  function ModalBody({ children }) {
    return <div className={style.body}>{children}</div>;
  }
  
  function ModalFooter({ children }) {
    return <div className={style.footer}>{children}</div>;
  }