import Image from "next/image"
import pattern2 from "@/public/png/pattern2.png"
import me1 from "@/public/images/me1.jpg"

export default function Main(){
    return(
        <div className="bg-two h-block relative w-full">
            <Image src={pattern2} className=" -ml-20 top-20 left-0 h-40 w-36 absolute"/>
            <Image src={pattern2} className="-mr-20 top-96 right-0 h-40 w-36 absolute"/>
            <div className="flex justify-center text-one">
                <div className="mt-44 italic w-1/3">
                    <h1 className="mb-5 text-6xl">English study</h1>
                    <h1 className="mb-5 text-2xl">Методика викладання іноземних мов</h1>
                    <h1 className="text-xl w-2/4">Після перегляду навчання ви будете розуміти кожен свій крок та уроці, а учні відчувати його логічну структуру та ваш професіоналізм.</h1>
                </div>
                <div className=" mt-20">
                    <Image src={me1}  className=" h-img_1 w-72" />
                </div>
                <div className="mt-96 w-1/5 text-right pl-5">
                    <p>Лише практичний матеріал заснований на міжнародному курсі CELTA та моєму досвіду викладання на 200+ учнів</p>
                </div>
            </div>
        </div>
    )
}