import React, {useState, useEffect} from "react";
import { useRouter } from "next/router";
import { MicrophoneIcon } from "@heroicons/react/outline";
import { VscArrowLeft, VscDeviceCameraVideo, VscRecord, VscWarning } from "react-icons/vsc";
import Webcam from "react-webcam";
import {useMeeting}  from '@videosdk.live/react-sdk'

const RoomConfig = ({joinMeeting}) => {
    const [camOn, setCamOn] = useState(true);
    const [micOn, setMicOn] = useState(true);
    const [disableValue, setDisableValue] = useState(false)

    // const {join} = useMeeting();

    const handleJoin = () => {
        joinMeeting()
    }

    const handleVideo = () => {
        setCamOn((prevState) => !prevState)
        setDisableValue((prevState)=> !prevState)
    }

    const router = useRouter()
    const meetingId = router.query.roomid;
    console.log(router.query.roomid)

    // video contraints
    const videoConstraints = {
        facingMode: "user"
    };
    return (
        <div>
            <div className="flex flex-col items-center justify-center h-full">
                <div className="flex justify-center w-full py-6">
                    <div className="w-1/2 h-auto">
                        {
                            camOn ? <Webcam className="h-full w-full rounded-2xl" audio={micOn} videoConstraints={videoConstraints} /> : 
                            <div className="flex flex-col items-center justify-center space-y-3 bg-slate-600 rounded-2xl h-72">
                                <VscWarning className="h-6 w-6 text-white"/>
                                <p className="text-center text-white">Allow camera permisions for video preview</p>
                            </div>
                        }
                    </div>
                </div>
                <div className="flex space-x-3">
                    <button onClick={handleVideo} className={`${!camOn ? '': 'bg-green-700'} p-4 rounded-full bg-slate-600`}>
                        <VscDeviceCameraVideo className="h-6 w-6 text-white"/>
                    </button>
                    <button disabled={disableValue} onClick={()=>setMicOn((prevState) => !prevState) } className={`${!micOn ? '': 'bg-green-700'} p-4 rounded-full bg-slate-600`}>
                        <MicrophoneIcon className="h-6 w-6 text-white"/>
                    </button>
                    <button className="p-4 rounded-full bg-slate-600">
                        <VscRecord className="h-6 w-6 text-white"/>
                    </button>
                </div>
                <div className="w-full flex items-center justify-center py-6">
                    <button onClick={handleJoin} className="p-3 bg-green-600 w-[100px] rounded-full font-bold text-white">
                        Join
                    </button>
                </div>
            </div>
        </div>
    )
}

export default RoomConfig;