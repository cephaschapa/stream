import { useSession, signOut } from "next-auth/react";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import AppHeader from '../../components/AppComponents/AppHeader';



const AccountPage = () =>{
    const {data: session} = useSession();
    const router = useRouter()


    useEffect(()=>{
        if(!session){
            router.replace('/login');
        }
    },[])
    // const {image, name} = session.user;
    const signOutHandler = () => {
        signOut();
        // redirect to home
        router.replace('/login');
    }
    return(
        <div>
            <AppHeader session={session}/>
            {/* <AppBootomNav /> */}
        </div>
    );
}

export default AccountPage;