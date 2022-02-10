import React, {useState, useEffect} from "react";
import { useRouter } from "next/router";

import { VscCode, VscKey, VscPass, VscSymbolNumeric, VscTerminalTmux, VscWindow } from "react-icons/vsc";
import AppHeader from "../../components/AppComponents/AppHeader";
import MeetingActionButtons2 from "../../components/AppComponents/Meeting/MeetingActionButton2";
import NavWrapper from "../../components/AppComponents/NavWrapper";

const JoinRoom = () => {
    const router = useRouter();
    const [meetingCode, setMeetingCode] = useState('wfmr-4icb-1l8c')

    const handleJoinMeeting = (e) => {
        e.preventDefault()
        router.push(`/app/meeting-room/${meetingCode}`)
    }
    return(
        <div className="dark:bg-slate-800 h-screen">
            <AppHeader pageName="Join a Meeting"/>
            <MeetingActionButtons2 url="/app/create-meeting" btnText="Create a Meeting" />
            <NavWrapper>
                <div className="flex flex-col justify-start py-3 w-full">
                    
                    <div className="flex items-center justify-center w-full h-[500px]">
                        <form className="w-full space-y-3">
                            <p className="font-bold dark:text-slate-200">Enter the meeting code <span className="text-red-500">*</span></p>
                            <div className="flex space-x-3 items-center w-full bg-slate-100 dark:bg-slate-700 p-3 rounded-full">
                                <VscKey className="h-5 w-5 dark:text-slate-200"/>
                                <input value={meetingCode} onChange={(e)=>setMeetingCode(e.target.value)} className="outline-none bg-transparent dark:text-slate-200" type="text" placeholder="wfmr-4icb-1l8x"/>
                            </div>
                            <button onClick={handleJoinMeeting} className="w-full font-bold text-white p-3 bg-green-600 rounded-full">Join Meeting</button>
                        </form>
                    </div>
                </div>
                
            </NavWrapper>
            
        </div>
    )
}

export default JoinRoom;