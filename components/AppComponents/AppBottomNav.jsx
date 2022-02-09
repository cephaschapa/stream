import { BellIcon, HomeIcon, PlayIcon, TicketIcon, VideoCameraIcon } from "@heroicons/react/outline";
import NavWrapper from "./NavWrapper";
import { useRouter } from "next/router";
import { VscBell, VscCalendar, VscDeviceCameraVideo, VscFileMedia, VscHome } from 'react-icons/vsc'

const AppBottomNav = () => {
    const router = useRouter();
    console.log(router)
    const {route} = router;
    console.log(route)
    return(
        <nav className="fixed bottom-0 w-full">
            <NavWrapper>
                <div className="flex w-full dark:bg-slate-700 dark:border-none bg-white shadow-md px-4 border rounded-full items-center justify-between p-3 py-3">
                    <button onClick={()=>router.push('/app')} className={`${route === '/app' ? 'bg-green-600': ''} p-2 rounded-full`}>
                        <VscHome className={`${route === '/app'? 'text-white': ''} h-6 w-6 dark:text-slate-200`}/>
                    </button>
                    <button onClick={()=>router.push('/app/meeting')} className={`${route === '/app/meeting' ? 'bg-green-600': ''} p-2 rounded-full`}>   
                        <VscDeviceCameraVideo className={`${route === '/app/meeting'? 'text-white': ''} h-6 w-6 dark:text-slate-200`}/>
                    </button> 
                    <button className={`${route === '/notifications' ? 'bg-green-600': ''} p-2 rounded-full`}> 
                        <VscBell className={`${route === '/notifications'? 'text-white': ''} h-6 w-6 dark:text-slate-200`}/>
                    </button>
                    <button className={`${route === '/media' ? 'bg-green-600': ''} p-2 rounded-full`}>
                        <VscFileMedia className={`${route === '/media'? 'text-white': ''} h-6 w-6 dark:text-slate-200`}/>
                    </button>
                    <button className={`${route === '/calender' ? 'bg-green-600': ''} p-2 rounded-full`}>
                        <VscCalendar className={`${route === '/calender'? 'text-white': ''} h-6 w-6 dark:text-slate-200`}/>
                    </button>
                    
                </div>
            </NavWrapper>
        </nav>
    );
}

export default AppBottomNav;