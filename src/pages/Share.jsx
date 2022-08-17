import { useState } from "react";

function Share() {
    const[share,setShare]=useState("")
    // console.log(share);
    const[info,setInfo]=useState("")
    // console.log(info);
    const[bookingInfo, setBookingInfo] = useState("")
    const[resBooking, setResBooking] = useState("")

    return {
        share,
        setShare,
        info,
        setInfo,
        bookingInfo,
        setBookingInfo,
        resBooking,
        setResBooking
      };
}

export default Share
