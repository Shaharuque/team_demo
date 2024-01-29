import Image from 'next/image';
import React from 'react';
import RightCard from './_component/RightCard';
import SelectSolution from './_component/SelectSolution';



const solutionsPage = () => {
    return (
        // <div className="svg-container overflow-hidden">
        //     <svg
        //         className=" h-auto w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-[717px]"
        //         xmlns="http://www.w3.org/2000/svg"
        //         width="717"
        //         viewBox="0 0 717 411"
        //         fill="none"
        //     >
        //         <path d="M690.591 502C709.857 462.097 718.247 370.752 660.244 348.839C587.739 321.448 537.544 398.55 485.32 373.694C433.097 348.839 502.559 291.521 393.042 234.202C283.525 176.883 181.613 246.376 104.038 213.912C26.4635 181.448 149.163 9.49153 41.6743 12.0278C-65.8149 14.564 27.1855 194.723 14.295 273.767C2.05213 348.839 -199.743 436.058 -98.8457 486.275C18.3863 544.622 -15.0608 398.55 69.6122 373.694C154.285 348.839 221.161 390.941 218.626 463.477" stroke="url(#paint0_linear_361_7955)" strokeOpacity="0.28" strokeWidth="24" />
        //         <defs>
        //             <linearGradient id="paint0_linear_361_7955" x1="462.5" y1="242.5" x2="705" y2="409.5" gradientUnits="userSpaceOnUse">
        //                 <stop stopColor="#0694A2" />
        //                 <stop offset="1" stopColor="#0694A2" stopOpacity="0" />
        //             </linearGradient>
        //         </defs>
        //     </svg>

        //     {/* <svg xmlns="http://www.w3.org/2000/svg" width="705" height="411" viewBox="0 0 705 411" fill="none">
        //         <path d="M690.591 502C709.857 462.097 718.247 370.752 660.244 348.839C587.739 321.448 537.544 398.55 485.32 373.694C433.097 348.839 502.559 291.521 393.042 234.202C283.525 176.883 181.613 246.376 104.038 213.912C26.4635 181.448 149.163 9.49153 41.6743 12.0278C-65.8149 14.564 27.1855 194.723 14.295 273.767C2.05213 348.839 -199.743 436.058 -98.8457 486.275C18.3863 544.622 -15.0608 398.55 69.6122 373.694C154.285 348.839 221.161 390.941 218.626 463.477" stroke="url(#paint0_linear_380_12305)" strokeOpacity="0.28" strokeWidth="24" />
        //         <defs>
        //             <linearGradient id="paint0_linear_380_12305" x1="462.5" y1="242.5" x2="705" y2="409.5" gradientUnits="userSpaceOnUse">
        //                 <stop stopColor="#0694A2" />
        //                 <stop offset="1" stopColor="#0694A2" stopOpacity="0" />
        //             </linearGradient>
        //         </defs>
        //     </svg> */}

        //     <div>
        //         <div className="grid grid-cols-1 lg:grid-cols-2   my-[40px] mx-[20px] sm:w-1/2 md:mx-[80px] lg:mx-[120px] xl:mx-[250px]">
        //             <div className="z-10">
        //                 <RightCard></RightCard>
        //             </div>
        //             <div className=" z-10">
        //                 <SelectSolution></SelectSolution>
        //             </div>

        //         </div>
        //     </div>

        // </div>

        <div className="svg-container">
            <svg
                className='svg-content'
                xmlns="http://www.w3.org/2000/svg"
                width="717"
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

            {/* <div className='mt-[20px] md:mt-[80px] mx-[20px] md:mx-[40px] lg:mx-[80px]'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                    <div className="z-10 flex justify-center">
                        <RightCard></RightCard>
                    </div>
                    <div className="flex flex-col justify-center z-10">
                        <SelectSolution></SelectSolution>
                    </div>

                </div>
            </div> */}
        </div>
    );
};

export default solutionsPage;