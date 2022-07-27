import React from 'react'
import Share from "../pages/Share";
import { useBetween } from 'use-between';

function Mint() {
  const { share, setShare } = useBetween(Share)
  console.log("NewData", share);
  return (
    <>
    
    </>
  )
}

export default Mint
