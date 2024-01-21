"use client";
import React, { useState } from 'react';

const SelectSolution = () => {
    const [show, setShow] = useState([1, 2, 3, 4]);
    return (
        <div>
            <h1 className=' font-[700] text-[15px] lg:text-[20px] xl:text-[25px]'>Please select a solution to get started</h1>

            <div className='grid grid-cols-2 gap-4'>
                {
                    show.map((item, index) => {
                        return (
                            <div key={index} className='border border-gray-500 rounded-md'>
                                <div className='flex items-center my-[20px]'>
                                    <div className='w-[20px] h-[20px] rounded-full bg-[#0694A2]'></div>
                                    <h1 className='ml-[10px] font-[500] text-[15px] lg:text-[20px] xl:text-[25px]'>Solution {item}</h1>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default SelectSolution;