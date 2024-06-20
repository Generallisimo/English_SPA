
'use client'

import Image from 'next/image';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import com1 from '@/public/images/com1.png'
import com2 from '@/public/images/com2.png'
import com3 from '@/public/images/com3.png'
import com4 from '@/public/images/com4.png'
import com5 from '@/public/images/com5.png'
import com6 from '@/public/images/com6.png'

export default function Answer() {

    const settings = {

        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,

    };

    return (
        <div>
            <div className="w-3/4">
                <h1 className="text-5xl w-1/5 ml-5 mb-20 mt-4 pt-5 border-4 border-one border-b-two text-two">Вiдгуки</h1>
            </div>
            <div className="slider-container w-3/4 mx-auto">
                <Slider {...settings}>
                    <div>
                        <Image className='w-72 mx-auto' src={com1} />
                    </div>
                    <div>
                        <Image className='w-72 mx-auto' src={com2} />
                    </div>
                    <div>
                        <Image className='w-72 mx-auto' src={com3} />
                    </div>
                    <div>
                        <Image className='w-72 mx-auto' src={com4} />
                    </div>
                    <div>
                        <Image className='w-72 mx-auto' src={com5} />
                    </div>
                    <div>
                        <Image className='w-72 mx-auto' src={com6} />
                    </div>
                </Slider>
            </div>
        </div>
    );
}
