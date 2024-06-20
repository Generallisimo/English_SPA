'use client'

import Image from "next/image"
import { useState } from "react"

import pattern from "@/public/png/pattern.png"

export default function BlockFive (){
    const [selectTariff, setSelectTariff] = useState('individual')

    const Tariffs = ({selectTariffs}) => {
        const tariffs = {
            individual: (
                <div>
                    <div className="flex justify-between mb-2">
                        <p className="p-5">Пробне (30 хв.)</p>
                        <p className="p-5">145 UAH/ 3,9 USD</p>
                        <button className="p-5 rounded bg-one text-two">Записатися</button>
                    </div>
                    <div className="flex justify-between mb-2">
                        <p className="p-5">5 занять (50 хв.)</p>
                        <p className="p-5">3600 UAH/ 96 USD</p>
                        <button className="p-5 rounded bg-one text-two">Записатися</button>
                    </div>
                    <div className="flex justify-between mb-2">
                        <p className="p-5">10 занять (50 хв.)</p>
                        <p className="p-5">6570 UAH/ 174 USD</p>
                        <button className="p-5 rounded bg-one text-two">Записатися</button>
                    </div>
                    <div className="flex justify-between mb-2">
                        <p className="p-5">20 занять (50 хв.)</p>
                        <p className="p-5">12560 UAH/ 333 USD</p>
                        <button className="p-5 rounded bg-one text-two">Записатися</button>
                    </div>
                </div>
            ),
            couple: (
                <div>
                    <div className="flex justify-between mb-2">
                        <p className="p-5">4 занять (50 хв.)</p>
                        <p className="p-5">145 UAH/ 3,9 USD</p>
                        <button className="p-5 rounded bg-one text-two">Записатися</button>
                    </div>
                    <div className="flex justify-between mb-2">
                        <p className="p-5">4 занять (80 хв.)</p>
                        <p className="p-5">3600 UAH/ 96 USD</p>
                        <button className="p-5 rounded bg-one text-two">Записатися</button>
                    </div>
                    <div className="flex justify-between mb-2">
                        <p className="p-5">8 занять (50 хв.)</p>
                        <p className="p-5">6570 UAH/ 174 USD</p>
                        <button className="p-5 rounded bg-one text-two">Записатися</button>
                    </div>
                    <div className="flex justify-between mb-2">
                        <p className="p-5">8 занять (80 хв.)</p>
                        <p className="p-5">12560 UAH/ 333 USD</p>
                        <button className="p-5 rounded bg-one text-two">Записатися</button>
                    </div>
                </div>
            ),
            group: (
                <div>
                    <div className="flex justify-between mb-2">
                        <p className="p-5">8 занять</p>
                        <p className="p-5">145 UAH/ 3,9 USD</p>
                        <button className="p-5 rounded bg-one text-two">Записатися</button>
                    </div>
                    <div className="flex justify-between mb-2">
                        <p className="p-5">16 занять</p>
                        <p className="p-5">3600 UAH/ 96 USD</p>
                        <button className="p-5 rounded bg-one text-two">Записатися</button>
                    </div>
                </div>
            ),
        }
        return <div>{tariffs[selectTariffs]}</div>
    }
    return (
        <div className="text-two h-block relative">
            <Image src={pattern} className="-ml-24 top-44 left-0 h-40 w-36 absolute"/>
            <Image src={pattern} className="-mr-24 top-80 right-0 h-40 w-36 absolute"/>
            <div className="w-2/4">
                <h1 className="text-5xl w-3/5 ml-5 mb-10 mt-4 pt-5 border-4 border-one border-b-two">Формат навчання</h1>
            </div>
            <div className="flex justify-center text-4xl">
                <button className="p-5 mb-5 border-4 border-one border-b-two" onClick={()=>{setSelectTariff('individual')}}>Individual</button>
                <button className="p-5 mb-5 border-4 border-one border-b-two" onClick={()=>{setSelectTariff('couple')}}>Couple</button>
                <button className="p-5 mb-5 border-4 border-one border-b-two" onClick={()=>{setSelectTariff('group')}}>Group</button>
            </div>
            <div className="flex justify-center ">
                <div className="w-2/4 border-1 rounded bg-two text-one p-5">
                    <Tariffs selectTariffs={selectTariff} />
                </div>
            </div>
        </div>
    )
}