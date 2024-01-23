"use client";
// StepperForm.js
import React from 'react';
import { useForm, FormProvider, useFormContext } from 'react-hook-form';

interface StepProps {
  register: any;
  formState: { errors: any };
}

const StepperForm = () => {
  const methods = useForm();
  const { handleSubmit, formState, getValues } = methods;
  const { isSubmitting, isValid, currentStep, goToNextStep, goToPreviousStep } = useStepperMethods(methods);

  const onSubmit = (data:any) => {
    console.log(data);
    // Add your form submission logic here
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto mt-8 p-4 bg-gray-100 shadow-md rounded">
        <h2 className="text-2xl font-bold mb-4">Stepper Form</h2>

        {/* Step 1 */}
        {currentStep === 1 && <Step1 />}

        {/* Step 2 */}
        {currentStep === 2 && <Step2 />}

        {/* Step 3 */}
        {currentStep === 3 && <Step3 />}

        {/* Buttons for navigation */}
        <div className="flex justify-between mt-4">
          {currentStep > 1 && (
            <button type="button" onClick={goToPreviousStep} className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 focus:outline-none focus:shadow-outline-blue">
              Previous
            </button>
          )}

          {currentStep < 3 && (
            <button type="button" onClick={goToNextStep} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue">
              Next
            </button>
          )}

          {currentStep === 3 && (
            <button type="submit" disabled={!isValid || isSubmitting} className={`bg-blue-500 text-white px-4 py-2 rounded ${!isValid || isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue'}`}>
              Submit
            </button>
          )}
        </div>
      </form>
    </FormProvider>
  );
};

const Step1 = () => {
  const { register, formState: { errors:any } } = useFormContext();
  
  return (
    <div>
      <label htmlFor="firstName" className="block text-gray-700 text-sm font-bold mb-2">First Name</label>
      <input
        type="text"
        id="firstName"
        {...register('firstName', { required: 'First Name is required' })}
        className={`w-full p-2 border ${errors?.firstName ? 'border-red-500' : 'border-gray-300'} rounded`}
      />
      {errors?.firstName && <p className="text-red-500 text-xs mt-1">{errors?.firstName.message}</p>}
    </div>
  );
};

const Step2 = () => {
  const { register, formState: { errors } } = useFormContext();
  
  return (
    <div>
      <label htmlFor="lastName" className="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
      <input
        type="text"
        id="lastName"
        {...register('lastName', { required: 'Last Name is required' })}
        className={`w-full p-2 border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} rounded`}
      />
      {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors?.lastName.message}</p>}
    </div>
  );
};

const Step3 = () => {
  const { register, formState: { errors } } = useFormContext();
  
  return (
    <div>
      <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
      <input
        type="text"
        id="email"
        {...register('email', { required: 'Email is required' })}
        className={`w-full p-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded`}
      />
      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
    </div>
  );
};

const useStepperMethods = (methods:any) => {
  const { setError, clearErrors, formState, setValue, getValues } = methods;
  const { isSubmitting, isValid, currentStep } = formState;

  const goToNextStep = () => {
    if (currentStep === 1 && !isValid) {
      setError('firstName', { type: 'manual', message: 'First Name is required' });
    } else if (currentStep === 2 && !isValid) {
      setError('lastName', { type: 'manual', message: 'Last Name is required' });
    } else {
      clearErrors(); // Clear errors when moving to the next step
      setValue('currentStep', currentStep + 1);
    }
  };

  const goToPreviousStep = () => {
    setValue('currentStep', currentStep - 1);
  };

  return {
    isSubmitting,
    isValid,
    currentStep,
    goToNextStep,
    goToPreviousStep,
  };
};

export default StepperForm;
