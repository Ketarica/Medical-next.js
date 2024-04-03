"use client"
import MainBl from '@/components/MainBl'
import SubBlockTherapy from '@/components/SubBlockTherapy'
import Image from 'next/image'
import React, { useState } from "react";
import SubBlock from '@/components/SubBlock'
import Buttons from '@/components/Buttons'

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col bg-gradient-to-b from-stone-50 to-sky-100 w-auto h-auto">
    <main className="flex min-h-screen flex-col bg-gradient-to-b from-stone-50 to-sky-100 w-auto h-auto">
    {/* <div className="mt-[100px] mx-[100px] lg:mx-[100px] 2xl:mt-[140px] 2xl:mx-[200px] relative sm:border rounded-md items-center bg-[#FFFFFF] shadow-2xl"> */}
    {/* <div className="mt-[45px] mx-[5px] relative sm:border rounded-md items-center bg-[#FFFFFF] shadow-2xl"> */}
    <div className="mt-[35px] mx-[5px] mobile-425:mx-[25px] mobile-375:mx-[15px] sm:mt-[50px] 
    lg:mt-[80px] sm:mx-[50px] md:mx-[70px] 2xl:mx-[270px] 2xl:mt-[150px] relative rounded-md items-center bg-[#FFFFFF] shadow-2xl">
    <MainBl/>
    <Buttons/>
    <SubBlock/>
    <SubBlockTherapy/>
    </div>
  </main>
  )    
}
