import Image from "next/image"

import pattern2 from "@/public/png/pattern2.png"

export default function BlockThree (){
    return (
        <div className="text-one mt-24 h-block relative bg-two">
            <Image src={pattern2} className="-ml-24 top-80 left-0 h-40 w-36 absolute"/>
            <Image src={pattern2} className="-mr-24 top-44 right-0 h-40 w-36 absolute"/>
            <div className="w-11/12">
                <h1 className="text-5xl w-2/4 ml-5 mb-16 mt-9 pt-5 border-4 border-two border-b-one">Результат після навчання:</h1>
            </div>
            <div className="flex justify-around">
                <div>
                    <div className="mb-10 border-solid border-2 border-one p-6 italic font-semibold rounded-md bg-one text-two">Збільшите чек на ваше навчання</div>
                    <div className="mb-10 border-solid border-2 border-one p-6 italic font-semibold rounded-md bg-one text-two">Ваші студенти будуть відчувати результат від уроків</div>
                    <div className="border-solid border-2 border-one p-6 italic font-semibold rounded-md bg-one text-two">Ваші уроки будуть проходити (повністю) англійською мовою</div>
                </div>
                <div>
                    <div className="mb-10 border-solid border-2 border-one p-6 italic font-semibold rounded-md bg-one text-two">Учні будуть лишатися з вами на 9+ місяців</div>
                    <div className="mb-10 border-solid border-2 border-one p-6 italic font-semibold rounded-md bg-one text-two">Заняття будуть логічними, структурованими</div>
                    <div className="border-solid border-2 border-one p-6 italic font-semibold rounded-md bg-one text-two">Більшість часу уроку будуть розмовляти ваші студенти</div>
                </div>
            </div>
            
        </div>
    )
}