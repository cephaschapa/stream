import React, {useState, useEffect} from "react";
import { useRouter } from "next/router";
import Webcam from "react-webcam";


import { VscArrowLeft, VscDeviceCameraVideo, VscRecord } from "react-icons/vsc";
import { MicrophoneIcon } from "@heroicons/react/outline";

const MeetingRoom = () => {

    const router = useRouter()
    console.log(router.query.roomid)

    // video contraints
    const videoConstraints = {
        facingMode: "user"
    };

    return(
        <div className="dark:bg-slate-800 h-screen p-3">
            <div>
                <button onClick={()=>router.back()} className="p-3 border border-slate-200 rounded-full">
                    <VscArrowLeft className="h-5 w-5 text-white"/>
                </button>
            </div>
            <div className="flex flex-col items-center justify-center h-full">
                <div className="flex justify-center w-full py-6">
                    <div className="w-1/2 h-auto bg-slate-600 rounded-2xl">
                        <Webcam className="h-full w-full rounded-2xl" audio={false} videoConstraints={videoConstraints} />
                    </div>
                </div>
                <div className="flex space-x-3">
                    <button className="p-4 rounded-full bg-slate-600">
                        <VscDeviceCameraVideo className="h-6 w-6 text-white"/>
                    </button>
                    <button className="p-4 rounded-full bg-slate-600">
                        <MicrophoneIcon className="h-6 w-6 text-white"/>
                    </button>
                    <button className="p-4 rounded-full bg-slate-600">
                        <VscRecord className="h-6 w-6 text-white"/>
                    </button>
                </div>
                <div className="w-full flex items-center justify-center py-6">
                    <button className="p-3 bg-green-600 w-[100px] rounded-full font-bold text-white">
                        Join
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MeetingRoom;