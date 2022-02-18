import React, {useEffect, useRef} from 'react';
import {useParticipant} from '@videosdk.live/react-sdk';
import { MicrophoneIcon } from '@heroicons/react/outline';
import { MdMic, MdMicOff, MdScreenShare, MdStopScreenShare, MdVideocam, MdVideocamOff } from 'react-icons/md'

function ParticipantView(props){
    const webcamRef = useRef(null);
    const micRef = useRef(null);
    const screenShareRef = useRef(null);
    console.log(props.participantId)
  
    const {
      displayName,
      webcamStream,
      micStream,
      screenShareStream,
      webcamOn,
      micOn,
      screenShareOn
    } = useParticipant(props.participantId);
  
    useEffect(() => {
      if (webcamRef.current) {
        if (webcamOn) {
          const mediaStream = new MediaStream();
          mediaStream.addTrack(webcamStream.track);
  
          webcamRef.current.srcObject = mediaStream;
          webcamRef.current
            .play()
            .catch((error) =>
              console.error("videoElem.current.play() failed", error)
            );
        } else {
          webcamRef.current.srcObject = null;
        }
      }
    }, [webcamStream, webcamOn]);
  
    useEffect(() => {
      if (micRef.current) {
        if (micOn) {
          const mediaStream = new MediaStream();
          mediaStream.addTrack(micStream.track);
  
          micRef.current.srcObject = mediaStream;
          micRef.current
            .play()
            .catch((error) =>
              console.error("videoElem.current.play() failed", error)
            );
        } else {
          micRef.current.srcObject = null;
        }
      }
    }, [micStream, micOn]);
  
    useEffect(() => {
      if (screenShareRef.current) {
        if (screenShareOn) {
          const mediaStream = new MediaStream();
          mediaStream.addTrack(screenShareStream.track);
  
          screenShareRef.current.srcObject = mediaStream;
          screenShareRef.current
            .play()
            .catch((error) =>
              console.error("videoElem.current.play() failed", error)
            );
        } else {
          screenShareRef.current.srcObject = null;
        }
      }
    }, [screenShareStream, screenShareOn]);
  
  
    return (
      <div className='grid grid-cols-2 gap-2 h-full w-full py-5' key={props.participantId} >
        <audio ref={micRef} autoPlay />
        {webcamRef ||  micOn ? (
        <div className='flex  flex-col items-center rounded-2xl justify-center w-full bg-slate-600'>
            <h2>{displayName}</h2>
            <video
                className='rounded-2xl w-full'
                height={"100%"}
                width={"100%"}
                ref={webcamRef}
                autoPlay
            />

            <br/>
            <div className='flex absolute mt-28 items-center justify-center'>
                <div className='flex bg-slate-900 p-3 rounded-full space-x-2 '>
                    {micOn ? <MdMic className='h-5 w-5'/>: <MdMicOff className='h-5 w-5'/>} {webcamOn ? <MdVideocam className='h-5 w-5'/>: <MdVideocamOff className='h-5 w-5'/>} {screenShareOn ? <MdScreenShare className='h-5 w-5'/>: <MdStopScreenShare className='h-5 w-5'/>}
                </div>
            </div>
            </div>
        ) : null }
        
        {screenShareOn ? (
        <div className='flex flex-col items-center rounded-2xl justify-center w-full bg-slate-600'>
          <h2>Presenting</h2>
          <video
            className='rounded-2xl'
            height={"100%"}
            width={"100%"}
            ref={screenShareRef}
            autoPlay
            controls
          />
        </div>) : null }
        
      </div>
    );
  }

  export default ParticipantView;