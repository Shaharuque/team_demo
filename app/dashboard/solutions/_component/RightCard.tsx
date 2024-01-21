import Image from 'next/image';
import React from 'react';
import image1 from '../../../../public/images/image1.png'

const RightCard = () => {
    return (
        <div>
            <Image src={image1} alt='image1'   className='rounded-lg  object-fit'/>
        </div>
    );
};

export default RightCard;