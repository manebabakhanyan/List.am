import React from 'react'

export default function Header() {
    return (
        <div>
            <header className='border-b-[1px] text-grey p-[5px] pl-[60px] pr-[60px]'>
                <div className='flex justify-evenly items-center'>
                    <img src="photo_5420086850690863135_y.jpg" alt="" className='h-[10px] width=[50px]' />
                    <p className='text-5 text-grey' >Բաժիններ</p>
                    <input type="text" className='border-none h-[10px] w-[150px] p-[6px] rounded-lg text-[5px] bg-lightgrey' placeholder='Որոնում' />
                    <p className='text-5 pl-[20px]'>Իմ էջը</p>
                    <p className='bg-blue text-5 text-white rounded-[20px] p-[2px]'>Տեղադրել հայտարարություն</p>
                </div>
            </header>
        </div>
    )
}