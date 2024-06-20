export default function Nav(){
    return(
        <nav className="h-20 w-full bg-two fixed z-50 rounded-b-lg">
            <ul className="flex justify-center text-xl italic text-one">
                <li className="pr-5 pt-5"><a>Головна</a></li>
                <li className="pr-5 pt-5"><a>Про себе</a></li>
                <li className="pr-5 pt-5"><a>Чому ми</a></li>
                <li className="pr-5 pt-5"><a>Результати</a></li>
                <li className="pr-5 pt-5"><a>Як почати</a></li>
                <li className="pr-5 pt-5"><a>Тарифи</a></li>
                <li className="pr-5 pt-5"><a>Тест</a></li>
                <li className="pr-5 pt-5"><a>Вiдгуки</a></li>
                <li className="pr-5 pt-5"><a>Часті питання</a></li>
                <li className="pr-5 pt-5"><a>Контакти</a></li>
            </ul>
        </nav>
    )
}