"use client"
import React, { useState } from 'react';
import RightCard from '../../solutions/_component/RightCard';
import StepperForm from './StepperForm';
import image3 from '../../../../public/images/image3.png';
import image4 from '../../../../public/images/image4.png';
import image5 from '../../../../public/images/image5.png';
import Image from 'next/image';
import { motion } from 'framer-motion';
import StepOneImage from './stepImages/StepOneImage';
import StepTwoImage from './stepImages/StepTwoImage';
import StepThreeImage from './stepImages/StepThreeImage';



const Main = () => {
    const [currentStep, setCurrentStep] = useState(0)
    return (
        <div className='grid lg:grid-cols-2 mx-[60px] my-[20px] overflow-hidden'>

            {
                currentStep === 0 ?
                    <StepOneImage />
                    :
                    currentStep === 1 ?
                        <StepTwoImage />
                        :
                        currentStep === 2 ?
                            <StepThreeImage />
                            :
                            <motion.div
                                initial={{ x: '-50%', opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 1, ease: 'easeInOut' }}
                            >
                                <Image src={image5} alt='image5' />
                            </motion.div>
            }

            <div className='z-40'>
                <StepperForm currentStep={currentStep} setCurrentStep={setCurrentStep} />
                {/* <TestForm /> */}
            </div>
        </div>
    );
};

export default Main;