import Router from "next/router";

const MeetingActionButtons = () =>{
    return(
        <div className="flex dark:bg-slate-800 dark:border-slate-600 bg-white fixed left-0 top-12 w-full space-x-3 border-b p-3">
            <button onClick={()=>Router.push('/app/create-meeting')} className="w-1/2 text-white font-bold bg-green-600 p-3 rounded-full">Create a Meeting</button>
            <button onClick={()=>Router.push('/app/join-meeting')} className="w-1/2 border-2 border-green-600 font-bold text-green-600 p-3 rounded-full">Join a Meeting</button>
        </div>
    )
}

export default MeetingActionButtons;