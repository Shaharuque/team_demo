"use client";
import React, { useState } from 'react';

const SelectSolution = () => {
    const [show, setShow] = useState([1, 2, 3, 4]);

    const cards = [
        {
            id: 1,
            name: 'Individual and Startups',
            svg: [
                {
                    id: 1,
                    name: 'http://www.w3.org/2000/svg',
                    path: 'M0.525005 37.2549L37.255 37.2549L37.255 0.524883C37.255 20.8103 20.8104 37.2549 0.525005 37.2549Z',
                    viewBox: '0 0 38 38',
                    fill: '#E5E7EB'
                },
                {
                    id: 2,
                    name: 'http://www.w3.org/2000/svg',
                    path: 'M0.255003 0.524883C0.255004 20.8103 16.6996 37.2549 36.985 37.2549L36.985 0.524882L0.255003 0.524883Z',
                    viewBox: '0 0 37 38',
                    opacity: '0.4',
                    fill: '#E5E7EB'
                },
                {
                    id: 3,
                    name: 'http://www.w3.org/2000/svg',
                    path: 'M37.255 36.9849C37.255 16.6995 20.8104 0.254882 0.525005 0.254881L0.525004 36.9849L37.255 36.9849Z',
                    viewBox: '0 0 38 37',
                    fill: '#E5E7EB'
                },
                {
                    id: 4,
                    name: 'http://www.w3.org/2000/svg',
                    path: 'M36.985 0.254883C16.6996 0.254883 0.255005 16.6995 0.255005 36.9849H36.985V0.254883Z',
                    viewBox: '0 0 37 37',
                    opacity: '0.4',
                    fill: '#E5E7EB'
                }
            ]
        },
        {
            id: 2,
            name: 'Individual and Startups',
            svg: [
                {
                    id: 1,
                    name: 'http://www.w3.org/2000/svg',
                    path: 'M0.525005 37.2549L37.255 37.2549L37.255 0.524883C37.255 20.8103 20.8104 37.2549 0.525005 37.2549Z',
                    viewBox: '0 0 38 38',
                    fill: '#E5E7EB'
                },
                {
                    id: 2,
                    name: 'http://www.w3.org/2000/svg',
                    path: 'M0.255003 0.524883C0.255004 20.8103 16.6996 37.2549 36.985 37.2549L36.985 0.524882L0.255003 0.524883Z',
                    viewBox: '0 0 37 38',
                    opacity: '0.4',
                    fill: '#E5E7EB'
                },
                {
                    id: 3,
                    name: 'http://www.w3.org/2000/svg',
                    path: 'M37.255 36.9849C37.255 16.6995 20.8104 0.254882 0.525005 0.254881L0.525004 36.9849L37.255 36.9849Z',
                    viewBox: '0 0 38 37',
                    fill: '#E5E7EB'
                },
                {
                    id: 4,
                    name: 'http://www.w3.org/2000/svg',
                    path: 'M36.985 0.254883C16.6996 0.254883 0.255005 16.6995 0.255005 36.9849H36.985V0.254883Z',
                    viewBox: '0 0 37 37',
                    opacity: '0.4',
                    fill: '#E5E7EB'
                }
            ]
        }
    ]
    return (
        <div>
            <h1 className=' font-[700] text-[15px] lg:text-[20px] xl:text-[25px] mb-[20px]'>Please select a solution to get started</h1>
            {/* <div className='grid grid-cols-2 w-[80px]'>
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.525005 37.2549L37.255 37.2549L37.255 0.524883C37.255 20.8103 20.8104 37.2549 0.525005 37.2549Z" fill="#E5E7EB" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="37" height="38" viewBox="0 0 37 38" fill="none">
                    <path opacity="0.4" fillRule="evenodd" clipRule="evenodd" d="M0.255003 0.524883C0.255004 20.8103 16.6996 37.2549 36.985 37.2549L36.985 0.524882L0.255003 0.524883Z" fill="#E5E7EB" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="37" viewBox="0 0 38 37" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M37.255 36.9849C37.255 16.6995 20.8104 0.254882 0.525005 0.254881L0.525004 36.9849L37.255 36.9849Z" fill="#E5E7EB" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
                    <path opacity="0.4" fillRule="evenodd" clipRule="evenodd" d="M36.985 0.254883C16.6996 0.254883 0.255005 16.6995 0.255005 36.9849H36.985V0.254883Z" fill="#E5E7EB" />
                </svg>
            </div> */}

            {/* Tried Dynamic solution */}
            {/* <div className='grid grid-cols-2 gap-4'>
                {
                    cards.map((item, index) => {
                        return (
                            <div key={index} className='border border-gray-300 rounded-md hover:bg-[#014451] hover:text-white'>
                                <div className='flex items-center my-[20px] relative p-4'>
                                    <div className='grid grid-cols-2 w-[80px] absolute left-4 z-0'>
                                        {
                                            item.svg.map((item, index) => {
                                                return (
                                                    <svg key={index} xmlns={item.name} width="38" height="38" viewBox={item.viewBox} fill="none">
                                                        <path opacity={item?.opacity} fillRule="evenodd" clipRule="evenodd" d={item.path} fill={item.fill} />
                                                    </svg>
                                                )
                                            })
                                        }
                                    </div>

                                    <div className='z-10'>
                                        <h1 className='ml-[50px] font-[500] text-[14px] md:text-[17px] text-ellipsis'>Individual and
                                            Startups</h1>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div> */}

            <div className='grid grid-cols-2 gap-4'>
                {/* Card-1 */}
                <div className='border border-gray-300 rounded-md hover:bg-[#014451] hover:text-white'>
                    <div className='flex items-center my-[20px] relative p-4'>
                        <div className='grid grid-cols-2 w-[80px] absolute left-4 z-0'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M0.525005 37.2549L37.255 37.2549L37.255 0.524883C37.255 20.8103 20.8104 37.2549 0.525005 37.2549Z" fill="#E5E7EB" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="37" height="38" viewBox="0 0 37 38" fill="none">
                                <path opacity="0.4" fillRule="evenodd" clipRule="evenodd" d="M0.255003 0.524883C0.255004 20.8103 16.6996 37.2549 36.985 37.2549L36.985 0.524882L0.255003 0.524883Z" fill="#E5E7EB" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="37" viewBox="0 0 38 37" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M37.255 36.9849C37.255 16.6995 20.8104 0.254882 0.525005 0.254881L0.525004 36.9849L37.255 36.9849Z" fill="#E5E7EB" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
                                <path opacity="0.4" fillRule="evenodd" clipRule="evenodd" d="M36.985 0.254883C16.6996 0.254883 0.255005 16.6995 0.255005 36.9849H36.985V0.254883Z" fill="#E5E7EB" />
                            </svg>
                        </div>

                        <div className='z-10'>
                            <h1 className='ml-[50px] font-[500] text-[14px] md:text-[17px] text-ellipsis'>Individual and
                                Startups</h1>
                        </div>
                    </div>
                </div>

                {/* Card-2 */}
                <div className='border border-gray-300 rounded-md hover:bg-[#014451] hover:text-white'>
                    <div className='flex items-center my-[20px] relative p-4'>
                        <div className='absolute left-4 z-0'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="75" height="74" viewBox="0 0 75 74" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M0.192524 0.27002H21.996C29.639 0.27002 36.0304 5.62912 37.6175 12.7947C40.2337 5.49329 47.215 0.270051 55.4163 0.270051C65.8553 0.270051 74.3178 8.73255 74.3178 19.1716C74.3178 27.4041 69.0547 34.4073 61.7097 37C69.0547 39.5928 74.3178 46.596 74.3178 54.8285C74.3178 65.2676 65.8553 73.73 55.4163 73.73C46.801 73.73 39.532 67.9662 37.2551 60.0843C34.9781 67.9662 27.7091 73.73 19.0939 73.73C8.65488 73.73 0.192383 65.2676 0.192383 54.8285C0.192383 47.0167 4.93138 40.3117 11.6913 37.4316C5.04614 35.4872 0.192524 29.3472 0.192524 22.0735V0.27002Z" fill="#E5E7EB" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M56.7818 27.6068C56.7818 31.9442 54.0089 35.6339 50.1391 37C54.0089 38.3661 56.7818 42.0558 56.7818 46.3932C56.7818 51.8932 52.3232 56.3518 46.8232 56.3518C42.2841 56.3518 38.4543 53.315 37.2547 49.1624C36.055 53.315 32.2252 56.3518 27.6861 56.3518C22.1862 56.3518 17.7275 51.8932 17.7275 46.3932C17.7275 41.311 21.5345 37.118 26.4522 36.5103V35.8197C21.273 33.1709 17.7275 27.7823 17.7275 21.5656V17.6482H21.645C28.3289 17.6482 34.0556 21.7467 36.4491 27.5676H36.8647C36.8858 22.0857 41.3363 17.6482 46.8232 17.6482C52.3232 17.6482 56.7818 22.1068 56.7818 27.6068Z" fill="#F5F5F7" />
                            </svg>
                        </div>

                        <div className='z-10'>
                            <h1 className='ml-[50px] font-[500] text-[14px] md:text-[17px] text-ellipsis'>In house Teams</h1>
                        </div>
                    </div>
                </div>

                {/* Card-3 */}
                <div className='border border-gray-300 rounded-md hover:bg-[#014451] hover:text-white'>
                    <div className='flex items-center my-[20px] relative p-4'>
                        <div className='absolute left-4 z-0'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="74" height="74" viewBox="0 0 74 74" fill="none">
                                <g clipPath="url(#clip0_368_8974)">
                                    <rect x="31.4573" y="-33.9604" width="23.5072" height="103.596" transform="rotate(45 31.4573 -33.9604)" fill="#E5E7EB" />
                                    <rect x="39.1348" y="112.388" width="23.5072" height="103.596" transform="rotate(-135 39.1348 112.388)" fill="#E5E7EB" />
                                    <path opacity="0.4" fillRule="evenodd" clipRule="evenodd" d="M92.9576 2.01834L72.4916 -18.4478L-18.4482 72.492L2.01785 92.9581L92.9576 2.01834ZM37.2549 49.0752C43.783 49.0752 49.075 43.7832 49.075 37.2551C49.075 30.7271 43.783 25.435 37.2549 25.435C30.7269 25.435 25.4348 30.7271 25.4348 37.2551C25.4348 43.7832 30.7269 49.0752 37.2549 49.0752Z" fill="#E5E7EB" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_368_8974">
                                        <rect width="73.46" height="73.46" fill="white" transform="translate(0.524902 0.524902)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>

                        <div className='z-10'>
                            <h1 className='ml-[50px] font-[500] text-[14px] md:text-[17px] text-ellipsis'>Enterprise Solutions</h1>
                        </div>
                    </div>
                </div>

                {/* Card-4 */}
                <div className='border border-gray-300 rounded-md hover:bg-[#014451] hover:text-white'>
                    <div className='flex items-center my-[20px] relative p-4'>
                        <div className='absolute left-4 z-0'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="91" height="92" viewBox="0 0 91 92" fill="none">
                                <path opacity="0.4" d="M68.22 16.9412C72.036 19.8914 75.2337 23.5643 77.6303 27.7502C80.0269 31.9361 81.5755 36.5531 82.1878 41.3375C82.8001 46.122 82.464 50.9802 81.1987 55.6347C79.9335 60.2893 77.7638 64.649 74.8137 68.4651C71.8635 72.2811 68.1906 75.4787 64.0047 77.8753C59.8188 80.2719 55.2018 81.8206 50.4173 82.4329C45.6329 83.0451 40.7747 82.7091 36.1202 81.4438C31.4656 80.1786 27.1059 78.0089 23.2898 75.0588L38.7894 55.0099C39.9726 55.9246 41.3244 56.5973 42.7676 56.9896C44.2108 57.3819 45.7171 57.4861 47.2005 57.2962C48.684 57.1064 50.1155 56.6262 51.4134 55.8832C52.7112 55.1401 53.8501 54.1486 54.7648 52.9654C55.6795 51.7822 56.3522 50.4305 56.7445 48.9873C57.1368 47.5441 57.241 46.0378 57.0512 44.5544C56.8613 43.0709 56.3812 41.6394 55.6381 40.3415C54.895 39.0436 53.9036 37.9048 52.7204 36.9901L68.22 16.9412Z" fill="#E5E7EB" />
                                <path opacity="0.7" fillRule="evenodd" clipRule="evenodd" d="M9.0249 30.3897L9.0249 46L45.7549 46L45.7549 9.27L31.0629 9.27L31.0629 30.3897L9.0249 30.3897Z" fill="#E5E7EB" />
                                <rect x="9.0249" y="20.2891" width="11.019" height="11.019" transform="rotate(-90 9.0249 20.2891)" fill="#E5E7EB" />
                            </svg>
                        </div>

                        <div className='z-10'>
                            <h1 className='ml-[50px] font-[500] text-[14px] md:text-[17px] text-ellipsis'>Enterprise Solutions</h1>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SelectSolution;