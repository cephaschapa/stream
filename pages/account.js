import { useSession, signOut } from "next-auth/react";
import React, { useEffect } from "react";
import { useRouter } from "next/router";

const AccountPage = () =>{
    const {data: session} = useSession();
    const router = useRouter()
    console.log(session);

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
            <p>Account</p>
            <button onClick={signOutHandler}>Sign Out</button>
        </div>
    );
}

export default AccountPage;