import React from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";

// Components and Reusables
import AppBottomNav from "../../components/AppComponents/AppBottomNav";
import AppHeader from "../../components/AppComponents/AppHeader";
import NavWrapper from "../../components/AppComponents/NavWrapper";
import { VscArrowLeft, VscDeviceCamera, VscDeviceMobile, VscHome, VscLock, VscMail, VscPerson } from "react-icons/vsc";

const ProfilePage = () => {
    const authStatus = useSession();
    const {data: session} = authStatus;
    const image = '';
    const name =  '';
    const email = '';

    const router = useRouter()

    if(!session) {
        console.log("Fetching Data");
    } else{
        console.log(session["user"].image)
        image = session["user"].image;
        name = session["user"].name;
        email = session["user"].email
    }
    return(
        <div className="dark:bg-slate-800 h-screen">
            <AppHeader pageName="Edit Profile"/>

            <NavWrapper>
                <div className="pt-16 w-full">
                    {/* avatat section */}
                    <button className="flex rounded-full p-4 shadow-2xl dark:shadow-gray-50 fixed  bg-white dark:bg-slate-900 border-none bottom-5 right-5 space-x-3" onClick={()=>router.push('/app/')}>
                        <VscHome className="h-6 w-6 dark:text-slate-200"/>
                    </button>
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
                    {/* cmiyoba@rtsa.org.zm */}
                    <p className="border-b dark:border-slate-600 pb-2 font-bold dark:text-slate-200">Personal and Contact Details</p>
                    <div className="">
                        <form className="w-full py-3 space-y-2">
                            <div className="flex border dark:bg-slate-600 dark:border-none p-3 rounded-full items-center space-x-3 w-full ">
                                <VscPerson className="h-5 w-5 dark:text-slate-200 text-slate-600"/>
                                <input type="text" className="w-full bg-transparent outline-none" placeholder={name}/>
                            </div>
                            <div className="flex border dark:bg-slate-600 dark:border-none p-3 rounded-full items-center space-x-3 w-full py-3">
                                <VscDeviceMobile className="h-5 w-5 dark:text-slate-200 text-slate-600"/>
                                <input type="tel" className="w-full bg-transparent outline-none" placeholder="Phone (requires verification)"/>
                            </div>
                            <div className="flex border dark:bg-slate-600 dark:border-none p-3 rounded-full items-center space-x-3  w-full py-3">
                                <VscMail className="h-5 w-5 dark:text-slate-200 text-slate-600"/>
                                <input type="email" className="w-full bg-transparent outline-none" placeholder="Add email address"/>
                            </div>
                            <button className="w-full p-3 bg-green-600 rounded-full text-white font-bold">
                                Update
                            </button>
                        </form>
                    </div>
                    <p className="border-b dark:border-slate-600 py-2 font-bold my-3 dark:text-slate-200">Update password</p>
                    <div>
                    <form className="w-full py-3 space-y-3">
                        <div className="flex items-center dark:bg-slate-600 dark:border-none space-x-3 w-full py-3 border px-2 rounded-full">
                            <VscLock className="h-5 w-5  text-slate-600 dark:text-slate-200"/>
                            <input type="password" className="w-full bg-transparent outline-none" placeholder="Current Password"/>
                        </div>
                        <div className="flex items-center dark:bg-slate-600 dark:border-none space-x-3 w-full py-3 border px-2 rounded-full">
                            <VscLock className="h-5 w-5 text-slate-600 dark:text-slate-200"/>
                            <input type="password" className="w-full bg-transparent outline-none" placeholder="New Password"/>
                        </div>
                        <button className="w-full p-3 bg-green-600 rounded-full text-white font-bold">
                            Update
                        </button>
                    </form>
                    </div>

                </div>
            </NavWrapper>           
        </div>
    )
}

export default ProfilePage;