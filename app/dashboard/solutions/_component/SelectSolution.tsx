"use client";
import React, { useState } from 'react';

const SelectSolution = () => {
    const [show, setShow] = useState([1, 2, 3, 4]);

    const cards = [
        {
            id: 1,
            name: 'Individual and Startups',
            svg: <svg xmlns="http://www.w3.org/2000/svg" width="91" height="92" viewBox="0 0 91 92" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M45.7547 0.745339L0.5 46L45.7547 91.2547L59.3307 77.6786L27.6521 46L59.3307 14.3214L45.7547 0.745339Z" fill="#E5E7EB"/>
            <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M66.6855 21.6756L42.3611 46L66.6855 70.3244L73.9826 63.0272L56.9554 46L73.9826 28.9728L66.6855 21.6756Z" fill="#E5E7EB"/>
            <path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M79.1296 34.1206L67.2502 46L79.1296 57.8794L82.6937 54.3152L74.3785 46L82.6937 37.6848L79.1296 34.1206Z" fill="#E5E7EB"/>
          </svg>
        },
        {
            id: 2,
            name: 'Individual and Startups',
            svg: <svg xmlns="http://www.w3.org/2000/svg" width="91" height="92" viewBox="0 0 91 92" fill="none">
            <rect opacity="0.7" x="13.6924" y="51.2002" width="31.5299" height="31.5299" fill="#E5E7EB"/>
            <rect opacity="0.4" x="9.0249" y="28.5889" width="27.3212" height="27.3212" transform="rotate(-45 9.0249 28.5889)" fill="#E5E7EB"/>
            <rect opacity="0.7" x="50.9551" y="14.8931" width="31.5299" height="31.5299" fill="#E5E7EB"/>
            <rect x="50.9551" y="51.2002" width="31.5299" height="31.5299" fill="#E5E7EB"/>
          </svg>
        },
        {
            id: 3,
            name: 'Individual and Startups',
            svg: <svg xmlns="http://www.w3.org/2000/svg" width="109" height="108" viewBox="0 0 109 108" fill="none">
            <path opacity="0.4" d="M81.7549 27C76.4148 21.6599 69.6111 18.0232 62.2042 16.5499C54.7972 15.0766 47.1198 15.8328 40.1426 18.7228C33.1654 21.6128 27.2019 26.5069 23.0062 32.7862C18.8106 39.0655 16.5711 46.448 16.5711 54C16.5711 61.552 18.8106 68.9345 23.0062 75.2138C27.2019 81.493 33.1654 86.3872 40.1426 89.2772C47.1198 92.1672 54.7972 92.9234 62.2042 91.4501C69.6111 89.9767 76.4148 86.3401 81.7549 81L72.7537 71.9988C69.1939 75.5586 64.6584 77.9829 59.7207 78.965C54.7831 79.9472 49.6651 79.4431 45.014 77.5166C40.3629 75.59 36.3875 72.3275 33.5905 68.1416C30.7936 63.9556 29.3007 59.0343 29.3007 54C29.3007 48.9656 30.7936 44.0443 33.5905 39.8584C36.3875 35.6725 40.3629 32.41 45.014 30.4834C49.6651 28.5569 54.7831 28.0528 59.7207 29.0349C64.6584 30.0171 69.1939 32.4414 72.7537 36.0012L81.7549 27Z" fill="#E5E7EB"/>
            <path opacity="0.7" d="M54.7547 34.908C58.5307 34.908 62.222 36.0277 65.3616 38.1256C68.5013 40.2234 70.9483 43.2052 72.3933 46.6938C73.8383 50.1823 74.2164 54.0211 73.4798 57.7246C72.7431 61.428 70.9248 64.8299 68.2547 67.4999C65.5847 70.17 62.1828 71.9883 58.4794 72.725C54.7759 73.4616 50.9372 73.0835 47.4486 71.6385C43.96 70.1935 40.9782 67.7464 38.8804 64.6068C36.7826 61.4672 35.6628 57.7759 35.6628 53.9999L44.4413 53.9999C44.4413 56.0397 45.0462 58.0337 46.1794 59.7297C47.3127 61.4258 48.9234 62.7477 50.8079 63.5283C52.6925 64.3089 54.7662 64.5131 56.7668 64.1152C58.7674 63.7172 60.6051 62.735 62.0474 61.2926C63.4898 59.8503 64.472 58.0126 64.87 56.012C65.2679 54.0114 65.0637 51.9377 64.2831 50.0531C63.5025 48.1686 62.1806 46.5579 60.4846 45.4246C58.7885 44.2913 56.7945 43.6865 54.7547 43.6865L54.7547 34.908Z" fill="#E5E7EB"/>
            <circle cx="54.7548" cy="53.9999" r="4.5751" fill="#E5E7EB"/>
          </svg>
        },
        {
            id: 4,
            name: 'Setup a Company',
            svg: <svg xmlns="http://www.w3.org/2000/svg" width="91" height="92" viewBox="0 0 91 92" fill="none">
            <path opacity="0.4" d="M82.4849 9.27002V82.73H9.0249L82.4849 9.27002Z" fill="#E5E7EB"/>
            <path opacity="0.7" d="M52.3783 30.9467C52.3783 35.234 51.107 39.425 48.7252 42.9897C46.3433 46.5544 42.9578 49.3328 38.9969 50.9734C35.036 52.6141 30.6776 53.0434 26.4727 52.207C22.2678 51.3705 18.4054 49.306 15.3739 46.2745C12.3423 43.243 10.2778 39.3805 9.44141 35.1757C8.60501 30.9708 9.03428 26.6123 10.6749 22.6514C12.3156 18.6905 15.094 15.3051 18.6587 12.9232C22.2234 10.5413 26.4144 9.27002 30.7016 9.27002V30.9467H52.3783Z" fill="#E5E7EB"/>
            <path d="M9.0249 52.0215H24.0782V67.0748H17.5891V58.3227H9.0249V52.0215Z" fill="#E5E7EB"/>
          </svg>
        }
    ]
    return (
        <div>
            <h1 className=' font-[700] text-[15px] lg:text-[20px] xl:text-[25px] mb-[20px]'>Please select a solution to get started</h1>

            {/* Tried Dynamic solution */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {
                    cards.map((item, index) => {
                        return (
                            <div key={index} className='border border-gray-300 rounded-md hover:bg-[#014451] hover:text-white'>
                                <div className='flex items-center my-[20px] relative p-4'>
                                    <div className='grid grid-cols-2 w-[80px] absolute left-4 z-0'>
                                       {item.svg}
                                    </div>

                                    <div className='z-10'>
                                        <h1 className='ml-[50px] font-[500] text-[14px] md:text-[17px] text-ellipsis'>
                                            {item.name}</h1>
                                    </div>
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