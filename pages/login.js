import { LockClosedIcon, MailIcon } from "@heroicons/react/outline"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

const LoginPage = () => {
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

            <main className="flex streamio-hero dark:bg-slate-800 h-screen items-center justify-center">
                <div className="flex w-full">
                    <div className="flex items-center justify-center w-full px-3">
                        <div className="flex border lg:border-r-0 dark:border-none lg:shadow-none shadow-lg lg:w-1/4 lg:px-10 space-y-3 p-2 py-10 flex-col bg-white dark:bg-slate-700 rounded-2xl lg:rounded-r-none  w-full items-center justify-center">
                            <div className="flex flex-col items-center justify-center">
                                <div className="relative h-20 w-20">
                                    <Image src="/assets/images/logo1.svg" layout="fill" objectFit="cover" alt="streamio-logo"/>
                                </div>
                                <p className="text-2xl text-gray-600 dark:text-white font-bold">StreamIO</p>
                            </div>
                            <div className="w-full space-y-3">
                                <form className="w-full space-y-3">
                                    <div className="flex border border-gray-600 dark:bg-slate-600 focus:bg-gray-500 w-full bg-white p-3 rounded-full space-x-3">
                                        <MailIcon className="w-6 h-6 text-gray-600 dark:text-white"/>
                                        <input className="bg-none  w-full outline-none bg-transparent dark:text-white" type="email" placeholder="Email*" required/>
                                    </div>
                                    <div className="flex w-full border border-gray-600 dark:bg-slate-600 bg-white p-3 rounded-full space-x-3">
                                        <LockClosedIcon className="w-6 h-6 text-gray-600 dark:text-white"/>
                                        <input className="bg-none w-full outline-none bg-transparent dark:text-white" type="password" minLength="8" placeholder="Password*" required/>
                                         
                                    </div>

                                    <Link href="/recovery">
                                        <p className="text-slate-800 dark:text-white">Forgot Password?</p>
                                    </Link>
                                    
                                    <button className="w-full hover:bg-green-500 transition duration-200 p-3 bg-[#16A34A] rounded-full uppercase font-bold text-white">
                                        Login
                                    </button>
                                    
                                   
                                </form>
                                <p className="text-center dark:text-white uppercase">Or Login with</p>
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
                                <Link href="/register">
                                    <p className="text-center cursor-pointer hover:text-green-500 transition duration-200 text-slate-500 dark:text-white font-bold uppercase border-2 border-slate-500 p-3 rounded-full">Create a free account</p>
                                </Link>
                            </div>
                            
                        </div>
                        <div className="hidden px-10 lg:flex lg:flex-col lg:items-center lg:justify-center bg-opacity-5 dark:bg-opacity-5 backdrop-filter backdrop-blur-lg lg:shadow-none border dark:border-slate-700 shadow-md bg-slate-900 w-1/4 h-full lg:rounded-r-2xl">
                            <div class="w-full carousel">
                                <div id="item1" class="flex flex-col space-y-5 w-full rounded-2xl carousel-item">
                                    <div className="relative w-full h-60">
                                        <Image className="rounded-lg" src="/assets/images/discussion.svg" layout="fill" objectFit="contain"/>
                                    </div>
                                    <div className="">
                                        <p className="text-slate-800 text-center dark:text-white text-3xl font-bold">Enjoy secure and quality video conferencing</p>
                                        <p className="text-slate-800 text-center dark:text-slate-200">Your data is safe with us</p>
                                    </div>
                                </div> 
                                <div id="item2" class="flex flex-col space-y-5 w-full rounded-2xl carousel-item">
                                    <div className="relative w-full h-60">
                                        <Image className="rounded-lg" src="/assets/images/messaging.svg" layout="fill" objectFit="contain"/>
                                    </div>
                                    <div>
                                        <p className="text-white text-center text-3xl font-bold">Enjoy secure and quality video conferencing</p>
                                        <p className="text-gray-200 text-center">Your data is safe with us</p>
                                    </div>
                                </div> 
                                <div id="item3" class="flex flex-col space-y-5 w-full rounded-2xl carousel-item">
                                    <div className="relative w-full h-60">
                                        <Image className="rounded-lg" src="/assets/images/conference.svg" layout="fill" objectFit="contain"/>
                                    </div>
                                    <div>
                                        <p className="text-white text-center text-3xl font-bold">Enjoy secure and quality video conferencing</p>
                                        <p className="text-gray-200 text-center">Your data is safe with us</p>
                                    </div>
                                </div>
                                <div id="item4" class="flex flex-col space-y-5 w-full rounded-2xl carousel-item">
                                    <div className="relative w-full h-60">
                                        <Image className="rounded-lg" src="/assets/images/collaboration.svg" layout="fill" objectFit="contain"/>
                                    </div>
                                    <div>
                                        <p className="text-white text-center text-3xl font-bold">Enjoy secure and quality video conferencing</p>
                                        <p className="text-gray-200 text-center">Your data is safe with us</p>
                                    </div>
                                </div> 
                            </div> 
                            <div class="flex justify-center w-full py-4 space-x-2 pt-10">
                                <a href="#item1" class="w-8 rounded-full h-2 bg-green-600"></a> 
                                <a href="#item2" class="w-8 rounded-full h-2 bg-green-600"></a> 
                                <a href="#item3" class="w-8 rounded-full h-2 bg-green-600"></a> 
                                <a href="#item4" class="w-8 rounded-full h-2 bg-green-600"></a>
                            </div>

                        </div>
                    </div>
                    
                </div>
            </main>
        </div>
    )
}

export default LoginPage
