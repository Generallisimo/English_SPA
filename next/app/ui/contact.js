'use client'
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
    <div>
        <form onSubmit={SubmitForm}>
            <input className="text-black" type="text" name="name" placeholder="Имя" required />
            <input className="text-black" type="email" name="email" placeholder="Email" required />
            <input className="text-black" type="text" name="social" placeholder="Instagram или telegram" required />
            <input className="text-black" type="tel" name="phone" placeholder="380..." required pattern="[0-9]{12}" title="380...." />
            <button>Submit</button>
        </form>
    </div>
    )
}