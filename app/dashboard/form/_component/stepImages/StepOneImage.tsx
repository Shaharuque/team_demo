import Image from 'next/image';
import React from 'react';
import image1 from '../../../../../public/images/image1.png'
import { motion } from 'framer-motion';

const StepOneImage = () => {
    return (
        <motion.div
            initial={{ x: '-50%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
        >
            <div className='flex justify-center'>
                <Image src={image1} alt='image1' height={400} width={400} className='rounded-lg' />
            </div>
        </motion.div>
    );
};

export default StepOneImage;