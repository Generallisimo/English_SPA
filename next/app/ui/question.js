'use client'

import { useState } from 'react';
import Image from 'next/image';

import pattern from "@/public/png/pattern.png"

export default function Question(){

    const faqs = [
        { 
            question: 'Як зрозуміти який в мене рівень?', 
            answer: 'На першому пробному уроці викладач визначить ваш рівень, надасть рекомендації та детально розповість про навчання. Якщо ви хочете записатися на групове/парне навчання, напишіть нам в інстаграм або залиште заявку на сайті. Ми зареєструємо вас і відправимо вам тест на визначення рівня.' 
        },
        { 
            question: 'Скільки триває одне заняття?',
            answer: 'Заняття можуть тривати 50 хвилин або 1 годину 20 хвилин. Для парних та групових занять завжди рекомендована тривалість 1 година 20 хв.' 
        },
        { 
            question: 'З ким відбувається навчання?',
            answer: 'Заняття можуть відбуватися як з засновником школи , так і з викладачами команди. Ви можете обрати викладача, з яким ви хочете займатися. Ви також можете змінити викладача у процесі навчання.' 
        },
        { 
            question: 'Як проходят заняття?',
            answer: 'Заняття проходять онлайн google meet та на інтерактивній платформі. Додатково нічого купувати не треба, ми все надаємо. Ви також отримуєте домашнє завдання на платформі. На уроках ми покращуємо говоріння, сприйняття мови на слух, читання, граматику, слова, вимову, письмо.' 
        },
        { 
            question: 'Не можу бути присутнім на занятті, що робити?',
            answer: 'Все ок, якщо ви попередили заздалегідь. Про скасування заняття необхідно попередити не пізніше ніж за 24 години до його початку, тоді воно переноситься на інший зручний день. В іншому випадку воно вважається пропущеним і має бути оплачене' 
        },
        { 
            question: 'Коли потрібно робити оплату?',
            answer: 'Необхідно сплатити щонайменше за добу до початку заняття.' 
        },
      ];

    const FAQItem = ({question, answer }) => {
        const [isOpen, setIsOpen] = useState(false)

        return(
            <div>
                <button onClick={()=>{setIsOpen(!isOpen)}} className="flex justify-between items-center w-full p-4 bg-two text-one text-xl rounded-md mb-2">
                    <span>{question}</span>
                    <span>{isOpen ? '-' : '+'}</span>
                </button>
                {isOpen && <p className="p-4 italic rounded-md mb-2 bg-two text-one">{answer}</p>}
            </div>
        )
    }
    
      return (
        <div className='h-block relative'>
            <Image src={pattern} className="-ml-24 top-80 left-0 h-40 w-36 absolute"/>
            <Image src={pattern} className="-mr-24 top-44 right-0 h-40 w-36 absolute"/>
            <div className="w-3/5">
                <h1 className="text-5xl w-2/5 ml-5 mb-20 mt-4 pt-5 border-4 border-one border-b-two text-two">Часті питання</h1>
            </div>
            <div className="w-2/4 mx-auto">
            {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
            </div>
        </div>
      );
}
