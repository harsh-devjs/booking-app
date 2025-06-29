import { Link } from 'react-router-dom'

const SearchItem = ({ item }) => {
    return (
        <div className='border border-gray-300 flex gap-5 mb-5 p-2.5 rounded-[5px] justify-between'>
            <img src={item.photos} alt="" className="w-52 h-52 object-cover" />
            {/* description */}
            <div className="flex-2 flex flex-col gap-2.5">
                <h1 className="text-xl font-bold text-secondary capitalize">{item.name}</h1>
                <span className='text-xs'>{item.distance}m from center</span>
                <span className='text-xs text-white bg-green-600 p-1 w-max'>Free airport taxi</span>
                <span className='text-xs font-bold capitalize'>{item.title}</span>
                <span className='text-xs'>{item.desc}</span>
                <span className='text-xs text-green-600 font-bold'>Free cancellation</span>
                <span className='text-xs text-green-600 font-bold'>You can cancel later, so lock in this great price today.</span>
            </div>
            {/* details */}
            <div className="flex-1 flex flex-col justify-between">
                {/* rating */}
                <div className="flex justify-between items-center gap-2">
                    {item.rating && <>
                        <span className="font-seminbold text-primary">Excellent</span>
                        <button className="flex items-center gap-1 bg-primary text-white rounded p-1 px-2 text-xs">{item.rating}</button>
                    </>
                    }
                </div>

                {/* price */}
                <div className="flex flex-col">
                    <h1 className="font-medium text-lg inline-flex justify-end">₹{item.cheapestPrice}</h1>
                    <span className="text-xs text-gray-500 text-right">including all taxes and fees</span>
                    <Link to={`/hotels/${item._id}`}>
                        <button className="font-medium bg-primary text-white text-sm p-2.5 mt-2 rounded cursor-pointer">See vailability</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SearchItem
