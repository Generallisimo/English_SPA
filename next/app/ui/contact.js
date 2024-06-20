'use client'

import Image from "next/image"

import insta from '@/public/png/insta.png'
import teleg from '@/public/png/teleg.png'
import whats from '@/public/png/whats.png'

export default function Form(){

    async function SubmitForm(event){
        event.preventDefault()
        const formData = {
            name: event.target.name.value,
            email: event.target.email.value,
            social: event.target.social.value,
            phone: event.target.phone.value,
        }

        const res = await fetch('http://localhost:2000/api/form', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })

        console.log(formData)
    }
    return(
    <div className="h-block bg-two text-one">
        <div className="w-3/5">
            <h1 className="text-5xl w-3/5 ml-5 mb-20 mt-4 pt-5 border-4 border-two border-b-one">Виникли ще питання?</h1>
        </div>
        <form className="mx-auto grid w-2/4" onSubmit={SubmitForm}>
            <p className="italic mx-auto text-xl pb-4">Заповніть форму нижче і я з вами зв'яжусь!</p>
            <input className="text-black rounded p-2 m-2" type="text" name="name" placeholder="Имя" required />
            <input className="text-black rounded p-2 m-2" type="email" name="email" placeholder="Email" required />
            <input className="text-black rounded p-2 m-2" type="text" name="social" placeholder="Instagram или telegram" required />
            <input className="text-black rounded p-2 m-2" type="tel" name="phone" placeholder="380..." required pattern="[0-9]{12}" title="380...." />
            <button className="rounded-md bg-one text-two p-2 w-2/4 mx-auto">Submit</button>
        </form>
        <div className="justify-center flex mt-10">
            <Image src={insta} width={65} height={60} className="mt-2"/>
            <Image src={teleg} width={115} height={75}/>
            <Image src={whats} width={65} height={62} className="mt-2"/>
        </div>
    </div>
    )
}