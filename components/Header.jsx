import React from "react"
import Image from "next/image";
import Wrapper from "./Wrapper";
import { MenuAlt3Icon } from '@heroicons/react/outline'
function Header() {

    const [open, setOpen] = React.useState(false);

    const toggle = () => {
        setOpen((prevState) => !prevState);
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
                            <ul className="flex space-x-4 text-black">
                                <li className="text-black cursor-pointer font-bold p-3 hover:bg-gray-200 transition duration-200 rounded-full">Home</li>
                                <li className="text-black cursor-pointer font-bold p-3 hover:bg-gray-200 transition duration-200 rounded-full">About</li>
                                <li className="text-black cursor-pointer font-bold p-3 hover:bg-gray-200 transition duration-200 rounded-full">Team</li>
                                <li className="text-black cursor-pointer font-bold p-3 hover:bg-gray-200 transition duration-200 rounded-full">FAQ</li>
                                <button className="text-white bg-green-600 cursor-pointer font-bold p-3 transition duration-200 hover:bg-green-500 rounded-full w-32">Login</button>
                                <button className="hover:text-white bg-white border border-green-600 cursor-pointer font-bold p-3 transition duration-200 hover:bg-green-500 rounded-full w-32">Sign Up</button>
                            </ul>
                        </div>
                        <div className="flex lg:hidden items-center justify-end">
                            <button name="Menu Button" na onClick={toggle} className=" flex flex-col items-center justify-center border space-y-1.5 h-12 w-12 rounded-full  border-gray-500 p-1">
                                {/* <MenuAlt3Icon className="h-8 w-8 font-light text-gray-500"/> */}
                                <div className="w-7 border border-gray-500 rounded-full"></div>
                                <div className="w-7 border border-gray-500 rounded-full"></div>
                                <div className="w-7 border border-gray-500 rounded-full"></div>
                            </button>
                        </div>
                    </div>
                </Wrapper>
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
                <button className="bg-green-600 text-white font-bold mt-4 p-4 w-32 rounded-full m-1">Sign In</button>
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
