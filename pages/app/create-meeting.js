import React, {useState, useEffect} from "react";
import { VscClose, VscCode, VscComment, VscEdit, VscFiles, VscItalic, VscKey, VscListTree, VscMail, VscPass, VscSymbolNumeric, VscTerminalTmux, VscTextSize, VscWatch, VscWindow } from "react-icons/vsc";
import AppHeader from "../../components/AppComponents/AppHeader";
import MeetingActionButtons2 from "../../components/AppComponents/Meeting/MeetingActionButton2";
import NavWrapper from "../../components/AppComponents/NavWrapper";

const CreateMeeting = () => {
    
    const [emails, setEmails] = useState([]);
    const [value, setValue] = useState('cephaschapa@gmail.com');
    const [error, setError] = useState(null)

    const handleKeyDown = (e) => {
        
        if(["Enter", "Tab", ","].includes(e.key)){
            e.preventDefault();

            let val = value.trim();
            setValue('');

            if(val && isValid(val)){
                setEmails([...emails, val])
            }

        }
    }

    const handleChange = (e) => {
        e.preventDefault()
        
        setValue(e.target.value)
        console.log(value)
        setError(null)
    }

    const handlePaste = (e) => {
        e.preventDefault()

        let paste = e.clipboardData.getData("text");
        let emails = paste.match(/[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/g);

        if(emails){
            let toBeAdded = emails.filter(email => !inList(email));

            setEmails([...emails, ...toBeAdded])
        }

    }
    const handleDelete = (e) => {
        e.preventDefault()
        setEmails(emails.filter(i=>i !== i.email))
    }

    const isValid = (email) => {
        let error = null;

        if(isInList(email)){
            error = `${email} has already been added`;
        }

        if(!isEmail(email)){
            error = `${email} is not valid email`;
        }

        if(error){
            setError({error})
            console.log(error)
            return false
        }

        return true;
    }

    const isInList = (email) => {
        return emails.includes(email)
    }

    const isEmail = (email) =>{
        return /[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/.test(email);
    }
     console.log(error)

    return(
        <div>
            <AppHeader pageName="Create a Meeting"/>
            <NavWrapper>
                <div className="mt-12 py-3 w-full">
                    <MeetingActionButtons2 url="/app/join-meeting" btnText="Join a Meeting" />
                    <div className="flex overflow-scroll mt-0 h-screen items-center justify-center w-full">
                        <form className="w-full space-y-3">
                            <p className="font-bold">Meeting Subject <span className="text-red-500">*</span></p>
                            <div className="flex space-x-3 items-center w-full bg-slate-100 p-3 rounded-full">
                                <VscEdit className="h-5 w-5"/>
                                <input className="outline-none w-full bg-transparent" type="text" placeholder="wfmr-4icb-1l8x"/>
                            </div>
                            <p className="font-bold">Agenda <span className="text-red-500">*</span></p>
                            <div className="flex space-x-3 items-center w-full bg-slate-100 p-3 rounded-2xl">
                                <VscTextSize className="h-5 w-5"/>
                                <textarea className="flex outline-none w-full bg-transparent" rows="4" type="text" placeholder="What will be discussed?"></textarea>
                            </div>
                            <p className="font-bold">When <span className="text-red-500">*</span></p>
                            <div className="flex space-x-3 items-center w-full bg-slate-100 p-3 rounded-full">
                                <VscWatch className="h-5 w-5"/>
                                <input className="outline-none w-full bg-transparent" type="datetime-local" placeholder="wfmr-4icb-1l8x"/>
                            </div>
                            <p className="font-bold">Attendees <span className="text-red-500">*</span></p>
                            {error && <p className="text-sm text-rose-600">Add a valid email address.</p>}
                            <div className={`${error ? "border border-red-600": ""} flex space-x-3 items-center w-full bg-slate-100 p-3 rounded-full`}>
                                <VscMail className="h-5 w-5"/>
                                <input value={value}  onKeyDown={handleKeyDown} onPaste={handlePaste} onChange={handleChange} className="outline-none w-full bg-transparent" type="email" placeholder="wfmr-4icb-1l8x"/>
                            </div>
                            <div className="flex space-x-2 p-2 overflow-scroll">
                                {
                                    emails.map((email, i)=>(
                                        <div key={i} className="badge flex space-x-2 items-center bg-slate-500 border-none py-3">
                                            <span>
                                                {email}
                                            </span>
                                            <button onClick={handleDelete}><VscClose className="h-4 w-4"/></button>
                                        </div>
                                    ))
                                }
                                
                            </div>
                            <p className="font-bold">Attatch Files <span className="text-red-500">*</span></p>
                            <div className="flex space-x-3 items-center w-full bg-slate-100 p-3 rounded-2xl">
                                <label className="flex flex-col space-y-3 items-center justify-center">
                                    <VscFiles className="h-7 w-7 text-green-600"/>
                                    <p className="text-sm">Accepted file types: PDF, Word, Excel, PNG</p>
                                    <input className="outline-none opacity-0 w-full bg-transparent" type="file" placeholder="wfmr-4icb-1l8x"/>
                                </label>
                            </div>
                            <button className="w-full font-bold text-white p-3 bg-green-600 rounded-full">Create Meeting</button>
                        </form>
                    </div>
                </div>
                
            </NavWrapper>
            
        </div>
    )
}

export default CreateMeeting;