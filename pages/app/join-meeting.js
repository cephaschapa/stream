import { VscCode, VscKey, VscPass, VscSymbolNumeric, VscTerminalTmux, VscWindow } from "react-icons/vsc";
import AppHeader from "../../components/AppComponents/AppHeader";
import MeetingActionButtons2 from "../../components/AppComponents/Meeting/MeetingActionButton2";
import NavWrapper from "../../components/AppComponents/NavWrapper";

const JoinRoom = () => {
    return(
        <div>
            <AppHeader pageName="Join a Meeting"/>
            <NavWrapper>
                <div className="mt-12 py-3 w-full">
                    <MeetingActionButtons2 url="/app/create-meeting" btnText="Create a Meeting" />
                    <div className="flex items-center justify-center w-full h-[500px]">
                        <form className="w-full space-y-3">
                            <p className="font-bold">Enter the meeting code <span className="text-red-500">*</span></p>
                            <div className="flex space-x-3 items-center w-full bg-slate-100 p-3 rounded-full">
                                <VscKey className="h-5 w-5"/>
                                <input className="outline-none bg-transparent" type="text" placeholder="wfmr-4icb-1l8x"/>
                            </div>
                            <button className="w-full font-bold text-white p-3 bg-green-600 rounded-full">Join Meeting</button>
                        </form>
                    </div>
                </div>
                
            </NavWrapper>
            
        </div>
    )
}

export default JoinRoom;