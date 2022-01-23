import { useSession, signOut } from "next-auth/react";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import AppHeader from '../../components/AppComponents/AppHeader';
import AppBottomNav from '../../components/AppComponents/AppBottomNav';
import NavWrapper from "../../components/AppComponents/NavWrapper";
import { ArrowRightIcon } from "@heroicons/react/outline";
import { ClockIcon } from "@heroicons/react/solid";



const AccountPage = () =>{
    const {data: session} = useSession();
    const router = useRouter()


    useEffect(()=>{
        if(!session){
            router.replace('/login');
        }
    },[])
    // const {image, name} = session.user;
    const signOutHandler = () => {
        signOut();
        // redirect to home
        router.replace('/login');
    }
    return(
        <>
            <AppHeader session={session}/>
                <NavWrapper>
                    <div className="h-screen w-full py-16">
                        <div className="flex items-center justify-between w-full py-2 px-2">
                            <p className="font-bold">Upcoming Meetings</p>
                            <button className="border p-3 rounded-full">
                                <ArrowRightIcon className="h-6 w-6"/>
                            </button>
                        </div>
                        <div className="snap-x mx-auto snap-mandatory flex overflow-scroll space-x-2">
                            <div className="snap-start w-screen ">
                                <div className="flex items-center meeting justify-center h-52 bg-gray-100 w-screen rounded-2xl">
                                    <div className="flex flex-col items-center justify-center bg-slate-800 p-3 rounded-2xl space-y-2">
                                        <h3 className="text-white text-2xl font-bold uppercase">BISM App Tech Review</h3>
                                        <div className="flex space-x-2 items-center justify-around">
                                            
                                            <p className="text-white">Starts - 10:45</p>
                                            <p className="text-white">Ends - 10:45</p>
                                        </div>
                                        <button className="text-white p-3 rounded-full bg-green-600 uppercase font-bold text-sm">View Meeting Details</button>
                                    </div>
                                </div>
                            </div>
                            <div className="snap-start w-screen">
                                <div className="flex items-center streamio-hero justify-center h-52 bg-gray-100 w-screen p-2 rounded-2xl">
                                <div className="flex flex-col items-center justify-center bg-green-600 p-3 rounded-2xl space-y-2">
                                        <h3 className="text-white text-2xl font-bold uppercase">BISM App Tech Review</h3>
                                        <div className="flex space-x-2 items-center justify-around">
                                            
                                            <p className="text-white">Starts - 10:45</p>
                                            <p className="text-white">Ends - 10:45</p>
                                        </div>
                                        <button className="bg-white p-2 rounded-full text-green-600 uppercase font-bold text-sm">View Meeting Details</button>
                                    </div>
                                </div>
                            </div>
                            <div className="snap-start w-screen">
                                <div className="flex items-center streamio-hero justify-center h-52 bg-gray-100 w-screen p-2 rounded-2xl">
                                <div className="flex flex-col items-center justify-center bg-green-600 p-3 rounded-2xl space-y-2">
                                        <h3 className="text-white text-2xl font-bold uppercase">BISM App Tech Review</h3>
                                        <div className="flex space-x-2 items-center justify-around">
                                            
                                            <p className="text-white">Starts - 10:45</p>
                                            <p className="text-white">Ends - 10:45</p>
                                        </div>
                                        <button className="bg-white p-2 rounded-full text-green-600 uppercase font-bold text-sm">View Meeting Details</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between w-full py-2 px-2">
                            <p className="font-bold">Upcoming Events</p>
                            <button className="border p-3 rounded-full">
                                <ArrowRightIcon className="h-6 w-6"/>
                            </button>
                        </div>
                        <div className="snap-x mx-auto snap-mandatory flex overflow-scroll space-x-2">
                            <div className="snap-start w-screen">
                                <div className="flex items-center church justify-center h-52 bg-gray-100 w-screen p-2 rounded-2xl">
                                <div className="flex flex-col items-center justify-center bg-slate-800 p-3 rounded-2xl space-y-2">
                                        <h3 className="text-white text-2xl font-bold uppercase">EVENING SCIENCE CLASS</h3>
                                        <div className="flex space-x-2 items-center justify-around">
                                            
                                            <p className="text-white">Starts - 19:45</p>
                                            <p className="text-white">Ends - 20:45</p>
                                        </div>
                                        <button className="text-white p-3 rounded-full bg-green-600 uppercase font-bold text-sm">View Meeting Details</button>
                                    </div>
                                </div>
                            </div>
                            <div className="snap-start w-screen">
                                <div className="flex items-center streamio-hero justify-center h-52 bg-gray-100 w-screen p-2 rounded-2xl">
                                    Lorem ipsum
                                </div>
                            </div>
                            <div className="snap-start w-screen">
                                <div className="flex items-center streamio-hero justify-center h-52 bg-gray-100 w-screen p-2 rounded-2xl">
                                    Lorem ipsum
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between w-full py-2 px-2">
                            <p className="font-bold">Events You Subscribe To</p>
                            <button className="border p-3 rounded-full">
                                <ArrowRightIcon className="h-6 w-6"/>
                            </button>
                        </div>
                        <div className="snap-x mx-auto snap-mandatory flex overflow-scroll space-x-2">
                            <div className="snap-start w-screen">
                                <div className="flex items-center event justify-center h-52 bg-gray-100 w-screen p-2 rounded-2xl">
                                <div className="flex flex-col items-center justify-center bg-slate-800 p-3 rounded-2xl space-y-2">
                                        <h3 className="text-white text-2xl font-bold uppercase">VIRTUAL CHURCH SERVICE</h3>
                                        <div className="flex space-x-2 items-center justify-around">
                                            
                                            <p className="text-white">Starts - 10:45</p>
                                            <p className="text-white">Ends - 10:45</p>
                                        </div>
                                        <button className="bg-white p-2 rounded-full text-green-600 uppercase font-bold text-sm">View Meeting Details</button>
                                    </div>
                                </div>
                            </div>
                            <div className="snap-start w-screen">
                                <div className="flex items-center streamio-hero justify-center h-52 bg-gray-100 w-screen p-2 rounded-2xl">
                                    Lorem ipsum
                                </div>
                            </div>
                            <div className="snap-start w-screen">
                                <div className="flex items-center streamio-hero justify-center h-52 bg-gray-100 w-screen p-2 rounded-2xl">
                                    Lorem ipsum
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between w-full py-2 px-2">
                            <p className="font-bold">Events Around You</p>
                            <button className="border p-3 rounded-full">
                                <ArrowRightIcon className="h-6 w-6"/>
                            </button>
                        </div>
                        <div className="snap-x mx-auto snap-mandatory flex overflow-scroll space-x-2 mb-16">
                            <div className="snap-start w-screen">
                                <div className="flex items-center streamio-hero justify-center h-52 bg-gray-100 w-screen p-2 rounded-2xl">
                                    Lorem ipsum
                                </div>
                            </div>
                            <div className="snap-start w-screen">
                                <div className="flex items-center streamio-hero justify-center h-52 bg-gray-100 w-screen p-2 rounded-2xl">
                                    Lorem ipsum
                                </div>
                            </div>
                            <div className="snap-start w-screen">
                                <div className="flex items-center streamio-hero justify-center h-52 bg-gray-100 w-screen p-2 rounded-2xl">
                                    Lorem ipsum
                                </div>
                            </div>
                        </div>
                    </div>
                </NavWrapper>
            <AppBottomNav />
        </>
    );
}

export default AccountPage;