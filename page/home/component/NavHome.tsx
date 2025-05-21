import React from 'react'

const NavHome: React.FC = () => {
    return (
        <div className='w-full px-2 py-[5px] bg-[#fff] rounded-lg mb-[5px] flex justify-between items-center'>
            <div className='flex items-center w-fit shrink-0'>
                <div className='h-[25px] w-[5px] mr-[10px] bg-red-500'></div>
                <h2 className='text-base text-[#222] uppercase font-bold m-0'>BÁN CHẠY NHẤT</h2>
            </div>
            <div className='flex overflow-hidden'>
                <span className='text-sm text-gray-600'>Sắp xếp theo</span>
                <div className='flex overflow-x-auto hidden-scroll px-2'>
                    <a className='shrink-0 px-[8px] h-[30px] w-fit ml-[8px] first:ml-0 bg-[#321d1d] border-[#e5e7eb] border-[1px] rounded text-[#fff] text-[11px] w600:text-xs flex items-center transition-all hover:border-[#fff] hover:bg-dtv hover:text-[#fff] hover:bottom-0' href="">Tăng dần</a>
                    <a className='shrink-0 px-[8px] h-[30px] w-fit ml-[8px] first:ml-0 bg-[#321d1d] border-[#e5e7eb] border-[1px] rounded text-[#fff] text-[11px] w600:text-xs flex items-center transition-all hover:border-[#fff] hover:bg-dtv hover:text-[#fff] hover:bottom-0' href="">giảm dần</a>
                    <a className='shrink-0 px-[8px] h-[30px] w-fit ml-[8px] first:ml-0 bg-[#321d1d] border-[#e5e7eb] border-[1px] rounded text-[#fff] text-[11px] w600:text-xs flex items-center transition-all hover:border-[#fff] hover:bg-dtv hover:text-[#fff] hover:bottom-0' href="">thể loại</a>
                    <a className='shrink-0 px-[8px] h-[30px] w-fit ml-[8px] first:ml-0 bg-[#321d1d] border-[#e5e7eb] border-[1px] rounded text-[#fff] text-[11px] w600:text-xs flex items-center transition-all hover:border-[#fff] hover:bg-dtv hover:text-[#fff] hover:bottom-0' href="">khoảng giá</a>
                </div>
            </div>
        </div>
    )
}

export default NavHome
