import { CalendarIcon } from "@heroicons/react/outline";
import { VscWatch } from "react-icons/vsc";
import Router from "next/router";

const MeetingCard = ({title, time}) => {
    
    return(
        <div className="flex space-x-3 items-center w-full bg-slate-100 rounded-2xl p-3">
            <div className="p-3 bg-green-600 h-full rounded-2xl">
                <CalendarIcon className="h-6 w-6 text-white"/>
            </div>
            <div className="">
                <p className="font-bold">{title}</p>
                <div className="flex items-center">
                    <VscWatch className="h-4 w-4"/>
                    <p>{time}</p>
                </div>
            </div>
        </div>
        
    )
}

export default MeetingCard;