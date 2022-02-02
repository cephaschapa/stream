import React from "react";
import { useSession, signOut } from "next-auth/react";

// Components and Reusables
import AppBottomNav from "../../components/AppComponents/AppBottomNav";
import AppHeader from "../../components/AppComponents/AppHeader";
import NavWrapper from "../../components/AppComponents/NavWrapper";
import { VscDeviceCamera } from "react-icons/vsc";

const ProfilePage = () => {
    const authStatus = useSession();
    const {data: session} = authStatus;
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
    return(
        <>
            <AppHeader />
            <NavWrapper>
                <div className="pt-16 w-full">
                    {/* avatat section */}
                    <div className="">
                        <div className="flex flex-col items-center justify-center w-full">
                            <div className="relative h-24 w-24 rounded-full border-4" style={{
                                background: `url(${image}) no-repeat center`,
                                backgroundSize: 'cover'
                            }}/>
                            <form className="-mt-5 z-10">
                                <label className="flex flex-col items-center justify-center ">
                                    <VscDeviceCamera className="h-7 w-7 rounded-full shadow-md  bg-green-600 text-white p-1"/>
                                    <input type="file" className="opacity-0"/>
                                </label>
                            </form>
                        </div>
                    </div>
                    {/* details section */}
                </div>
            </NavWrapper>
            <AppBottomNav />
            
        </>
    )
}

export default ProfilePage;