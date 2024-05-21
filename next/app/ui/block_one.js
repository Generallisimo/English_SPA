import Image from "next/image"

import pattern from "@/public/png/pattern.png"
import pattern3 from "@/public/png/pattern3.png"
import me2 from "@/public/images/me2.jpg"

export default function BlockOne (){
    return(
        <div className="text-two relative w-full h-block" >
            <Image src={pattern} className="-ml-20 top-12 left-[450px] h-32 w-32 absolute -z-10"/>
            <Image src={pattern} className="-mr-20 top-96 right-0 h-40 w-36 absolute"/>
            <Image src={pattern3} className="-ml-20 top-[500px] left-44 h-40 w-36 absolute -z-10" />
            <div className="w-1/3">
                <h1 className="text-5xl w-2/4 ml-5 mb-9 mt-9 border-4 border-one border-b-two">Про себе:</h1>
            </div>
            <div className="h-40 flex justify-around">
                <div>
                    <Image src={me2} className="mt-5 h-img_1 w-72 "/>
                </div>
                <div className="w-1/3">
                    <h1 className="text-4xl mb-9">Мене звати Юлія і я блогер і філолог</h1>
                    <ol className="text-xl font-semibold italic list-disc">
                        <li className="pb-2">Маю вищу філологічну освіта</li>
                        <li className="pb-2">Мої учні кажуть, що я soulmate</li>
                        <li className="pb-2">Знаю всі болі та складності студентів</li>
                        <li className="pb-2">Досвід викладання понад 4 роки</li>
                        <li className="pb-2">Брала участь у шоу Х фактор</li>
                        <li className="pb-2">Люблю людей та апероль</li>
                        <li className="pb-2">Не люблю читати книги</li>
                        <li className="pb-2">4 рази була в Єгипті і навіть вела Youtube</li>
                        <li className="pb-2">Улюблений вид спорту - зумба, тому що вона вселяє впевненість і розслабляє</li>
                    </ol>
                </div>
            </div>
        </div>
    )
}