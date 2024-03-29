import React from 'react';
import { motion } from 'framer-motion';
import image1 from '../../../../../public/images/image1.png';
import Image from 'next/image';

type props = {
    delta: number
    register: Function
    errors: any
}

const Services = ({ delta, register, errors }: props) => {
    return (
        // <div className='grid grid-cols-2'>
        //     <div>
        //         <Image src={image1} alt='image1' />
        //     </div>

            <div>
                <motion.div
                    initial={{ x: '50%' , opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                    <h2 className='text-base font-semibold leading-7 text-gray-900'>
                        Personal Information
                    </h2>
                    <p className='mt-1 text-sm leading-6 text-gray-600'>
                        Provide your personal details.
                    </p>
                    <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
                        <div className='sm:col-span-3'>
                            <label
                                htmlFor='firstName'
                                className='block text-sm font-medium leading-6 text-gray-900'
                            >
                                First name
                            </label>
                            <div className='mt-2'>
                                <input
                                    type='text'
                                    id='firstName'
                                    {...register('firstName')}
                                    autoComplete='given-name'
                                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6'
                                />
                                {errors.firstName?.message && (
                                    <p className='mt-2 text-sm text-red-400'>
                                        {errors.firstName.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className='sm:col-span-3'>
                            <label
                                htmlFor='lastName'
                                className='block text-sm font-medium leading-6 text-gray-900'
                            >
                                Last name
                            </label>
                            <div className='mt-2'>
                                <input
                                    type='text'
                                    id='lastName'
                                    {...register('lastName')}
                                    autoComplete='family-name'
                                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6'
                                />
                                {errors.lastName?.message && (
                                    <p className='mt-2 text-sm text-red-400'>
                                        {errors.lastName.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className='sm:col-span-4'>
                            <label
                                htmlFor='email'
                                className='block text-sm font-medium leading-6 text-gray-900'
                            >
                                Email address
                            </label>
                            <div className='mt-2'>
                                <input
                                    id='email'
                                    type='email'
                                    {...register('email')}
                                    autoComplete='email'
                                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6'
                                />
                                {errors.email?.message && (
                                    <p className='mt-2 text-sm text-red-400'>
                                        {errors.email.message}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        // </div>
    );
};

export default Services;