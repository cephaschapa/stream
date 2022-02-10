import React, {useState, useEffect} from "react";
import { VscChecklist, VscPackage, VscWatch } from "react-icons/vsc";
import { CalendarIcon } from "@heroicons/react/outline";
import Head from "next/head";

// Components and Resuables
import AppHeader from "../../components/AppComponents/AppHeader";
import NavWrapper from "../../components/AppComponents/NavWrapper";
import MeetingActionButtons from "../../components/AppComponents/Meeting/MeetingActionButtons";
import MeetingCard from "../../components/AppComponents/Meeting/MeetingCard";
import AppBottomNav from "../../components/AppComponents/AppBottomNav";


const Meeting = () => {
    return(
        <div className="dark:bg-slate-800 h-screen">
            <Head>
                <title>StreamIO - Meeting</title>
            </Head>
            <AppHeader pageName="Meetings"/>
            <NavWrapper>
                <div className="flex flex-col space-y-3 mt-12 w-full py-3">
                    <MeetingActionButtons />
                    <div className="flex pt-12 flex-col space-y-3 border-t-2 py-3 pb-16">
                        
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