import { useSession, signOut } from "next-auth/react";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import AppHeader from '../../components/AppComponents/AppHeader';
import AppBottomNav from '../../components/AppComponents/AppBottomNav';
import NavWrapper from "../../components/AppComponents/NavWrapper";
import { ArrowRightIcon } from "@heroicons/react/outline";



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
                    <div className="h-screen w-full">
                        <div className="flex items-center justify-between w-full py-2 px-2">
                            <p className="font-bold">Upcoming Meetings</p>
                            <button className="border p-3 rounded-full">
                                <ArrowRightIcon className="h-6 w-6"/>
                            </button>
                        </div>
                        <div className="snap-x mx-auto snap-mandatory h-screen flex overflow-scroll space-x-2">
                            <div className="snap-start w-screen">
                                <div className="flex items-center justify-center h-52 bg-gray-100 w-screen p-2 rounded-2xl">
                                    Lorem ipsum
                                </div>
                            </div>
                            <div className="snap-start w-screen">
                                <div className="flex items-center justify-center h-52 bg-gray-100 w-screen p-2 rounded-2xl">
                                    Lorem ipsum
                                </div>
                            </div>
                            <div className="snap-start w-screen">
                                <div className="flex items-center justify-center h-52 bg-gray-100 w-screen p-2 rounded-2xl">
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