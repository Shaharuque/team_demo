import React from 'react';
import { motion } from 'framer-motion';
import BudgetCards from './Budgets/BudgetCards';

const Budget = () => {
    const [showBudget, setShowBudget] = React.useState();
    const cards = [
        {
            id: 1,
            name: 'Yes',
            svg: <svg xmlns="http://www.w3.org/2000/svg" width="81" height="82" viewBox="0 0 91 92" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M45.7547 0.745339L0.5 46L45.7547 91.2547L59.3307 77.6786L27.6521 46L59.3307 14.3214L45.7547 0.745339Z" fill="#E5E7EB" />
                <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M66.6855 21.6756L42.3611 46L66.6855 70.3244L73.9826 63.0272L56.9554 46L73.9826 28.9728L66.6855 21.6756Z" fill="#E5E7EB" />
                <path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M79.1296 34.1206L67.2502 46L79.1296 57.8794L82.6937 54.3152L74.3785 46L82.6937 37.6848L79.1296 34.1206Z" fill="#E5E7EB" />
            </svg>
        },
        {
            id: 2,
            name: 'No',
            svg: <svg xmlns="http://www.w3.org/2000/svg" width="81" height="82" viewBox="0 0 91 92" fill="none">
                <rect opacity="0.7" x="13.6924" y="51.2002" width="31.5299" height="31.5299" fill="#E5E7EB" />
                <rect opacity="0.4" x="9.0249" y="28.5889" width="27.3212" height="27.3212" transform="rotate(-45 9.0249 28.5889)" fill="#E5E7EB" />
                <rect opacity="0.7" x="50.9551" y="14.8931" width="31.5299" height="31.5299" fill="#E5E7EB" />
                <rect x="50.9551" y="51.2002" width="31.5299" height="31.5299" fill="#E5E7EB" />
            </svg>
        }
    ]

    const handleCardClick = (id: number) => {
        setShowBudget(id);
    }

    return (
        <div>
            <motion.div
                // initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
                initial={{ x: "50%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}>
                <div className="flex-1 mx-auto sm:px-10 xl:px-0 my-6 md:my-auto z-10">
                    <h4 className="text-[25px] font-bold">3. Please specify the budget and timeline:</h4>

                    <div className='mt-4'>
                        <h1>Do you have a specific budget for the project?</h1>
                        {/* Tried Dynamic solution */}
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4'>
                            {
                                cards.map((item, index) => {
                                    return (
                                        <div onClick={()=>handleCardClick(item?.id)} key={index} className='border border-gray-300 rounded-md hover:bg-[#014451] hover:text-white'>
                                            <div className='flex items-center my-[20px] relative p-4'>
                                                <div className='grid grid-cols-2 w-[60px] absolute left-4 z-0'>
                                                    {item.svg}
                                                </div>

                                                <div className='z-10'>
                                                    <h1 className='ml-[70px] font-[500] text-[14px] md:text-[17px] text-ellipsis'>
                                                        {item.name}</h1>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>

                        {
                            showBudget === 1 ?
                            <BudgetCards></BudgetCards>
                            :null
                        }
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Budget;