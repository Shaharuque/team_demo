import React from 'react';
import StepperForm from './_component/StepperForm';
import RightCard from '../solutions/_component/RightCard';
import TestForm from './test/TestForm';
import Main from './_component/Main';


const FormPage = () => {
    return (
        // <div className='grid grid-cols-2 mx-[60px] my-[20px]'>
        //     <div>
        //         <RightCard />
        //     </div>
        //     <div>
        //         <StepperForm currentStep={currentStep} setCurrentStep={setCurrentStep} />
        //         {/* <TestForm /> */}
        //     </div>
        // </div>

        <div className="svg-container ">
            <svg
                className='svg-content hidden sm:hidden md:block'
                xmlns="http://www.w3.org/2000/svg"
                width="500"
                viewBox="0 0 717 411"
                fill="none"
            >
                <path d="M690.591 502C709.857 462.097 718.247 370.752 660.244 348.839C587.739 321.448 537.544 398.55 485.32 373.694C433.097 348.839 502.559 291.521 393.042 234.202C283.525 176.883 181.613 246.376 104.038 213.912C26.4635 181.448 149.163 9.49153 41.6743 12.0278C-65.8149 14.564 27.1855 194.723 14.295 273.767C2.05213 348.839 -199.743 436.058 -98.8457 486.275C18.3863 544.622 -15.0608 398.55 69.6122 373.694C154.285 348.839 221.161 390.941 218.626 463.477" stroke="url(#paint0_linear_361_7955)" strokeOpacity="0.28" strokeWidth="24" />
                <defs>
                    <linearGradient id="paint0_linear_361_7955" x1="462.5" y1="242.5" x2="705" y2="409.5" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#0694A2" />
                        <stop offset="1" stopColor="#0694A2" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>

            <div>
                <Main />
            </div>

        </div>
    );
};

export default FormPage;