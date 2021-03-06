import React, { useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { ArrowRightIcon } from "@heroicons/react/outline";
import { ClockIcon } from "@heroicons/react/solid";

// Components and Reusables
import Loader from "../../components/Reusables/Loader";
import AppHeader from '../../components/AppComponents/AppHeader';
import AppBottomNav from '../../components/AppComponents/AppBottomNav';
import NavWrapper from "../../components/AppComponents/NavWrapper";
import MainModal from "../../components/Reusables/Modals";



const AccountPage = () =>{
    const {data: session} = useSession();
    const router = useRouter()

    const {status:authStatus} = useSession()

    if(authStatus === 'loading') return <Loader />
    
    if(authStatus === 'unauthenticated'){
        // <MainModal />
        router.replace('/login');
    }
    
    return(
        <div className="dark:bg-slate-800 h-screen overflow-hidden">
            <AppHeader session={session} pageName="Activity"/>
                <NavWrapper>
                    <div className="h-screen w-full pt-12">
                        <div className="flex items-center justify-between w-full py-2 px-2">
                            <p className="font-bold">Upcoming Meetings</p>
                            <button className="border p-3 rounded-full">
                                <ArrowRightIcon className="h-6 w-6 dark:text-slate-200"/>
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
                        
                    </div>
                </NavWrapper>
            <AppBottomNav />
        </div>
    );
}

export default AccountPage;