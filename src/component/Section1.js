import { useEffect, useState } from "react";

export default function Section1() {
    return (
        <div className="bg-black h-full w-full flex flex-col items-center justify-center">
            <img src='face-in-black.jpg' className='face-image z-0 object-contain' />
            <h1 className='md:text-7xl text-4xl z-10'>FULL-STACK SOFTWARE DEVELOPER</h1>
            <br />
            <h4 className='md:text-3xl text-xl z-10'>Happy Easter 🐣</h4>
        </div>
    )
}