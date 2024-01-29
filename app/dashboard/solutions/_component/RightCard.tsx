import Image from 'next/image';
import React from 'react';
import image1 from '../../../../public/images/image1.png'

const RightCard = () => {
    return (
        <div className='flex justify-center'>
            <Image src={image1} alt='image1' height={400} width={400}   className='rounded-lg'/>
        </div>
    );
};

export default RightCard;