import Link from "next/link";
import Wrapper from "./Wrapper";

const Footer = () => {
    return(
        <footer className="flex py-10 bg-slate-800 text-white w-full">
            <Wrapper>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 w-full text-center lg:text-left">
                    <div className="w-full p-3 lg:text-center">
                        <h3 className="text-xl font-bold">
                            QUICK LINKS
                        </h3>
                        <ul className="py-4 space-y-1 ">
                            <Link href="/">
                                <p className="p-2 cursor-pointer transition duration-200 hover:bg-green-600 rounded-full hover:font-bold px-3 hover:text-white">
                                    Home
                                </p>
                            </Link>
                            <Link href="/about">
                                <p className="p-2 cursor-pointer transition duration-200 hover:bg-green-600 rounded-full hover:font-bold px-3 hover:text-white">
                                    About
                                </p>
                            </Link>
                            <Link href="/faq">
                                <p className="p-2 cursor-pointer transition duration-200 hover:bg-green-600 rounded-full hover:font-bold px-3 hover:text-white">
                                    FAQ 
                                </p>
                            </Link>
                        </ul>
                    </div>
                    <div className="w-full p-3 lg:text-center">
                        <h3 className="text-xl font-bold">
                            LEGAL
                        </h3>
                        <ul className="py-4 space-y-1">
                            <Link href="/privacy">
                                <p className="p-2 cursor-pointer transition duration-200 hover:bg-green-600 rounded-full hover:font-bold px-3 hover:text-white">
                                    Privacy Policy
                                </p>
                            </Link>
                            <Link href="/terms">
                                <p className="p-2 cursor-pointer transition duration-200 hover:bg-green-600 rounded-full hover:font-bold px-3 hover:text-white">
                                    Terms of Service
                                </p>
                            </Link>
                            
                        </ul>
                    </div>
                    <div className="w-full p-3 lg:text-center">
                        <h3 className="text-xl font-bold">
                            TECHNOLOGY
                        </h3>
                        <ul className="py-4 space-y-1">
                            <Link href="/privacy">
                                <p className="p-2 cursor-pointer transition duration-200 hover:bg-green-600 rounded-full hover:font-bold px-3 hover:text-white">
                                    Vercel <span className="text-sm badge">External Link</span>
                                </p>
                            </Link>
                            <Link href="/terms">
                                <p className="p-2 cursor-pointer transition duration-200 hover:bg-green-600 rounded-full hover:font-bold px-3 hover:text-white">
                                    Our Stack <span className="text-sm badge">External Link</span>
                                </p>
                            </Link>
                            
                        </ul>
                    </div>
                </div>
            </Wrapper>
        </footer>
    )
}

export default Footer;