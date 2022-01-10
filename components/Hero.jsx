import React from "react";
import Wrapper from "./Wrapper"
import {} from '@heroicons/react/solid'
import Portal from '@reach/portal';
import { CodeIcon, LockClosedIcon } from "@heroicons/react/outline"
import Link from "next/link";

const Hero = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [isLoggedIn, setIsLoggedIn] = React.useState(true)
    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="pt-16 flex lg:justify-center streamio-hero h-screen w-full">
                <Wrapper>
                    <div className="flex lg:items-center flex-col space-y-5">
                        <h1 className="font-bold lg:text-8xl text-center text-6xl text-[#16A34A]">Fast, reliable, and secure conferencing</h1>
                        <p className="text-[#16A34A] lg:text-2xl text-center">Hold incredible events, share knowledge, build and grow your community and create opportunities.</p>
                        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:w-1/2 lg:space-x-4">
                            {
                                isLoggedIn ? <button type="button" onClick={toggle} className="px-5 shadow-md hover:bg-green-500 transition duration-200 lg:w-1/2 h-16 font-bold rounded-full w-full bg-green-600 text-white">Schedule a Meeting</button> : <Link href="/login">
                                <button type="button" className="px-5 shadow-md hover:bg-green-500 transition duration-200 lg:w-1/2 h-16 font-bold rounded-full w-full bg-green-600 text-white">Schedule a Meeting</button>
                            </Link>
                            }

                            <div className="lg:w-1/2">
                                <form className="flex rounded-full border border-green-600 bg-white h-16 shadow-md">
                                    <div className="flex space-x-2 items-center w-full pl-5">
                                        <LockClosedIcon className="h-6 w-6 text-gray-500"/>
                                        <input className="outline-none w-full" placeholder="Meeting Code"/>
                                    </div>
                                    <button className="px-5 font-bold p-4 hover:shadow-lg hover:bg-green-500 transition duration-200 rounded-full bg-green-600 text-white lg:w-52">Join</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </Wrapper>
            </div>
            <Modal isOpen={isOpen} toggle={toggle}>
                <ModalHeader>Schedule a meeting</ModalHeader>
                <ModalBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
                </ModalBody>
                <ModalFooter>
                <button
                    onClick={toggle}
                    className="border border-green-600 focus:outline-none m-1.5 rounded-full px-6 py-2 font-medium bg-white text-green-600"
                >
                    Close
                </button>
                <button
                    onClick={toggle}
                    className="text-white focus:outline-none m-1.5 rounded-full px-6 py-2 font-medium bg-green-600"
                >
                    Confirm
                </button>
                </ModalFooter>
            </Modal>
        </>
    )
}

export default Hero

const style = {
    body: `flex-shrink flex-grow p-4`,
    headerTitle: `text-2xl md:text-3xl font-light`,
    header: `items-start justify-between p-4 border-b border-gray-300`,
    container: `fixed flex justify-center items-center top-0 overflow-y-auto left-0 z-50 w-full h-full m-0`,
    overlay: `fixed top-0 left-0 z-50 w-screen h-screen bg-black opacity-50`,
    content: `animate-modal rounded-2xl relative flex flex-col bg-white pointer-events-auto`,
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