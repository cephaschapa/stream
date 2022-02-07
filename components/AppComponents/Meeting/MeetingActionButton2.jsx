import Router from "next/router";
import { VscArrowLeft } from "react-icons/vsc";



const MeetingActionButtons2 = ({url, btnText}) => {
    return(
        <div className="flex items-center justify-between w-full">
            <div>
                <button className="p-3 border rounded-full" onClick={()=>Router.push('/app/meeting')}>
                    <VscArrowLeft className="h-5 w-5"/>
                </button>
            </div>
            <div>
                <button onClick={()=> Router.push(url) } className="p-3 rounded-full font-bold bg-green-600 text-white">{btnText}</button>
            </div>
        </div>
    );
}

export default MeetingActionButtons2;