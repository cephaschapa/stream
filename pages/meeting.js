import React, {useState, useEffect} from "react";
import NavWrapper from "../components/AppComponents/NavWrapper";
import AppHeader from "../components/AppComponents/AppHeader"
import AppBottomNav from "../components/AppComponents/AppBottomNav";
import { VscChecklist, VscPackage, VscWatch } from "react-icons/vsc";
import { CalendarIcon } from "@heroicons/react/outline";
import MeetingCard from "../components/AppComponents/Meeting/MeetingCard";


const Meeting = () => {
    return(
        <div>
            <AppHeader pageName="Meeting"/>
            <NavWrapper>
                <div className="flex flex-col space-y-3 mt-12 w-full py-3">
                    <div className="flex w-full space-x-3">
                        <button className="w-1/2 text-white font-bold bg-green-600 p-3 rounded-full">Create a Meeting</button>
                        <button className="w-1/2 border-2 border-green-600 font-bold text-green-600 p-3 rounded-full">Join a Meeting</button>
                    </div>
                    <div className="flex flex-col space-y-3 border-t-2 py-3">
                        <p className="font-bold">Your upcoming meetings</p>
                        <div className="flex space-x-3 items-center w-full bg-slate-100 rounded-2xl p-3">
                            <div className="p-3 bg-green-600 h-full rounded-2xl">
                                <CalendarIcon className="h-6 w-6 text-white"/>
                            </div>
                            <MeetingCard title="Cephas Chapa - Spa Massage" time="Tue, 19:00-19:45"/>
                        </div>
                    </div>
                </div>
            </NavWrapper>
            <AppBottomNav />
        </div>
    )
}

export default Meeting;