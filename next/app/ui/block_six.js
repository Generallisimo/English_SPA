import Image from "next/image"

import level from "@/public/images/level.png"
import pattern2 from "@/public/png/pattern2.png"
import pattern5 from "@/public/png/pattern5.png"

export default function BlockSix (){

    return(
        <div className="text-one mt-24 h-block bg-two relative">
            <Image src={pattern2} className="-ml-24 top-80 left-0 h-40 w-36 absolute"/>
            <Image src={pattern5} className="top-80 right-96 h-44 w-40 absolute" />
            <div className="w-2/4">
                <h1 className="text-5xl w-1/5 ml-5 mb-20 mt-4 pt-5 border-4 border-two border-b-one">Тест</h1>
            </div>
            <div className="flex justify-between">
                <div className="w-2/4 mx-auto">
                    <h1 className="text-4xl p-5">Почніть навчання з пробного теста!</h1>
                    <p className="text-lg p-5 pt-0 italic">Дізнайтеся про свій рівень англійської мови і після цього сміливо почніть піднімати ваш рівень мови до C1</p>
                </div>
                <div className=" mx-auto">
                    <Image src={level} className="w-96"/>
                </div>
            </div>
            <div className="flex justify-center mt-16">
                <button className="p-5 rounded-lg bg-one text-two">Пройти тест</button>
            </div>
        </div>
    )
}