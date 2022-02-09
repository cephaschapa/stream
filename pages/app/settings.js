import React from "react";
import {useTheme} from 'next-themes';
import { VscAccount, VscColorMode, VscCompass, VscDeviceCameraVideo, VscLoading, VscLocation, VscLock, VscPin } from "react-icons/vsc";

// Components and Reusables
import AppHeader from "../../components/AppComponents/AppHeader";
import NavWrapper from "../../components/AppComponents/NavWrapper";

const SettingsPage = () => {
    const {theme, setTheme} = useTheme()
    console.log(theme)

    return(
        <>
            <AppHeader pageName="Settings"/>
            <NavWrapper>
                <div className="flex flex-col w-full space-y-3 pt-12">
                    <div className="w-full border-b dark:border-slate-600">
                        <div className="flex items-center space-x-3 py-2">
                            <VscCompass className="h-5 w-5 dark:text-slate-200"/>
                            <p className="font-bold dark:text-slate-200">Set Region</p>
                        </div>
                        <div className="py-3 dark:text-slate-200">
                            <form>
                                <select className="w-full border dark:bg-slate-600 dark:border-none  p-3 rounded-full bg-white">
                                    <option selected disabled>Select region</option>
                                    <option value="sg001">Singapore, SG</option>
                                    <option value="uk001">London, UK</option>
                                    <option value="us001">Fremont, CA</option>
                                </select>
                            </form>
                        </div>
                    </div>

                    <div className="w-full border-b dark:border-slate-600">
                        <div className="flex items-center space-x-3 py-2">
                            <VscDeviceCameraVideo className="h-5 w-5 dark:text-slate-200"/>
                            <p className="font-bold dark:text-slate-200">Media Settings</p>
                        </div>
                        <div className="py-3">
                            <form>
                                <p className="pb-2 dark:text-slate-200">Video Camera (on joining)</p>
                                <select className="w-full border dark:bg-slate-600 dark:border-none dark:text-slate-300  p-3 rounded-full bg-white">
                                    <option value="0">Turn on</option>
                                    <option value="1">Turn off</option>
                                </select>
                            </form>
                            <form className="pt-3">
                                <p className="pb-2 dark:text-slate-200">Mic (on joining)</p>
                                <select className="w-full border dark:bg-slate-600 dark:border-none dark:text-slate-300 p-3 rounded-full bg-white">
                                    <option value="0">Turn on</option>
                                    <option value="1">Turn off</option>
                                </select>
                            </form>
                            <form className="pt-3">
                                <p className="pb-2 dark:text-slate-200">Recordings (on joining)</p>
                                <select className="w-full border dark:bg-slate-600 dark:border-none dark:text-slate-300 p-3 rounded-full bg-white">
                                    <option value="0">Turn on</option>
                                    <option value="1">Turn off</option>
                                </select>
                            </form>
                        </div>
                    </div>

                    <div className="w-full border-b dark:border-slate-600">
                        <div className="flex items-center space-x-3 py-2">
                            <VscColorMode className="h-5 w-5 dark:text-slate-200"/>
                            <p className="font-bold dark:text-slate-200">Theme</p>
                        </div>
                        <div className="py-3">
                            <form>
                                <select value={theme} onChange={(e)=>setTheme(e.target.value)} className="w-full border dark:bg-slate-600 dark:border-none dark:text-slate-300 p-3 rounded-full bg-white">
                                    <option value="dark">Deep Space</option>
                                    <option value="light">Procyon</option>
                                </select>
                            </form>
                        </div>
                    </div>

                    <div className="w-full border-b dark:border-slate-600">
                        <div className="flex items-center space-x-3 py-2">
                            <VscAccount className="h-5 w-5 dark:text-slate-200"/>
                            <p className="font-bold dark:text-slate-200">Account and Session</p>
                        </div>
                        <div className="py-3 space-y-2">
                            <button className="w-full p-3 bg-green-600 text-white rounded-full font-bold">Sign Out</button>
                            <button className="w-full p-3 dark:bg-slate-700 bg-slate-600 text-white rounded-full font-bold">Deactivate</button>
                            <button className="w-full p-3 bg-red-600 text-white rounded-full font-bold">Delete Account</button>
                        </div>
                    </div>
                    
                </div>
            </NavWrapper>            
        </>
    )
}

export default SettingsPage;