import React from 'react'

export default function Footer() {
    return (
        <div>
            <div className='p-[10px]'>
                <div className="bg-lightgray h-[15px]"></div>
            </div>
            <div className='flex justify-evenly'>
                <div className='text-[5px]'>© 2005-2023 List.am</div>
                <div className='flex text-[5px] gap-[6px] pb-[7.5px]'>
                    <p>Տեղեկանք</p>
                    <p>Հետադարձ կապ</p>
                    <p>Օգտագործման համաձայնագիր</p>
                </div>
            </div>
        </div>
    )
}
