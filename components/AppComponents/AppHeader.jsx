import React from "react";
import { DotsVerticalIcon, MenuIcon } from "@heroicons/react/outline";
import NavWrapper from "./NavWrapper";
import Portal from '@reach/portal';
import Image from "next/image";
import { BadgeCheckIcon, BanIcon, CogIcon, CubeTransparentIcon, PencilIcon, ShieldCheckIcon, SupportIcon, ViewListIcon } from "@heroicons/react/solid";
import { useSession, signOut } from "next-auth/react";
import MainModal from "../Reusables/Modals";

const AppHeader = ({session}) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [user, setUser] = React.useState({})
    const [isSigningOut, setIsSigningOut] =  React.useState(false)
    
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
      setInterval(()=>{
        
        signOut();
      },1000)
      
      
    }

    if(session){
      
    }

    return(
        <header className="shadow-md bg-green-600 fixed top-0 w-full">
            
            <NavWrapper>
                <div className="flex justify-between w-full">
                    <div className="">
                        <button type="button" aria-label="Drawer"  onClick={toggle}>
                            <MenuIcon className="h-8 w-8 text-white"/>
                        </button>
                        
                    </div>
                    <div className="flex items-center">
                      <h1 className="text-xl font-bold uppercase text-white">Activities</h1>
                    </div>
                    <div className="">
                        <DotsVerticalIcon className="h-8 w-8 text-white"/>
                    </div>
                    {/* Drawer Menu */}
                    <Drawer isOpen={isOpen} toggle={toggle} position="left">
                        <div className="flex flex-col px-5 py-5 border-b">
                            <div className="relative h-16 w-16 rounded-full border-4 border-green-600" style={{
                              background: `url(${image}) no-repeat center`,
                              backgroundSize: 'cover'
                            }}>
                                {/* <Image src={image} layout="fill" objectFit="cover"/> */}
                            </div>
                            
                            <div className="py-2 items-center">
                              <div className="flex py-2 items-center">
                                 <h2 className="font-bold text-2xl md:text-3xl">
                                  {name}
                                </h2>
                                
                                <BadgeCheckIcon className="h-5 w-5 text-green-600 mt-1 ml-1"/>
                              </div>
                              <div>
                                <p className="">{email}</p>
                              </div>
                             
                            </div>
                        </div>
                        <ul className="px-5  pb-5 pt-4 text-gray-700 space-y-4 lg:space-y-4">
                          <li className="flex space-x-3 p-2 rounded-full transition duration-200 hover:bg-green-600 hover:text-white"><PencilIcon className="h-6 w-6"/> <span className="font-bold">Edit Profile</span></li>
                          <li className="flex space-x-3 p-2 rounded-full transition duration-200 hover:bg-green-600 hover:text-white"><CogIcon className="h-6 w-6"/> <span className="font-bold">Settings</span></li>
                          <li className="flex space-x-3 p-2 rounded-full transition duration-200 hover:bg-green-600 hover:text-white"><SupportIcon className="h-6 w-6"/> <span className="font-bold">Support</span></li>
                          <li className="flex space-x-3 p-2 rounded-full transition duration-200 hover:bg-green-600 hover:text-white"><CubeTransparentIcon className="h-6 w-6"/> <span className="font-bold">Feature Request</span></li>
                          <li className="flex space-x-3 p-2 rounded-full transition duration-200 hover:bg-green-600 hover:text-white"><ShieldCheckIcon className="h-6 w-6"/> <span className="font-bold">Privacy Policy</span></li>
                          <li className="flex space-x-3 p-2 rounded-full transition duration-200 hover:bg-green-600 hover:text-white"><ViewListIcon className="h-6 w-6"/> <span className="font-bold">Terms of Service</span></li>                        
                        </ul>
                        <div className="flex px-5 w-full">
                          <button className="bg-green-600 p-2 rounded-full text-white font-bold w-full" onClick={handleSignOut}>{
                            isSigningOut ? (<>Signing out... </>) : ('Sign Out')
                          }</button>
                        </div>
                        <div className="absolute py-5 flex flex-col items-center justify-center border-t bottom-0 w-full">
                          <p className="font-bold">Build Version 1.0.0</p>
                        </div>
                    </Drawer>
                </div>
            </NavWrapper>
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
    content: `relative flex flex-col bg-white pointer-events-auto w-96`,
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