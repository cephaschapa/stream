import React from "react";
import { useSession, signOut } from "next-auth/react";

// Components and Reusables
import AppBottomNav from "../../components/AppComponents/AppBottomNav";
import AppHeader from "../../components/AppComponents/AppHeader";
import NavWrapper from "../../components/AppComponents/NavWrapper";
import { VscDeviceCamera, VscDeviceMobile, VscLock, VscMail, VscPerson } from "react-icons/vsc";

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
                    {/* cmiyoba@rtsa.org.zm */}
                    <p className="border-b pb-2 font-bold">Personal and Contact Details</p>
                    <div className="">
                        <form className="w-full">
                            <div className="flex items-center space-x-3 w-full py-3">
                                <VscPerson className="h-5 w-5 text-slate-600"/>
                                <input type="text" className="w-full outline-none" placeholder={name}/>
                            </div>
                            <div className="flex items-center space-x-3 w-full py-3">
                                <VscDeviceMobile className="h-5 w-5 text-slate-600"/>
                                <input type="tel" className="w-full outline-none" placeholder="Phone (requires verification)"/>
                            </div>
                            <div className="flex items-center space-x-3 w-full py-3">
                                <VscMail className="h-5 w-5 text-slate-600"/>
                                <input type="email" className="w-full outline-none" placeholder="Add email address"/>
                            </div>
                            <button className="w-full p-3 bg-green-600 rounded-full uppercase text-white font-bold">
                                Update
                            </button>
                        </form>
                    </div>
                    <p className="border-b py-2 font-bold my-3">Update password</p>
                    <div>
                    <form className="w-full py-3 space-y-3">
                        <div className="flex items-center space-x-3 w-full py-3 border px-2 rounded-full">
                            <VscLock className="h-5 w-5 text-slate-600"/>
                            <input type="password" className="w-fill outline-none" placeholder="Current Password"/>
                        </div>
                        <div className="flex items-center space-x-3 w-full py-3 border px-2 rounded-full">
                            <VscLock className="h-5 w-5 text-slate-600"/>
                            <input type="password" className="w-fill outline-none" placeholder="New Password"/>
                        </div>
                        <button className="w-full p-3 bg-green-600 rounded-full text-white font-bold">
                            Update
                        </button>
                    </form>
                    </div>

                </div>
            </NavWrapper>           
        </>
    )
}

export default ProfilePage;