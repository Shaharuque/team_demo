import Link from 'next/link';
import React, { useState } from 'react';

const Resources = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="inline-block text-left">
            <button
                type="button"
                className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none "
                onClick={toggleDropdown}
            >
                Solutions
                <svg
                    className="-mr-1 ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>

            {isOpen && (
                    <div className="absolute p-[20px] left-0 z-20 max-w-[100vw] backdrop-blur-sm bg-white/30 mt-2 border border-gray-300 rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="flex items-center ">
                            <Link href='/dashboard' className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-teal-300 hover:rounded-md hover:text-gray-900">
                                <h1 className='font-bold text-[17px]'>Process Engineering</h1>
                                <p>In a constantly changing business landscape, we assist clients in analyzing, adapting, and designing processes. We help uncover automation and digitization opportunities while ensuring effective control of their implementation.</p>
                            </Link>
                            <Link href='/dashboard' className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-teal-300 hover:rounded-md hover:text-gray-900">
                                In a constantly changing business landscape, we assist clients in analyzing, adapting, and designing processes. We help uncover automation and digitization opportunities while ensuring effective control of their implementation.
                            </Link>
                            <Link href='/dashboard' className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-teal-300 hover:rounded-md hover:text-gray-900">
                                In a constantly changing business landscape, we assist clients in analyzing, adapting, and designing processes. We help uncover automation and digitization opportunities while ensuring effective control of their implementation.
                            </Link>
                            <Link href='/dashboard' className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-teal-300 hover:rounded-md hover:text-gray-900">
                                In a constantly changing business landscape, we assist clients in analyzing, adapting, and designing processes. We help uncover automation and digitization opportunities while ensuring effective control of their implementation.
                            </Link>
                        </div>
                    </div>
            )}
        </div>
    );
};

export default Resources;
