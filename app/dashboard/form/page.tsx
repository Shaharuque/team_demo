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
        <div>
            <Main />
        </div>
    );
};

export default FormPage;