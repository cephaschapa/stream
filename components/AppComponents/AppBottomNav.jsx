import { BellIcon, HomeIcon, PlayIcon, TicketIcon, VideoCameraIcon } from "@heroicons/react/outline";
import NavWrapper from "./NavWrapper";
import { useRouter } from "next/router";
import { VscBell, VscCalendar, VscDeviceCameraVideo, VscFileMedia, VscHome } from 'react-icons/vsc'

const AppBottomNav = () => {
    const router = useRouter();
    console.log(router)
    const {basePath} = router;
    console.log(basePath)
    return(
        <nav className="fixed bottom-0 w-full">
            <NavWrapper>
                <div className="flex w-full bg-white shadow-md px-4 border rounded-full items-center justify-between p-3 py-3">
                    <button className={`${basePath === '' ? 'bg-green-600': ''} p-2 rounded-full`}>
                        <VscHome className={`${basePath === ''? 'text-white': ''} h-6 w-6`}/>
                    </button>
                    <button>   
                        <VscDeviceCameraVideo className="h-6 w-6"/>
                    </button> 
                    <button> 
                        <VscBell className="h-6 w-6"/>
                    </button>
                    <button>
                        <VscFileMedia className="h-6 w-6"/>
                    </button>
                    <button>
                        <VscCalendar className="h-6 w-6"/>
                    </button>
                    
                </div>
            </NavWrapper>
        </nav>
    );
}

export default AppBottomNav;