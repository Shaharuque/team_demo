
//mother component
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

import { z } from 'zod'
import { FormDataSchema } from '@/lib/formSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import Services from './steps/Services'
import Project from './steps/Project'
import Budget from './steps/Budget'

type Inputs = z.infer<typeof FormDataSchema>

const steps = [
  {
    id: 'Services',
    step: 1,
    name: 'Personal Information',
    fields: ['firstName', 'lastName', 'email']
  },
  {
    id: 'Project',
    step: 2,
    name: 'Address',
    fields: ['country', 'state', 'city', 'street', 'zip']
  },
  { id: 'Budget', step: 3, name: 'Complete' },
  { id: 'Skillset', step: 4, name: 'Skillsets' },
  { id: 'Contact', step: 5, name: 'contacts' }
]

type props = {
  currentStep: number
  setCurrentStep: Function
}

type StepState = {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
};

export default function StepperForm({ currentStep, setCurrentStep }: props) {
  const [previousStep, setPreviousStep] = useState(0)
  // const [currentStep, setCurrentStep] = useState(0)
  const delta = currentStep - previousStep
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    trigger,
    formState: { errors, isSubmitting }
  } = useForm<Inputs>({
    resolver: zodResolver(FormDataSchema)
  })

  const processForm: SubmitHandler<Inputs> = data => {
    console.log(data)
    reset()
  }

  type FieldName = keyof Inputs

  const next = async () => {
    const fields = steps[currentStep].fields
    const output = await trigger(fields as FieldName[], { shouldFocus: true })

    if (!output) return

    if (currentStep < steps.length) {
      if (currentStep === steps.length - 1) {
        await handleSubmit(processForm)()
        router.replace("/dashboard");
      }
      setPreviousStep(currentStep)
      setCurrentStep(step => step + 1)
    }
  }

  const prev = () => {
    if (currentStep > 0) {
      setPreviousStep(currentStep)
      setCurrentStep(step => step - 1)
    }
  }
  console.log(currentStep, steps.length)

  return (
    <section className=' inset-0 flex flex-col justify-between p-6'>
      {/* steps */}
      <nav aria-label='Progress'>
        <ol className='space-y-4 md:flex md:space-x-8 md:space-y-0'>
          {steps.map((step, index) => {
            let stepStatus;
            let borderColor;
            let textClass;

            if (currentStep === index) {
              stepStatus = 'group';
              borderColor = 'border-black';
              textClass = 'text-black';
            } else {
              stepStatus = 'group';
              borderColor = 'border-gray-200';
              textClass = 'text-gray-500';
            }

            return (
              <li key={step.name} className={`md:flex-1 ${stepStatus}`}>
                <div className='flex justify-between'>
                  <span className={`text-sm font-medium ${textClass}`}>
                    {step.id}
                  </span>
                  <span className='text-sm'>{step?.step}</span>
                </div>
                <div
                  className={`flex w-full flex-col border-l-4 ${borderColor} py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4`}
                  aria-current={currentStep === index ? 'step' : undefined}
                >

                </div>
              </li>
            );
          })}
        </ol>
      </nav>

      {/* Form */}
      <form className='mt-12 py-12' onSubmit={handleSubmit(processForm)}>
        {currentStep === 0 && (
          // <motion.div
          //   initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
          //   animate={{ x: 0, opacity: 1 }}
          //   transition={{ duration: 0.3, ease: 'easeInOut' }}
          // >
          //   <h2 className='text-base font-semibold leading-7 text-gray-900'>
          //     Personal Information
          //   </h2>
          //   <p className='mt-1 text-sm leading-6 text-gray-600'>
          //     Provide your personal details.
          //   </p>
          //   <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
          //     <div className='sm:col-span-3'>
          //       <label
          //         htmlFor='firstName'
          //         className='block text-sm font-medium leading-6 text-gray-900'
          //       >
          //         First name
          //       </label>
          //       <div className='mt-2'>
          //         <input
          //           type='text'
          //           id='firstName'
          //           {...register('firstName')}
          //           autoComplete='given-name'
          //           className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6'
          //         />
          //         {errors.firstName?.message && (
          //           <p className='mt-2 text-sm text-red-400'>
          //             {errors.firstName.message}
          //           </p>
          //         )}
          //       </div>
          //     </div>

          //     <div className='sm:col-span-3'>
          //       <label
          //         htmlFor='lastName'
          //         className='block text-sm font-medium leading-6 text-gray-900'
          //       >
          //         Last name
          //       </label>
          //       <div className='mt-2'>
          //         <input
          //           type='text'
          //           id='lastName'
          //           {...register('lastName')}
          //           autoComplete='family-name'
          //           className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6'
          //         />
          //         {errors.lastName?.message && (
          //           <p className='mt-2 text-sm text-red-400'>
          //             {errors.lastName.message}
          //           </p>
          //         )}
          //       </div>
          //     </div>

          //     <div className='sm:col-span-4'>
          //       <label
          //         htmlFor='email'
          //         className='block text-sm font-medium leading-6 text-gray-900'
          //       >
          //         Email address
          //       </label>
          //       <div className='mt-2'>
          //         <input
          //           id='email'
          //           type='email'
          //           {...register('email')}
          //           autoComplete='email'
          //           className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6'
          //         />
          //         {errors.email?.message && (
          //           <p className='mt-2 text-sm text-red-400'>
          //             {errors.email.message}
          //           </p>
          //         )}
          //       </div>
          //     </div>
          //   </div>
          // </motion.div>
          <Services delta={delta} register={register} errors={errors} />
        )}

        {currentStep === 1 && (
          // <motion.div
          //   initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
          //   animate={{ x: 0, opacity: 1 }}
          //   transition={{ duration: 0.3, ease: 'easeInOut' }}
          // >
          //   <h2 className='text-base font-semibold leading-7 text-gray-900'>
          //     Address
          //   </h2>
          //   <p className='mt-1 text-sm leading-6 text-gray-600'>
          //     Address where you can receive mail.
          //   </p>

          //   <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
          //     <div className='sm:col-span-3'>
          //       <label
          //         htmlFor='country'
          //         className='block text-sm font-medium leading-6 text-gray-900'
          //       >
          //         Country
          //       </label>
          //       <div className='mt-2'>
          //         <select
          //           id='country'
          //           {...register('country')}
          //           autoComplete='country-name'
          //           className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:max-w-xs sm:text-sm sm:leading-6'
          //         >
          //           <option>United States</option>
          //           <option>Canada</option>
          //           <option>Mexico</option>
          //         </select>
          //         {errors.country?.message && (
          //           <p className='mt-2 text-sm text-red-400'>
          //             {errors.country.message}
          //           </p>
          //         )}
          //       </div>
          //     </div>

          //     <div className='col-span-full'>
          //       <label
          //         htmlFor='street'
          //         className='block text-sm font-medium leading-6 text-gray-900'
          //       >
          //         Street address
          //       </label>
          //       <div className='mt-2'>
          //         <input
          //           type='text'
          //           id='street'
          //           {...register('street')}
          //           autoComplete='street-address'
          //           className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6'
          //         />
          //         {errors.street?.message && (
          //           <p className='mt-2 text-sm text-red-400'>
          //             {errors.street.message}
          //           </p>
          //         )}
          //       </div>
          //     </div>

          //     <div className='sm:col-span-2 sm:col-start-1'>
          //       <label
          //         htmlFor='city'
          //         className='block text-sm font-medium leading-6 text-gray-900'
          //       >
          //         City
          //       </label>
          //       <div className='mt-2'>
          //         <input
          //           type='text'
          //           id='city'
          //           {...register('city')}
          //           autoComplete='address-level2'
          //           className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6'
          //         />
          //         {errors.city?.message && (
          //           <p className='mt-2 text-sm text-red-400'>
          //             {errors.city.message}
          //           </p>
          //         )}
          //       </div>
          //     </div>

          //     <div className='sm:col-span-2'>
          //       <label
          //         htmlFor='state'
          //         className='block text-sm font-medium leading-6 text-gray-900'
          //       >
          //         State / Province
          //       </label>
          //       <div className='mt-2'>
          //         <input
          //           type='text'
          //           id='state'
          //           {...register('state')}
          //           autoComplete='address-level1'
          //           className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6'
          //         />
          //         {errors.state?.message && (
          //           <p className='mt-2 text-sm text-red-400'>
          //             {errors.state.message}
          //           </p>
          //         )}
          //       </div>
          //     </div>

          //     <div className='sm:col-span-2'>
          //       <label
          //         htmlFor='zip'
          //         className='block text-sm font-medium leading-6 text-gray-900'
          //       >
          //         ZIP / Postal code
          //       </label>
          //       <div className='mt-2'>
          //         <input
          //           type='text'
          //           id='zip'
          //           {...register('zip')}
          //           autoComplete='postal-code'
          //           className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6'
          //         />
          //         {errors.zip?.message && (
          //           <p className='mt-2 text-sm text-red-400'>
          //             {errors.zip.message}
          //           </p>
          //         )}
          //       </div>
          //     </div>
          //   </div>
          // </motion.div>
          <Project delta={delta} register={register} errors={errors} />
        )}

        {currentStep === 2 && (
          <Budget></Budget>
        )}

        {currentStep === 3 && (
          <>
            <h2 className='text-base font-semibold leading-7 text-gray-900'>
              Complete
            </h2>
            <p className='mt-1 text-sm leading-6 text-gray-600'>
              Thank you for your submission.
            </p>
          </>
        )}
      </form>

      {/* Navigation */}
      <div className='mt-8 pt-5'>
        <div className='flex justify-end gap-2'>
          {
            // first step
            currentStep === 0 ?
              <button type='button' onClick={next} className='bg-teal-600 text-white p-2 rounded-md'>Continue</button>
              :
              // last step
              currentStep === steps.length - 1 ?
                <>
                  <button type='button'
                    onClick={next} className='bg-teal-600 text-white p-2 rounded-md'>Submit</button>
                  <button
                    type='button'
                    onClick={prev}
                    disabled={currentStep === 0}
                    className='rounded bg-white px-2 py-1 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth='1.5'
                      stroke='currentColor'
                      className='h-6 w-6'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M15.75 19.5L8.25 12l7.5-7.5'
                      />
                    </svg>
                  </button>
                </>

                :
                <>
                  <button
                    type='button'
                    onClick={prev}
                    disabled={currentStep === 0}
                    className='rounded bg-white px-2 py-1 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth='1.5'
                      stroke='currentColor'
                      className='h-6 w-6'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M15.75 19.5L8.25 12l7.5-7.5'
                      />
                    </svg>
                  </button>
                  <button
                    type='button'
                    onClick={next}
                    // disabled={currentStep === steps.length - 1}
                    disabled={currentStep === steps.length}
                    className='rounded bg-white px-2 py-1 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth='1.5'
                      stroke='currentColor'
                      className='h-6 w-6'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M8.25 4.5l7.5 7.5-7.5 7.5'
                      />
                    </svg>
                  </button>
                </>
          }

        </div>
      </div>

    </section>
  )
}