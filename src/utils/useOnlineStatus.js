import React, { useEffect, useState } from 'react'

const useOnlineStatus=()=>{
    const [onlineStatus , setonlineStatus]= useState(true);
    // check if online  
    useEffect(()=>{

         window.addEventListener("ofline", ()=>{
            setonlineStatus(false);

        })
        window.addEventListener("online", ()=>{
            setonlineStatus(true);

        })


    },[])
    return onlineStatus;

}

export default useOnlineStatus
