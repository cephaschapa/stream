import React, {useEffect} from "react";
import Portal from '@reach/portal';
import { useRouter } from "next/router";
import { useSession, signOut } from "next-auth/react";

// Components and Reusables
import Link from "next/link";
import { DotsVerticalIcon, MenuIcon } from "@heroicons/react/outline";
import NavWrapper from "./NavWrapper";
import { BadgeCheckIcon, BanIcon, CogIcon, CubeTransparentIcon, PencilIcon, ShieldCheckIcon, SupportIcon, ViewListIcon } from "@heroicons/react/solid";
import {VscAccount, VscCombine, VscDebug, VscLinkExternal, VscMenu, VscReferences, VscReport, VscSearch, VscSettings, VscSourceControl, VscWorkspaceTrusted} from 'react-icons/vsc'
import { useState } from "react";
import NavWrapper2 from "./NavWrapper2";

const AppHeader = ({pageName}) => {
    const [pathname, setpathname] = useState();
    const authStatus = useSession();

    const {data: session} = authStatus;
    console.log(session, authStatus)

    const [isOpen2, setIsOpen2] = React.useState(false);

    const toggle2 = () => {
      setIsOpen2(!isOpen2);
    };


    const [isOpen, setIsOpen] = React.useState(false);   
    const [isSigningOut, setIsSigningOut] =  React.useState(false);

    const router = useRouter();
    
    useEffect(() => {
      const {pathname} = router;
      setpathname(pathname)
      return () => {
        pathname
      };
    }, []);
    
    
    const image = '';
    const name =  '';
    const email = '';

    if(!session) {
        console.log("Fetching Data");
    } else{
        console.log(session["user"].image)
        image = session["user"].image;
        name = session["user"].name;
        email = session["user"].email
    }

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    const handleSignOut = () =>{  
      setIsSigningOut(true);
      signOut();     
    }

    return(
        <header className="border-b dark:border-none dark:bg-slate-800 bg-white fixed top-0 z-20 w-full">
            <NavWrapper2>
                <div className="flex justify-between w-full">
                    <div className="flex items-center justify-center">
                        <button type="button" aria-label="Drawer"  onClick={toggle}>
                            <VscMenu className="h-6 w-6 dark:text-slate-200 text-green-600"/>
                        </button>
                        
                    </div>
                    <div className="flex items-center">
                      <h1 className="text-xl font-bold dark:text-slate-200 text-slate-700">{pageName}</h1>
                    </div>
                    <div className="flex items-center justify-center">
                        <botton onClick={toggle2}>
                          <VscSearch className="h-6 w-6 text-green-600 dark:text-slate-200"/>
                        </botton>
                    </div>
                    {/* Drawer Menu */}
                    <Drawer isOpen={isOpen} toggle={toggle} position="left">
                        <div className="flex flex-col px-5 py-5 border-b dark:border-slate-600">
                            <div className="relative h-16 w-16 rounded-full border-4 border-green-600 dark:border-slate-600" style={{
                              background: `url(${image}) no-repeat center`,
                              backgroundSize: 'cover'
                            }}>
                                {/* <Image src={image} layout="fill" objectFit="cover"/> */}
                            </div>
                            
                            <div className="py-2 items-center">
                              <div className="flex py-2 items-center">
                                 <h2 className="font-bold text-2xl md:text-3xl dark:text-slate-200">
                                  {name}
                                </h2>
                                
                                <BadgeCheckIcon className="h-5 w-5 text-green-600 mt-1 ml-1"/>
                              </div>
                              <div>
                                <p className="dark:text-slate-200">{email}</p>
                              </div>
                             
                            </div>
                        </div>
                        <ul className="px-5 h-full  pb-5 pt-4 text-gray-700 dark:text-slate-200 space-y-4 lg:space-y-4 overflow-scroll">
                          <Link href="/app/profile" >
                            <li className={` ${pathname === '/app/profile' ? 'bg-green-600 text-white': ''} flex space-x-3 p-2 rounded-full transition duration-200 hover:bg-green-600 hover:text-white`}><VscAccount className="h-6 w-6"/> <span className="font-bold">Edit Profile</span></li>
                          </Link>
                          <Link href="/app/settings">
                            <li className={` ${pathname === '/app/settings' ? 'bg-green-600 text-white': ''} flex space-x-3 p-2 rounded-full transition duration-200 hover:bg-green-600 hover:text-white`}><VscSettings className="h-6 w-6"/> <span className="font-bold">Settings</span></li>
                          </Link>
                          <li className="flex space-x-3 p-2 rounded-full transition duration-200 hover:bg-green-600 hover:text-white"><VscReport className="h-6 w-6"/> <span className="font-bold">Support</span></li>
                          <li className="flex space-x-3 p-2 rounded-full transition duration-200 hover:bg-green-600 hover:text-white"><VscCombine className="h-6 w-6"/> <span className="font-bold">Feature Request</span></li>
                          <li className="flex items-center space-x-3 p-2 rounded-full transition duration-200 hover:bg-green-600 hover:text-white"><VscWorkspaceTrusted className="h-6 w-6"/> <span className="font-bold">Privacy Policy </span><VscLinkExternal className="h-3 w-3"/></li>
                          <li className="flex items-center space-x-3 p-2 rounded-full transition duration-200 hover:bg-green-600 hover:text-white"><VscReferences className="h-6 w-6"/> <span className="font-bold">Terms of Service </span><VscLinkExternal className="h-3 w-3"/></li>
                        </ul>
                        <div className="absolute cursor-pointer hover:text-green-600 bg-white dark:border-none dark:bg-slate-700 dark:text-slate-200 py-5 px-5 flex flex-col items-center  border-t bottom-0 w-full">
                          <div className="flex space-x-3 w-full">
                            <VscSourceControl className="h-6 w-6 mt-1 ml-1"/>
                            <p className="font-bold">Build Version 1.0.0</p>
                          </div>
                        </div>
                    </Drawer>

                </div>
            </NavWrapper2>
              <Modal isOpen2={isOpen2} toggle2={toggle2}>
                <ModalHeader>Search</ModalHeader>
                <ModalBody>
                  <div className="">
                      <form className="">
                          <div className="flex w-full items-center bg-slate-100 rounded-full p-3 space-x-3 dark:bg-slate-700">
                            <VscSearch className="w-6 h-7 dark:text-slate-200"/>
                            <input className="bg-transparent w-full outline-none dark:text-slate-200" type="search" placeholder="Type keyword"/>
                          </div> 
                      </form>
                  </div>
                </ModalBody>
                <ModalFooter>
                  <button
                    onClick={toggle2}
                    className="text-white focus:outline-none m-1.5 rounded-full font-bold px-6 py-2 bg-green-600"
                  >
                    Close
                  </button>
                  
                </ModalFooter>
              </Modal>
        </header>
    )
}

export default AppHeader

const style = {
    animation: {
      left: 'animate-drawer-left',
    },
    orientation: {
      left: `flex w-8/12 md:w-80 lg:w-96 h-full left-0 mx-0 my-0 absolute focus:outline-none `,
    },
    body: `flex-shrink  p-4`,
    headerTitle: `text-2xl md:text-3xl font-light`,
    content: `relative flex flex-col bg-white dark:bg-slate-800 pointer-events-auto w-96`,
    header: `items-start justify-between p-4 border-b border-gray-300`,
    container: `fixed top-0 left-0 z-40 w-full h-full m-0 overflow-hidden`,
    overlay: `fixed top-0 left-0 z-30 w-screen h-screen bg-black opacity-50`,
    footer: `flex flex-wrap items-center justify-end p-3 border-t border-gray-300`,
  };
  
  function Drawer({ children, isOpen, toggle }) {
    const ref = React.useRef(null);
  
    // close drawer on click outside
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
  
    // close drawer when you click on "ESC" key
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
  
    // hide scrollbar and prevent body from moving when drawer is open
    //put focus on drawer dialogue
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
                className={style.orientation.left}
                ref={ref}
                role="dialogue"
                tabIndex={-1}
              >
                <div className={`${style.animation.left} ${style.content}`}>
                  {children}
                </div>
              </div>
            </div>
          </>
        )}
      </Portal>
    );
  }


  /*Logic*/

const style2 = {
  body: `flex-shrink flex-grow p-4`,
  headerTitle: `text-2xl md:text-3xl font-bold dark:text-slate-200`,
  header: `items-start justify-between p-4 border-b border-slate-300 dark:border-slate-600`,
  container: `fixed top-0 overflow-y-auto left-0 z-40 w-full h-full m-0`,
  overlay: `fixed top-0 left-0 z-30 w-screen h-screen bg-black opacity-50`,
  content: `animate-modal relative flex flex-col bg-white dark:bg-slate-800 rounded-2xl pointer-events-auto`,
  footer: `flex flex-wrap items-center justify-end p-3 border-t border-slate-300 dark:border-slate-600`,
  orientation: `mt-12 mx-3 pb-6 md:m-auto md:w-6/12 lg:w-4/12 md:pt-12 focus:outline-none`,
};

function Modal({ children, isOpen2, toggle2 }) {
  const ref = React.useRef();

  // close modal on click outside
  React.useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!ref.current?.contains(event.target)) {
        if (!isOpen2) return;
        toggle2(false);
      }
    };
    window.addEventListener('click', handleOutsideClick);
    return () => window.removeEventListener('click', handleOutsideClick);
  }, [isOpen2, ref, toggle2]);

  // close modal when you click on "ESC" key
  React.useEffect(() => {
    const handleEscape = (event) => {
      if (!isOpen2) return;
      if (event.key === 'Escape') {
        toggle2(false);
      }
    };
    document.addEventListener('keyup', handleEscape);
    return () => document.removeEventListener('keyup', handleEscape);
  }, [isOpen2, toggle2]);

  // hide scrollbar and prevent body from moving when modal is open
  //put focus on modal dialogue
  React.useEffect(() => {
    if (!isOpen2) return;

    ref.current?.focus();

    const html = document.documentElement;
    const scrollbarWidth = window.innerWidth - html.clientWidth;

    html.style.overflow = 'hidden';
    html.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      html.style.overflow = '';
      html.style.paddingRight = '';
    };
  }, [isOpen2]);

  return (
    <Portal>
      {isOpen2 && (
        <>
          <div className={style2.overlay} />
          <div className={style2.container}>
            <div
              aria-modal={true}
              className={style2.orientation}
              ref={ref}
              role="dialogue"
              tabIndex={-1}
            >
              <div className={style2.content}>{children}</div>
            </div>
          </div>
        </>
      )}
    </Portal>
  );
}

function ModalHeader({ children }) {
  return (
    <div className={style2.header}>
      <h4 className={style2.headerTitle}>{children}</h4>
    </div>
  );
}

function ModalBody({ children }) {
  return <div className={style2.body}>{children}</div>;
}

function ModalFooter({ children }) {
  return <div className={style2.footer}>{children}</div>;
}