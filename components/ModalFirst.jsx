import React from "react";

export default function ModalFirst({visible, onClose}) {
    if (!visible) return null;
    const handleOnClose = (interaction) => {
    if(interaction.target.id === 'module')
    onClose();
    };
  return (
    <div id="module" onClick={handleOnClose} className="z-[2] fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
      {/* <div className="bg-white rounded-2xl w-[1290px] h-[770px] sm:border-[#01457A] sm:border sm:max-2xl:w-[900px] sm:max-2xl:h-[540px] " > */}
      <div className="bg-white rounded-2xl w-[250px] h-[770px] sm:border-[#01457A] sm:border sm:max-2xl:w-[900px] sm:max-2xl:h-[540px]  md:w-[700px] desc-1820:w-[1290px] desc-1820:h-[749px]" >
        {/* <h1 className="font-normal text-left text-[24px] text-[#01457A] mx-[38px] mt-[40px] sm:max-2xl:text-[15px] sm:max-2xl:mx-[38px] mt-[40px]"> */}
        <h1 className="font-normal text-left text-[15px] text-[#01457A] mx-[30px] mt-[40px] sm:max-2xl:text-[15px] sm:max-2xl:mx-[38px] mt-[40px]">
        В десятилетнем исследовании <span className="font-bold">  «Генетическая эпидемиология ХОБЛ» (COPDGene) </span>
         среди пациентов с ХОБЛ, диагностированной до 55 лет, было выявлено  <span className="font-bold"> преобладание женщин (66%)</span>,
         а в возрасте 60-64 лет количество женщин и мужчин.
        </h1>
        {/* <h1  className="font-normal text-left text-[24px] text-[#01457A] mx-[38px] mb-[40px] mt-[9px] sm:max-2xl:text-[15px] " >  */}
        <h1  className="font-normal text-left text-[15px] text-[#01457A] mx-[30px] mb-[40px] mt-[9px] sm:max-2xl:text-[15px] " >
          Такое эпидемиологическое распределение заболеваемости ХОБЛ может быть связано с тем, что дыхательные пути курящих женщин имеют 
            более <span className="font-bold">высокий процент площади стенок</span>, но меньшую площадь просвета, 
            внутренний диаметр и толщину дыхательных путей по сравнению с курящими мужчинами.</h1>
        {/* <button onClick = {onClose}>X</button> */}
        <div  className= "mx-[38px] mb-[40px]"> <img className="md:min-w-[500px] md:min-h-[240px]" src = "/assets/Dia.png" /> </div>
        </div>
       
     
    </div>
  );
}