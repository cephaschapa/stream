import React, {useState, useEffect} from "react";
import NavWrapper from "../components/AppComponents/NavWrapper";
import AppHeader from "../components/AppComponents/AppHeader"
import AppBottomNav from "../components/AppComponents/AppBottomNav";
import { VscChecklist, VscPackage, VscWatch } from "react-icons/vsc";
import { CalendarIcon } from "@heroicons/react/outline";
import MeetingCard from "../components/AppComponents/Meeting/MeetingCard";
import Head from "next/head";


const Meeting = () => {
    return(
        <div>
            <Head>
                <title>StreamIO - Meeting</title>
            </Head>
            <AppHeader pageName="Meeting"/>
            <NavWrapper>
                <div className="flex flex-col space-y-3 mt-12 w-full py-3">
                    <div className="flex w-full space-x-3">
                        <button className="w-1/2 text-white font-bold bg-green-600 p-3 rounded-full">Create a Meeting</button>
                        <button className="w-1/2 border-2 border-green-600 font-bold text-green-600 p-3 rounded-full">Join a Meeting</button>
                    </div>
                    <div className="flex flex-col space-y-3 border-t-2 py-3 pb-16">
                        <p className="font-bold">Your upcoming meetings</p>
                        
                        <MeetingCard title="Cephas Chapa - Online Yoga" time="Tue, 19:00-19:45"/>
                        <MeetingCard title="StreamIO Tech Review" time="Mon, 08:00-08:30"/>
                        <MeetingCard title="Microsoft StreamIO Aquisition" time="Wed, 10:00-13:00"/>
                        <MeetingCard title="Church Fellowship" time="Fri, 19:00-19:45"/>
                        <MeetingCard title="Cephas Chapa - Online Yoga agin" time="Fri, 19:00-19:45"/>
                        <MeetingCard title="Church Fellowship" time="Fri, 19:00-19:45"/>
                        <MeetingCard title="Cephas Chapa - Online Yoga agin" time="Fri, 19:00-19:45"/>
                        <MeetingCard title="Cephas Chapa - Online Yoga agin" time="Fri, 19:00-19:45"/>
                    </div>
                </div>
            </NavWrapper>
            <AppBottomNav />
        </div>
    )
}

export default Meeting;