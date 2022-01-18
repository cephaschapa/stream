import React from "react"
import Image from "next/image";
import Wrapper from "./Wrapper";
import { ChevronDoubleDownIcon, ChevronDownIcon, ColorSwatchIcon, MenuAlt3Icon, MoonIcon, SunIcon, UserCircleIcon, UserGroupIcon, UserIcon } from '@heroicons/react/outline';
import {useRouter} from 'next/router';
import Link from 'next/link';
import Portal from '@reach/portal';
import { AnnotationIcon, CalendarIcon, DocumentIcon, VideoCameraIcon, ViewGridAddIcon } from "@heroicons/react/solid";
import {useTheme} from 'next-themes';

function Header() {
    const router = useRouter();

    const {theme, setTheme} = useTheme();

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
            <header className="h-16 bg-opacity-5 dark:bg-opacity-5 backdrop-filter backdrop-blur-lg bg:white transition duration-300 dark:bg-slate-800 lg:h-20 w-full bg-white shadow-md fixed top-0 z-50">
                <Wrapper>
                    <div className="grid grid-cols-2 w-full">
                        <div className="flex space-x-2 relative items-center">
                            <div className="relative h-12 w-12">
                            <Image src="/assets/images/logo1.svg" layout="fill" objectFit="cover" alt="streamio-logo"/>
                            </div>
                            <span className="text-2xl dark:text-white text-gray-600">StreamIO</span>
                        </div>
                        <div className="hidden lg:flex justify-end items-center w-full">
                            <ul className="flex space-x-4 text-black items-center">
                                <li className="text-black dark:hover:bg-slate-700 dark:text-white cursor-pointer font-bold p-3 hover:bg-gray-200 transition duration-200 rounded-full">Home</li>
                                <li className="text-black dark:hover:bg-slate-700 dark:text-white cursor-pointer font-bold p-3 hover:bg-gray-200 transition duration-200 rounded-full">Features</li>
                                <li className="text-black dark:hover:bg-slate-700 dark:text-white cursor-pointer font-bold p-3 hover:bg-gray-200 transition duration-200 rounded-full">About</li>
                                <li>
                                <Dropdown>
                                  <DropdownToggle>
                                    <div className="flex space-x-2 font-bold dark:hover:bg-slate-700 dark:text-white cursor-pointer p-3 hover:bg-gray-200 transition duration-200 rounded-full">
                                      <ColorSwatchIcon className="h-6 w-6 dark:text-yellow-600" />
                                      <p className="whitespace-nowrap">
                                        Change Theme
                                      </p>
                                      <ChevronDownIcon className="h-6 w-6" />
                                    </div>
                                  </DropdownToggle>
                                  <DropdownMenu>
                                    
                                      <button aria-label="Set dark mode" onClick={()=>setTheme('dark')} className="flex p-3 hover:bg-slate-300 w-full transition duration-200 rounded-full my-2 dark:hover:bg-slate-700 dark:text-white items-center space-x-2 whitespace-nowrap">
                                        <MoonIcon className="h-6 w-6 dark:text-white"/>
                                        <p className="font-bold">Deep Space (Dark)</p>
                                      </button>
                                    
                                    
                                    <button aria-label="Set light mode" onClick={()=>setTheme('light')} className="flex p-3 hover:bg-slate-300 w-full transition duration-200 rounded-full my-2 dark:hover:bg-slate-700 dark:text-white items-center space-x-2 whitespace-nowrap">
                                        <SunIcon className="h-6 w-6 dark:text-white"/>
                                        <p className="font-bold">Procyon (light)</p>
                                      </button>
                                    
                                  </DropdownMenu>
                                </Dropdown>
                                </li>
                                
                                {
                                  isLoggedIn? <button type="button" onClick={toggle2} aria-label="Profile Button" className="text-green-600 whitespace-nowrap hover:text-white space-x-3 dark:border-white dark:text-white border-2 border-green-600 px-5 cursor-pointer font-bold p-3 transition duration-200 hover:bg-green-500 rounded-full flex items-center ">
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
                            <button aria-label="Menu" name="Menu Button" onClick={toggle} className=" flex flex-col items-center justify-center border space-y-1.5 h-12 w-12 rounded-2xl  border-gray-500 p-1">
                                {/* <MenuAlt3Icon className="h-8 w-8 font-light text-gray-500"/> */}
                                <div className="w-7 bg-white transition duration-300 dark:border-slate-100 border border-gray-500 rounded-full"></div>
                                <div className="w-7 bg-white transition duration-300 dark:border-slate-100 border border-gray-500 rounded-full"></div>
                                <div className="w-7 bg-white transition duration-300 dark:border-slate-100 border border-gray-500 rounded-full"></div>
                            </button>
                        </div>
                    </div>
                </Wrapper>
                <Drawer isOpen={isOpen} toggle={toggle2} position="left">
                  <div className="w-full h-52 streamio-hero border-b dark:border-none border-gray-300">
                    <DrawerHeader>
                      <UserCircleIcon className="h-12 text-green-600 w-12"/>
                      Cephas Chapa
                      <p className="text-lg">cephaschapa@gmail.com</p>
                    </DrawerHeader>
                    
                  </div>
                  <DrawerBody>
                    <ul className="space-y-3 pt-8">
                        <li className="flex cursor-pointer items-center space-x-4 hover:bg-gray-100  p-3 rounded-full dark:hover:bg-slate-700 transition duration-200">
                          <div>
                            <ViewGridAddIcon className="w-7 h-7 text-green-600"/>
                          </div>
                          <div>
                            <p className="text-xl">Account</p>
                          </div>
                        </li>
                        <li className="flex cursor-pointer  items-center space-x-4 hover:bg-gray-100 p-3 rounded-full dark:hover:bg-slate-700 transition duration-200">
                          <div>
                            <UserGroupIcon className="w-7 h-7 text-green-600"/>
                          </div>
                          <div>
                            <p className="text-xl">My Meetings</p>
                          </div>
                        </li>
                        <li className="flex cursor-pointer items-center space-x-4 hover:bg-gray-100  p-3 rounded-full dark:hover:bg-slate-700 transition duration-200">
                          <div>
                            <VideoCameraIcon className="w-7 h-7 text-green-600"/>
                          </div>
                          <div>
                            <p className="text-xl">My Recordings</p>
                          </div>
                        </li>
                        <li className="flex cursor-pointer items-center space-x-4 hover:bg-gray-100 dark:hover:bg-slate-700 transition duration-200  p-3 rounded-full ">
                          <div>
                            <CalendarIcon className="w-7 h-7 text-green-600"/>
                          </div>
                          <div>
                            <p className="text-xl">Events</p>
                          </div>
                        </li>
                        <li className="flex cursor-pointer items-center space-x-4 hover:bg-gray-100  p-3 rounded-full dark:hover:bg-slate-700 transition duration-200">
                          <div>
                            <AnnotationIcon className="w-7 h-7 text-green-600"/>
                          </div>
                          <div>
                            <p className="text-xl">Chat</p>
                          </div>
                        </li>
                        <li className="flex  cursor-pointer items-center space-x-4 hover:bg-gray-100  p-3 rounded-full dark:hover:bg-slate-700 transition duration-200">
                          <div>
                            <DocumentIcon className="w-7 h-7 text-green-600"/>
                          </div>
                          <div>
                            <p className="text-xl">Shared Files</p>
                          </div>
                        </li>
                      </ul>
                  </DrawerBody>
                  
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
                <MenuItem href="#">Features</MenuItem>
                <MenuItem href="#">About</MenuItem>
                <MenuItem href="#">FAQ</MenuItem>
                <Link href="/login">
                  <button aria-label="Login" className="bg-green-600 text-white w-full font-bold p-4 rounded-full m-1 uppercase">Sign In</button>
                </Link>
                <button aria-label="Theme" className="border-2 border-green-600 w-full dark:text-white font-bold p-4 uppercase rounded-full m-1">Sign Up</button>
                <div className="py-5 border-t border-slate-200 dark:border-slate-600 mt-10 space-y-3">
                  <p className="dark:text-white font-bold">THEME PREFERENCE</p>
                  <div className="flex justify-center space-x-2">
                    <button aria-label="Light" onClick={()=>{
                      setTheme('light')
                      
                    }} className=" border-2 dark:border-slate-600 flex items-center justify-center text-gray-6 font-bold p-4 uppercase rounded-2xl">
                        <p className="dark:text-white"></p>
                         <SunIcon className="h-6 w-6 dark:text-white"/>            
                    </button>
                    <button aria-label="Dark" onClick={()=>{
                        setTheme('dark')
                    }} className=" border-2 dark:border-slate-600  flex items-center justify-center text-gray-6 font-bold p-4 uppercase rounded-2xl">
                        <span className="dark:text-white"></span>
                        <MoonIcon className="h-6 w-6 dark:text-white text-slate-500"/>      
                    </button>
                  </div>
                </div>
                </MenuContainer>
            </Menu>
        </div>
    )
}

export default Header

/* Logic*/
const style = {
    container: `relative p-3 top-1/4 w-full text-center mt-8`,
    item: `text-lg font-bold text-gray-600 cursor-pointer hover:bg-slate-100 p-3 rounded-full dark:text-white`,
    menu: {
      open: `h-full w-full `,
      close: `w-full h-0`,
      default: `overflow-x-hidden shadow-md md:overflow-hidden transition-all duration-700 fixed z-10 top-0 left-0 bg-white transition duration-300 dark:bg-slate-800`,
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
  body: `flex-shrink flex-grow p-4 dark:text-white`,
  headerTitle: `text-2xl md:text-3xl font-light dark:text-white`,
  content: `relative w-screen flex flex-col bg-white dark:bg-slate-800 duration-300 transition pointer-events-auto`,
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

/* Logic*/

function useToggle() {
  const [show, setShow] = React.useState(false);
  const ref = React.useRef(null);

  const toggle = React.useCallback(() => {
    setShow((prevState) => !prevState);
  }, []);

  // close dropdown when you click outside
  React.useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!ref.current?.contains(event.target)) {
        if (!show) return;
        setShow(false);
      }
    };
    window.addEventListener('click', handleOutsideClick);
    return () => window.removeEventListener('click', handleOutsideClick);
  }, [show, ref]);

  // close dropdown when you click on "ESC" key
  React.useEffect(() => {
    const handleEscape = (event) => {
      if (!show) return;

      if (event.key === 'Escape') {
        setShow(false);
      }
    };
    document.addEventListener('keyup', handleEscape);
    return () => document.removeEventListener('keyup', handleEscape);
  }, [show]);

  return {
    show,
    toggle,
    ref,
  };
}

const style3 = {
  item: `block dark:text-white font-bold w-full py-2 transition duration-200 dark:hover:bg-slate-800 px-8 mb-2 text-sm clear-both whitespace-nowrap border-0 hover:bg-gray-200 rounded-full cursor-pointer`,
  menu: `block z-30 absolute top-0 left-0 bg-white dark:bg-slate-600 transition duration-200 dark:border-none rounded-2xl float-left py-2 px-2 text-left border border-gray-300 mt-0.5 mb-0 mx-0 bg-clip-padding`,
};

function Dropdown({ children }) {
  const { show, toggle } = useToggle();
  /* First child contains the dropdown toggle */
  const dropdownToggle = children[0];

  /* Second child contains the dropdown menu */
  const dropdownMenu = children[1];

  return (
    <>
      <button
        className="focus:outline-none"
        onClick={toggle}
        type="button"
        id="options-menu"
        aria-expanded="true"
        aria-haspopup="true"
      >
        {dropdownToggle}
      </button>
      {show && <>{dropdownMenu}</>}
    </>
  );
}

function DropdownToggle({ children }) {
  return <>{children}</>;
}

function DropdownMenu({ children }) {
  return (
    <div className="relative">
      <div
        style={{ transform: 'translate3d(0px, 3px, 0px)' }}
        className={style3.menu}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        {children}
      </div>
    </div>
  );
}

/* You can wrap the a tag with Link and pass href prop to Link if you are using either Create-React-App, Next.js or Gatsby */
function DropdownItem({ children }) {
  return (
    <a tabIndex={0} className={style3.item} role="menuitem">
      {children}
    </a>
  );
}