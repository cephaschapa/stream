import React from "react"
import Image from "next/image";
import Wrapper from "./Wrapper";
import { MenuAlt3Icon, UserCircleIcon, UserGroupIcon, UserIcon } from '@heroicons/react/outline'
import {useRouter} from 'next/router'
import Link from 'next/link';
import Portal from '@reach/portal';
import { AnnotationIcon, CalendarIcon, DocumentIcon, VideoCameraIcon, ViewGridAddIcon } from "@heroicons/react/solid";

function Header() {
    const router = useRouter()

    const [open, setOpen] = React.useState(false);
    const [isLoggedIn, setIsLoggedIn] = React.useState(true);

    const toggle = () => {
        setOpen((prevState) => !prevState);
    };

    const [isOpen, setIsOpen] = React.useState(false);

    const toggle2 = () => {
      setIsOpen(!isOpen);
    };
    
    return (
        <div>
            <header className="h-16 lg:h-20 w-full bg-white shadow-md fixed top-0 z-50">
                <Wrapper>
                    <div className="grid grid-cols-2 w-full">
                        <div className="flex space-x-2 relative items-center">
                            <div className="relative h-12 w-12">
                            <Image src="/assets/images/logo1.svg" layout="fill" objectFit="cover" alt="streamio-logo"/>
                            </div>
                            <span className="text-2xl text-gray-600">StreamIO</span>
                        </div>
                        <div className="hidden lg:flex justify-end items-center w-full">
                            <ul className="flex space-x-4 text-black items-center">
                                <li className="text-black cursor-pointer font-bold p-3 hover:bg-gray-200 transition duration-200 rounded-full">Home</li>
                                <li className="text-black cursor-pointer font-bold p-3 hover:bg-gray-200 transition duration-200 rounded-full">About</li>
                                <li className="text-black cursor-pointer font-bold p-3 hover:bg-gray-200 transition duration-200 rounded-full">Team</li>
                                <li className="text-black cursor-pointer font-bold p-3 hover:bg-gray-200 transition duration-200 rounded-full">FAQ</li>
                                {
                                  isLoggedIn? <button type="button" onClick={toggle2} aria-label="Sign In" className="text-green-600 hover:text-white space-x-3 border border-green-600 px-5 cursor-pointer font-bold p-3 transition duration-200 hover:bg-green-500 rounded-full flex items-center ">
                                    <UserCircleIcon className="h-7 w-7 rounded-full"/>
                                    <span>Cephas Chapa</span>
                                  </button> : <>
                                    <Link href="/login">
                                      <button aria-label="Sign In" className="text-white  bg-green-600 cursor-pointer font-bold p-3 transition duration-200 hover:bg-green-500 rounded-full w-32">Login</button>
                                    </Link>
                                    <Link href="/register">
                                      <button aria-label="Sign Up" className="hover:text-white bg-white border border-green-600 cursor-pointer font-bold p-3 transition duration-200 hover:bg-green-500 rounded-full w-32">Sign Up</button>
                                    </Link>
                                  </>
                                }
                            </ul>
                        </div>
                        <div className="flex lg:hidden items-center justify-end">
                            <button aria-label="Menu" name="Menu Button" na onClick={toggle} className=" flex flex-col items-center justify-center border space-y-1.5 h-12 w-12 rounded-full  border-gray-500 p-1">
                                {/* <MenuAlt3Icon className="h-8 w-8 font-light text-gray-500"/> */}
                                <div className="w-7 border border-gray-500 rounded-full"></div>
                                <div className="w-7 border border-gray-500 rounded-full"></div>
                                <div className="w-7 border border-gray-500 rounded-full"></div>
                            </button>
                        </div>
                    </div>
                </Wrapper>
                <Drawer isOpen={isOpen} toggle={toggle2} position="left">
                  <div className="w-full h-52 streamio-hero border-b border-gray-300">
                    <DrawerHeader>
                      <UserCircleIcon className="h-12 text-green-600 w-12"/>
                      Cephas Chapa
                      <p className="text-lg">cephaschapa@gmail.com</p>
                    </DrawerHeader>
                    
                  </div>
                  <DrawerBody>
                    <ul className="space-y-3 pt-8">
                        <li className="flex cursor-pointer items-center space-x-4 hover:bg-gray-100  p-2 rounded-full ">
                          <div>
                            <ViewGridAddIcon className="w-7 h-7 text-green-600"/>
                          </div>
                          <div>
                            <p className="text-xl">Account</p>
                          </div>
                        </li>
                        <li className="flex cursor-pointer  items-center space-x-4 hover:bg-gray-100 p-2 rounded-full ">
                          <div>
                            <UserGroupIcon className="w-7 h-7 text-green-600"/>
                          </div>
                          <div>
                            <p className="text-xl">My Meetings</p>
                          </div>
                        </li>
                        <li className="flex cursor-pointer items-center space-x-4 hover:bg-gray-100  p-2 rounded-full ">
                          <div>
                            <VideoCameraIcon className="w-7 h-7 text-green-600"/>
                          </div>
                          <div>
                            <p className="text-xl">My Recordings</p>
                          </div>
                        </li>
                        <li className="flex cursor-pointer items-center space-x-4 hover:bg-gray-100  p-2 rounded-full ">
                          <div>
                            <CalendarIcon className="w-7 h-7 text-green-600"/>
                          </div>
                          <div>
                            <p className="text-xl">Events</p>
                          </div>
                        </li>
                        <li className="flex cursor-pointer items-center space-x-4 hover:bg-gray-100  p-2 rounded-full ">
                          <div>
                            <AnnotationIcon className="w-7 h-7 text-green-600"/>
                          </div>
                          <div>
                            <p className="text-xl">Chat</p>
                          </div>
                        </li>
                        <li className="flex  cursor-pointer items-center space-x-4 hover:bg-gray-100  p-2 rounded-full ">
                          <div>
                            <DocumentIcon className="w-7 h-7 text-green-600"/>
                          </div>
                          <div>
                            <p className="text-xl">Shared Files</p>
                          </div>
                        </li>
                      </ul>
                  </DrawerBody>
                  <DrawerFooter>
                    {/* <button
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
                    </button> */}

                  </DrawerFooter>
                </Drawer>
            </header>
            {/* Drawer */}
            <Menu open={open}>
                <button
                aria-label="Close"
                className="absolute top-3 right-3 text-5xl text-white cursor-pointer"
                onClick={toggle}
                >
                &times;
                </button>
                <MenuContainer>
                <MenuItem href="#">Home</MenuItem>
                <MenuItem href="#">About</MenuItem>
                <MenuItem href="#">Team</MenuItem>
                <MenuItem href="#">FAQ</MenuItem>
                <Link href="/login">
                  <button className="bg-green-600 text-white font-bold mt-4 p-4 w-32 rounded-full m-1">Sign In</button>
                </Link>
                <button className="border border-green-600 text-gray-6 mt-4 font-bold p-4 w-32 rounded-full m-1">Sign Up</button>
                </MenuContainer>
            </Menu>
        </div>
    )
}

export default Header

/* Logic*/
const style = {
    container: `relative top-1/4 w-full text-center mt-8`,
    item: `text-3xl text-gray-600 cursor-pointer hover:text-white`,
    menu: {
      open: `h-full w-full `,
      close: `w-full h-0`,
      default: `overflow-x-hidden shadow-md md:overflow-hidden transition-all duration-700 fixed z-10 top-0 left-0 bg-white`,
    },
  };
  
  function Menu({ children, open }) {
    return (
      <div
        className={`${style.menu.default} 
         ${open ? style.menu.open : style.menu.close}`}
      >
        {children}
      </div>
    );
  }
  
  function MenuContainer({ children }) {
    return <div className={style.container}>{children}</div>;
  }
  
  function MenuItem({ children, href }) {
    return (
      <div className="p-2">
        <a href={href} className={style.item}>
          {children}
        </a>
      </div>
    );
  }

  /* Logic */

const style2 = {
  animation: {
    right: 'animate-drawer-right',
  },
  orientation: {
    right: `flex w-8/12 md:w-80 lg:w-96 h-full right-0 mx-0 my-0 absolute focus:outline-none `,
  },
  body: `flex-shrink flex-grow p-4`,
  headerTitle: `text-2xl md:text-3xl font-light`,
  content: `relative w-screen flex flex-col bg-white pointer-events-auto`,
  header: `items-start justify-between p-4`,
  container: `fixed top-0 left-0 z-50 w-full h-full m-0 overflow-hidden`,
  overlay: `fixed top-0 left-0 z-50 w-screen h-screen bg-black opacity-50`,
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
          <div className={style2.overlay} />
          <div className={style2.container}>
            <div
              aria-modal={true}
              className={style2.orientation.right}
              ref={ref}
              role="dialogue"
              tabIndex={-1}
            >
              <div className={`${style2.animation.right} ${style2.content}`}>
                {children}
              </div>
            </div>
          </div>
        </>
      )}
    </Portal>
  );
}

function DrawerHeader({ children }) {
  return (
    <div className={style2.header}>
      <h4 className={style2.headerTitle}>{children}</h4>
    </div>
  );
}

function DrawerBody({ children }) {
  return <div className={style2.body}>{children}</div>;
}

function DrawerFooter({ children }) {
  return <div className={style2.footer}>{children}</div>;
}