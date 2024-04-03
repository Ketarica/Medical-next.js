import Image from "next/image";
import React from "react";

const SubBlock = () => {

const ArrowBg = [
        <Image 
        src= "/assets/ArrowBg.png"
        alt="ArrowBg"
        width={295}
        height={114.5}
        max-width={295}
        max-height={114.5}
      />
    ]
const CirclePortrait = [
        <Image 
        src= "/assets/Portrait.png"
        alt="Portrait"
        width={80}
        height={80}
      />
    ]
const CircleArrow = [
        <Image 
        src= "/assets/ArrowYellow.png"
        alt="ArrowYellow"
        width={80}
        height={80}
      />
    ]
    

  return (
    
    // <div className="flex-col">
    
    <div className="rounded-xl  mx-[20px] my-[20px] sm:px-[20px] sm:py-[20px] flex flex-col gap-y-[40px] ">
       {/* <div  className="flex flex-col 2xl:flex-row sm:border-[#01457A] sm:border rounded-xl pt-[40px] pb-[40px] pl-[40px] pr-[60px] gap-x-[29px] xl:flex-col shadow-xl"> */}
       <div  className="flex flex-col 2xl:flex-row sm:border-[#01457A] sm:border rounded-xl pt-[40px] pb-[40px] pl-[40px] pr-[60px] gap-x-[29px] shadow-xl">
       {/* <div className="2xl:min-w-[80px] 2xl:min-h-[80px] sm:max-2xl:hidden">  */}
      
         <div className="absolute 2xl:min-w-[80px] 2xl:min-h-[80px] max-lg:hidden lg:mt-[10px]"> 
       {CirclePortrait} 
       </div>
               
          <div className=""> 

          <div className="relative"> 
               {/* <h1 className="absolute text-2xl min-w-[250px] max-w-[250px] min-h-[100px] max-h-[100px] text-[#01457A] font-normal sm:max-2xl:ml-[250px] "> */}
               <h1 className="absolute sm:ml-[90px] sm:text-center text-2xl min-w-[200px] max-w-[250px] 
               min-h-[200px] max-h-[100px] text-[#01457A] font-normal text-[20px] text-left sm:mt-[5px] sm:mx-[60px]
               ">
                ХОБЛ болеют <span className="font-bold"> преимущественно мужчины?</span></h1>
          </div> 
          
          {/* <div className="min-w-[250px] max-w-[250px] min-h-[100px] max-h-[100px] text-[#01457A] sm:max-2xl:ml-[400px] sm:max-2xl:mb-[30px]"> */}
          <div className=" min-w-[200px] max-w-[250px] min-h-[100px] max-h-[100px] my-[10px] ml-[30px] sm:items-center sm:mx-[60px] 
          sm:min-w-[250px] sm:max-w-[250px]  md:mx-[150px]">
            
             {ArrowBg} </div> 
             </div>
         
       

       <p className="text-2xl text-[#01457A] text-[20px] sm:text-center sm:text-[22px] xl:absolute xl:text-left xl:ml-[450px] xl:mr-[100px]">  В десятилетнем исследовании «Генетическая эпидемиология ХОБЛ» (COPDGene) среди пациентов с ХОБЛ, диагностированной до 55 лет, было выявлено преобладание... </p>
       </div>
       
     
       {/* <div className="flex flex-col 2xl:flex-row sm:border-[#01457A] sm:border rounded-xl pt-[40px] pb-[40px] pl-[29px] pr-[70px] gap-x-[29px] shadow-xl"> */}
       <div  className="flex flex-col 2xl:flex-row sm:border-[#01457A] sm:border rounded-xl pt-[40px] pb-[40px] pl-[40px] pr-[60px] gap-x-[29px] shadow-xl">
      
       {/* <div className="2xl:min-w-[80px] 2xl:min-h-[80px] sm:max-2xl:hidden">  */}
       <div className="absolute 2xl:min-w-[80px] 2xl:min-h-[80px] max-lg:hidden lg:mt-[10px] "> 
       {CircleArrow} 
       </div>
      
                 <div className="relative"> 
                 
                {/* <h1 className="absolute text-2xl min-w-[250px] max-w-[250px] min-h-[100px] max-h-[100px] text-[#01457A] font-normal sm:max-2xl:ml-[250px]">  */}
                <h1 className="absolute  sm:mx-[60px] sm:text-center text-2xl min-w-[200px] 
                sm:mt-[5px] max-w-[250px] min-h-[200px] max-h-[100px] text-[#01457A] 
                font-normal text-[20px] text-left md:mx-[100px]">
                <span className="font-bold "> Опасно </span> не наличие заболевания, а обострения? </h1>
                </div>
                {/* <div className="min-w-[250px] max-w-[250px] min-h-[100px] max-h-[100px] text-[#01457A] sm:max-2xl:ml-[400px] sm:max-2xl:mb-[30px]">  */}
                <div className=" min-w-[200px] max-w-[250px] min-h-[100px] max-h-[100px] mb-[10px] ml-[30px] mt-[10px] sm:mx-[60px] sm:min-w-[250px]
                md:mx-[150px]">
                {ArrowBg} </div>
          
              
       <p className="text-2xl text-[#01457A] text-[20px] sm:text-center sm:text-[22px] xl:absolute xl:text-left xl:ml-[450px] xl:mr-[100px]"> Большинство пациентов с ХОБЛ столкнется с обострениями: как минимум одно среднетяжелое или тяжелое обострение случится в течение... </p>
          

       </div>
      
   </div>
  );
};
export default SubBlock;