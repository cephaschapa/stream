import React, {useEffect, useState} from "react";

import {MeetingConsumer, MeetingProvider} from '@videosdk.live/react-sdk'
import MeetingGrid from "./MeetingGrid";

const roomContext = ({token, meetingId}) => {
    console.log(token)
    return(
        <div className="w-full">
            <MeetingProvider
              config={{
                meetingId:meetingId,
                micEnabled: true,
                webcamEnabled: false,
                name: "Cephas Chapa",
              }}
              token={token}
            >
              <MeetingConsumer>
                {() => <MeetingGrid meetingId={meetingId}/>}
              </MeetingConsumer>
            </MeetingProvider>
        </div>
    )
}

export default roomContext