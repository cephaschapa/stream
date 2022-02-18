import React, {useState, useEffect} from 'react';
import ParticipantView from './ParticipantView';
import { useRouter } from 'next/router';

import {useMeeting}  from '@videosdk.live/react-sdk'
import { chunk } from '../../../../utils/helpers';
import RoomConfig from './RoomConfig';
import { VscArrowLeft, VscDeviceCameraVideo, VscLiveShare, VscRemove } from 'react-icons/vsc';
import { MicrophoneIcon } from '@heroicons/react/outline';


const  MeetingGrid = (props) =>{
  
    const [joined, setJoined] = useState(false)
    const [closeIcons, setCloseIcons] = useState(false);
    
    const {
      join,
      leave,  
      toggleMic,
      toggleWebcam,
      toggleScreenShare,
    } = useMeeting();

    const router = useRouter();


    const { participants } = useMeeting();
    
    const joinMeeting = () => {
      setJoined(true)
      join()
    }

    const handleLeave = () => {
        leave()
        router.back()
        setCloseIcons(true)
    }

    return (
      <div className=''>
        {/* <button onClick={()=>router.back()} className="p-3 border border-slate-200 rounded-full">
            <VscArrowLeft className="h-5 w-5 text-white"/>
        </button>
        <header className='w-full'>
            <div className='flex items-center justify-center p-3'>
                <p className='bg-slate-900 p-3 rounded-full font-bold'>
                    <span className='uppercase'>Meeting Id</span>: {props.meetingId}
                </p>
            </div>
        </header> */}
        {joined ? 
        (
          <div className='fixed left-0 bottom-5 flex items-center justify-center w-full px-3'>
            {
                closeIcons ? '' : 
                <div className='w-full flex items-center justify-around space-x-3 bg-slate-900 p-2 rounded-full'>
                <button className='p-3 bg-slate-600 rounded-full'  onClick={handleLeave}>
                <VscRemove className='h-6 w-6'/>
                </button>
                <button className='p-3 bg-slate-600 rounded-full'  onClick={toggleMic}>
                <MicrophoneIcon className='h-6 w-6'/>
                </button>
                <button className='p-3 bg-slate-600 rounded-full'  onClick={toggleWebcam}>
                <VscDeviceCameraVideo className='h-6 w-6'/>
                </button>
                <button className='p-3 bg-slate-600 rounded-full'  onClick={toggleScreenShare}>
                <VscLiveShare className='h-6 w-6'/>
                </button>
            </div>
            }
          </div>
        ) 
        : (

            <RoomConfig joinMeeting={joinMeeting}/>
        )}
        <div
          className="flex flex-col"
        >
          {chunk([...participants.keys()]).map((k) => (
            <div className="" key={k} style={{ display: "" }}>
              {k.map((l) => (
                <ParticipantView key={l} participantId={l} />
              ))}
            </div>
          ))}
        </div>
      </div>
    )
  }

  export default MeetingGrid;