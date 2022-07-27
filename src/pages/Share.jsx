import { useState } from "react";

function Share() {
    const[share,setShare]=useState("")
   
    return {
        share,
        setShare,
      };
}

export default Share
