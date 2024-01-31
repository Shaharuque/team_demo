import React from 'react';

type props={
    item:{
        id:number,
        name:string,
        svg:React.ReactNode
    }
    handleCardClick:(id:number)=>void

}
const BudgetCard = ({item,handleCardClick}:props) => {
    return (
        <div onClick={()=>handleCardClick(item?.id)} className='border border-gray-300 rounded-md hover:bg-[#014451] hover:text-white'>
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
    );
};

export default BudgetCard;