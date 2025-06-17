import React from 'react'

const SearchItem = () => {
    return (
        <div className='border border-gray-300 flex gap-5 mb-5 p-2.5 rounded-[5px] justify-between'>
            <img src="https://cf.bstatic.com/xdata/images/hotel/square200/493232041.webp?k=a54fba1915af277676b860aa71f8b2b68e796feee31766499b1ef615c1cee424&o=" alt="" className="w-52 h-52 object-cover" />
            {/* description */}
            <div className="flex-2 flex flex-col gap-2.5 flex-2">
                <h1 className="text-xl font-bold text-secondary">Tower Street Apartment</h1>
                <span className='text-xs'>500m from center</span>
                <span className='text-xs text-white bg-green-600 p-1 w-max'>Free airport taxi</span>
                <span className='text-xs font-bold'>Studio apartment with air conditioning</span>
                <span className='text-xs'>Entire studio . 1 bathroom . 21m<sup>2</sup> 1 full bed</span>
                <span className='text-xs text-green-600 font-bold'>Free cancellation</span>
                <span className='text-xs text-green-600 font-bold'>You can cancel later, so lock in this great price today.</span>
            </div>
            {/* details */}
            <div className="flex-1 flex flex-col justify-between">
                {/* rating */}
                <div className="flex justify-between items-center gap-2">
                    <span className="font-seminbold text-primary">Excellent</span>
                    <button className="flex items-center gap-1 bg-primary text-white rounded p-1 px-2 text-xs">8.9</button>
                </div>

                {/* price */}
                <div className="flex flex-col">
                    <h1 className="font-medium text-lg inline-flex justify-end">$112</h1>
                    <span className="text-xs text-gray-500 text-right">including all taxes and fees</span>
                    <button className="font-medium bg-primary text-white text-sm p-2.5 mt-2 rounded cursor-pointer">See vailability</button>
                </div>
            </div>
        </div>
    )
}

export default SearchItem
