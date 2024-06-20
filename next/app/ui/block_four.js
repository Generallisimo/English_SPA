import Image from "next/image"

import pattern from "@/public/png/pattern.png"
import pattern4 from "@/public/png/pattern4.png"

export default function BlockFour (){
    return (
        <div className="text-two mt-24 h-block relative">
            {/* <Image src={pattern} className="-ml-24 top-44 left-0 h-40 w-36 absolute -z-10"/>
            <Image src={pattern} className="-mr-24 top-80 right-0 h-40 w-36 absolute -z-10"/> */}
            <Image src={pattern4} className="top-52 left-24 h-72 w-4/5 absolute -z-10"/>
            <div className="w-2/4">
                <h1 className="text-5xl w-3/4 ml-5 mb-32 mt-9 pt-5 border-4 border-one border-b-two">Як почати навчання?</h1>
            </div>
            <div className="flex justify-around text-center">
                <div className=" bg-two border-solid border-2 border-one p-6 italic font-semibold rounded-md text-one w-1/4">
                    <h1 className="text-2xl border-4 border-two border-b-one">Пройдіть пробний тест</h1>
                    <p className="p-3">Заповніть невелику форму та дізнайтесь свій рівень</p>
                </div>
                <div className="bg-two border-solid border-2 border-one p-6 italic font-semibold rounded-md text-one w-1/4">
                    <h1 className="text-2xl border-4 border-two border-b-one">Залиште заявку</h1>
                    <p className="p-3">Заповніть невелику форму і з вами зв'яжеться спеціаліст</p>
                </div>
                <div className="bg-two border-solid border-2 border-one p-6 italic font-semibold rounded-md text-one w-1/4">
                    <h1 className="text-2xl border-4 border-two border-b-one">Приступайте до занять</h1>
                    <p className="p-3">Ви отримаєте індивідуальний план уроків, а після оплати ви відразу зможете почати навчання на інтерактивній платформа</p>
                </div>
            </div>
            
        </div>
    )
}