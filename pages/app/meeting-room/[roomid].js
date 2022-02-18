import React, {useState, useEffect, useRef} from "react";
import { useRouter } from "next/router";
import Webcam from "react-webcam";
import dynamic from "next/dynamic";


import { VscArrowLeft, VscDeviceCameraVideo, VscRecord, VscWarning } from "react-icons/vsc";
import { MicrophoneIcon } from "@heroicons/react/outline";
import { getToken } from "../../api/meeting-api";

const RoomContext = dynamic(()=>import("../../../components/AppComponents/Meeting/RoomComponents/RoomContext"), {
    ssr:false
})




const MeetingRoom = ({token}) => {
    const micRef = useRef()
    const [camOn, setCamOn] = useState(true);
    const [micOn, setMicOn] = useState(true);
    const [disableValue, setDisableValue] = useState(false)
    const [hasUserJoined, setHasUserJoined] = useState(false)

    console.log(token)

    const handleVideo = () => {
        setCamOn((prevState) => !prevState)
        setDisableValue((prevState)=> !prevState)
    }

    const router = useRouter()
    const meetingId = router.query.roomid;
    console.log(router.query.roomid)

    // video contraints
   

    return(
        <div className="bg-slate-800 h-screen p-3">
            <div className="flex justify-center text-white h-full">
                <RoomContext token={token} meetingId={meetingId} />
            </div> 
        </div>
    )
}

export default MeetingRoom;

export async function getServerSideProps({req, res}) {
    const token = await getToken();
    
    return{
        props: {
            token
        }
    }
}