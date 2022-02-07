import { VscWatch } from "react-icons/vsc";

const MeetingCard = ({title, time}) => {
    return(
        <div className="">
            <p className="font-bold">{title}</p>
            <div className="flex items-center">
                <VscWatch className="h-4 w-4"/>
                <p>{time}</p>
            </div>
        </div>
    )
}

export default MeetingCard;