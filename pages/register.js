import { DeviceMobileIcon, IdentificationIcon, LockClosedIcon, MailIcon, PhoneIcon } from "@heroicons/react/outline"
import { MapIcon } from "@heroicons/react/solid"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

import {SocialIcon} from 'react-social-icons'

const RegisterPage = () => {
    return (
        <div>
            <Head>
        {/* Meta */}
                <meta name="description" content="Stream-IO - Fast, Reliable, Secure Confrencing"/>
                <meta name='robots' content='index, follow'/>
                <meta property="og:type" content="Stream-IO - Fast, Reliable, Secure Confrencing" />
                <meta property="og:title" content="Stream-IO - Fast, Reliable, Secure Confrencing" />
                <meta property="og:description" content="Stream-IO - Fast, Reliable, Secure Confrencing" />
                <meta property="og:image" content="/assets/images/logo1.svg" />
                <meta property="og:url" content="https://streamio.cephaschapa.xyz" />
                <meta property="og:site_name" content="Stream-IO - Fast, Reliable, Secure Confrencing" />
                
                {/* Links */}
                <link rel='canonical' href='https://streamio.cephaschapa.xyz'/>
                <link rel="icon" href="/assets/images/logo1.svg" />
                <title>Stream-IO - Register</title>
            </Head>

            <main className="streamio-hero dark:bg-slate-800">
                <div className="flex w-full">
                    <div className="flex items-center justify-center w-full h-screen px-3">
                        <div className="flex border dark:border-none shadow-lg lg:w-1/4 lg:px-10 space-y-3 p-2 py-10 flex-col bg-white dark:bg-slate-700 rounded-2xl w-full items-center justify-center">
                            <div className="flex flex-col items-center justify-center">
                                <div className="relative h-20 w-20">
                                    <Image src="/assets/images/logo1.svg" layout="fill" objectFit="cover" alt="streamio-logo"/>
                                </div>
                                <p className="text-2xl text-gray-600 dark:text-white font-bold">StreamIO</p>
                            </div>
                            <div className="w-full space-y-3">
                                <form className="w-full space-y-3">
                                    <div className="flex border border-gray-600 dark:bg-slate-600 focus:bg-gray-500 w-full bg-white p-3 rounded-full space-x-3">
                                        <IdentificationIcon className="w-6 h-6 text-gray-600 dark:text-white"/>
                                        <input className="bg-none  w-full outline-none bg-transparent dark:text-white" type="text" placeholder="Full Name*" required/>
                                    </div>
                                    <div className="flex border border-gray-600 dark:bg-slate-600 focus:bg-gray-500 w-full bg-white p-3 rounded-full space-x-3">
                                        <MailIcon className="w-6 h-6 text-gray-600 dark:text-white"/>
                                        <input className="bg-none  w-full outline-none bg-transparent dark:text-white" type="email" placeholder="Email*" required/>
                                    </div>
                                    <div className="flex border border-gray-600 dark:bg-slate-600 focus:bg-gray-500 w-full bg-white p-3 rounded-full space-x-3">
                                        <PhoneIcon className="w-6 h-6 text-gray-600 dark:text-white"/>
                                        <input className="bg-none  w-full outline-none bg-transparent dark:text-white" type="tel" placeholder="Phone Number*" required/>
                                    </div>
                                    <div className="flex w-full border border-gray-600 dark:bg-slate-600 bg-white p-3 rounded-full space-x-3">
                                        <LockClosedIcon className="w-6 h-6 text-gray-600 dark:text-white"/>
                                        <input className="bg-none w-full outline-none bg-transparent dark:text-white" type="password" minLength={8} placeholder="Password*" required/>
                                        
                                    </div>
                                    <div className="flex w-full border border-gray-600 dark:bg-slate-600 bg-white p-3 rounded-full space-x-3">
                                        <LockClosedIcon className="w-6 h-6 text-gray-600 dark:text-white"/>
                                        <input className="bg-none w-full outline-none bg-transparent dark:text-white" type="password" minLength={8} placeholder="Confirm Password*" required/>   
                                    </div>

                                    <button className="w-full hover:bg-green-500 transition duration-200 p-3 bg-[#16A34A] rounded-full uppercase font-bold text-white">
                                        Register
                                    </button>
                                    
                                   
                                </form>
                                <p className="text-center dark:text-white uppercase">Or register with</p>
                                <div className="flex justify-center space-x-3">
                                    <div className="h-12 w-12 relative bg-slate-500 dark:bg-slate-600 rounded-full">
                                        <Image src='/assets/images/facebook.png' layout="fill" objectFit="cover" />
                                    </div>
                                    <div className="h-12 w-12 relative bg-slate-500 dark:bg-slate-600 rounded-full">
                                        <Image src='/assets/images/google.png' layout="fill" objectFit="cover" />
                                    </div>
                                    <div className="h-12 w-12 relative bg-slate-500 dark:bg-slate-600 rounded-full">
                                        <Image src='/assets/images/linkedinC.png' layout="fill" objectFit="cover" />
                                    </div>
                                </div>
                                <Link href="/login">
                                    <button aria-label="Login" className="text-center w-full cursor-pointer hover:text-green-500 transition duration-200 text-slate-500 dark:text-white font-bold uppercase border-2 border-slate-500 p-3 rounded-full">LOGIN</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="hidden lg:flex">

                    </div>
                </div>
            </main>
        </div>
    )
}

export default RegisterPage
