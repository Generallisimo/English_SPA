import Image from "next/image";

import pattern from "@/public/png/pattern.png"

export default function BlockTwo(){
    return(
        <div className="text-two mt-24 h-block relative">
            {/* <Image src={pattern} className="-ml-24 top-80 left-0 h-40 w-36 absolute"/>
            <Image src={pattern} className="-mr-24 top-80 right-0 h-40 w-36 absolute"/> */}
            <div className="w-4/5 mb-24">
                <h1 className="text-5xl w-2/4 ml-5 mb-9 mt-9 border-4 border-one border-b-two">Чому варто обрати нас?</h1>
            </div>
            <div className="text-center flex justify-around mb-10">
                <div className=" border-solid rounded-md border-2 border-two w-1/4 bg-two text-one">
                    <h2 className="text-3xl p-2 border-4 border-two border-b-one">Право вибору</h2>
                    <p className="p-5 text-lg italic">Ви самі обираєте викладача і розклад, а також можете вносити зміни в будь-який момент</p>
                </div>
                <div className="border-solid rounded-md border-2 border-two w-1/4 bg-two text-one">
                    <h2 className="text-3xl p-2 border-4 border-two border-b-one">Круті результати</h2>
                    <p className="p-5 text-lg italic">Стежимо за вашим прогресом, допомагаємо ставити цілі і досягати їх</p>
                </div>
                <div className="border-solid rounded-md border-2 border-two w-1/4 bg-two text-one">
                    <h2 className="text-3xl p-2 border-4 border-two border-b-one">Подолаємо мовний бар'єр</h2>
                    <p className="p-5 text-lg italic">На заняттях велика увага приділяється усному мовлення і сприйняття на слух</p>
                </div>
            </div>
            <div className="text-center flex justify-around">
                <div className="border-solid rounded-md border-2 border-two w-1/4 bg-two text-one">
                    <h2 className="text-3xl p-2 border-4 border-two border-b-one">Навчання без обмежень</h2>
                    <p className="p-5 text-lg italic">Ваші заняття можуть проходити з будь-якої точки світу</p>
                </div>
                <div className="border-solid rounded-md border-2 border-two w-1/4 bg-two text-one">
                    <h2 className="text-3xl p-2 border-4 border-two border-b-one">Персоналізоване iнтерактивне навчання</h2>
                    <p className="p-5 text-lg italic">Адаптуємо і створюємо ефективне сучасне навчання індивідуально</p>
                </div>
                <div className="border-solid rounded-md border-2 border-two w-1/4 bg-two text-one">
                    <h2 className="text-3xl p-2 border-4 border-two border-b-one">Ми відкриті всім!</h2>
                    <p className="p-5 text-lg italic">Наші уроки підходять як для дорослих, так і для дітей!</p>
                </div>
            </div>
        </div>
    )
}