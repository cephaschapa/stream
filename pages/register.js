import { DeviceMobileIcon, IdentificationIcon, LockClosedIcon, MailIcon } from "@heroicons/react/outline"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

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

            <main className="streamio-hero">
                <div className="flex w-full">
                    <div className="flex   items-center justify-center w-full h-screen px-3">
                        <div className="flex shadow-lg lg:w-1/4 lg:px-10 space-y-3 p-2 py-10 flex-col bg-white rounded-2xl w-full items-center justify-center">
                            <div className="flex flex-col items-center justify-center">
                                <div className="relative h-20 w-20">
                                    <Image src="/assets/images/logo1.svg" layout="fill" objectFit="cover" alt="streamio-logo"/>
                                </div>
                                <p className="text-2xl text-gray-600">StreamIO</p>
                            </div>
                            <div className="w-full space-y-3">
                                <form className="w-full space-y-3">
                                    <div className="flex border border-gray-600 focus:bg-gray-500 w-full bg-white p-3 rounded-full space-x-3">
                                        <IdentificationIcon className="w-6 h-6 text-gray-600"/>
                                        <input className="bg-none w-full outline-none" type="text" placeholder="Full Names*"/>
                                    </div>
                                    <div className="flex border border-gray-600 focus:bg-gray-500 w-full bg-white p-3 rounded-full space-x-3">
                                        <MailIcon className="w-6 h-6 text-gray-600"/>
                                        <input className="bg-none w-full outline-none" type="text" placeholder="Email*"/>
                                    </div>
                                    <div className="flex border border-gray-600 focus:bg-gray-500 w-full bg-white p-3 rounded-full space-x-3">
                                        <DeviceMobileIcon className="w-6 h-6 text-gray-600"/>
                                        <input className="bg-none w-full outline-none" type="text" placeholder="Phone Number*"/>
                                    </div>
                                    <div className="flex w-full border border-gray-600 bg-white p-3 rounded-full space-x-3">
                                        <LockClosedIcon className="w-6 h-6 text-gray-600"/>
                                        <input className="bg-none w-full outline-none" type="password" placeholder="Password*"/>
                                    </div>
                                    <button className="w-full hover:bg-green-500 transition duration-200 p-3 bg-[#16A34A] rounded-full uppercase font-bold text-white">
                                        Sign Up
                                    </button>
                                </form>
                                <Link href="/login">
                                    <p className="text-center cursor-pointer hover:text-green-500 transition duration-200 text-green-600 font-bold">Or Login</p>
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
