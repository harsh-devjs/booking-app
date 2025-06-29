import useFetch from '../hooks/useFetch'

const FeaturedHomes = () => {

    const baseUrl = import.meta.env.VITE_API_BASE_URL
    const { data, loading, error } = useFetch(`${baseUrl}/hotels?featured=true`)

    return (
        <section className='w-full max-w-5xl flex justify-between gap-5 z-1'>
            {loading ? "Loading please wait..." :
                <>
                    {data.map(item =>
                        <div key={item._id} className="rounded-md overflow-hidden cursor-pointer">
                            <img src={"https://r-xx.bstatic.com/xdata/images/hotel/263x210/595550862.jpeg?k=3514aa4abb76a6d19df104cb307b78b841ac0676967f24f4b860d289d55d3964&o="} alt="" className="" />
                            {/* information */}
                            <div className="mt-2 flex flex-col gap-1">
                                <span className="text-[15px] font-medium capitalize">{item.name}</span>
                                <span className="text-sm text-gray-500 capitalize">{item.city}</span>
                                {/* rating */}
                                {item.rating && <div className="flex items-center gap-2 my-2">
                                    <button className="flex items-center gap-1 bg-primary text-white rounded p-1 px-2">
                                        ⭐<span>{item.rating}</span>
                                    </button>
                                    <span className="">Excellent</span>
                                </div>}
                                <span className="inline-flex justify-end text-gray-500 gap-2 text-sm items-center">Starting from <span className='text-black font-medium text-base'>₹ {item.cheapestPrice}</span></span>
                            </div>
                        </div>
                    )}
                </>
            }
            {/* <div className="rounded-md overflow-hidden cursor-pointer">
                <img src="https://r-xx.bstatic.com/xdata/images/hotel/263x210/595550862.jpeg?k=3514aa4abb76a6d19df104cb307b78b841ac0676967f24f4b860d289d55d3964&o=" alt="" className="" />
                

                <div className="mt-2 flex flex-col gap-1">
                    <span className="text-[15px] font-medium">7Seasons Apartment Budapest</span>
                    <span className="text-sm text-gray-500">06. Terezvaros, Hungary, Budapest</span>
                
                    <div className="flex items-center gap-2 my-2">
                        <button className="flex items-center gap-1 bg-primary text-white rounded p-1 px-2">
                            ⭐
                            <span>8.8</span>
                        </button>
                        <span className="">Excellent</span>
                    </div>
                    <span className="inline-flex justify-end text-gray-500 gap-2 text-sm items-center">Starting from <span className='text-black font-medium text-base'>₹ 12,507</span></span>
                </div>
            </div>

            <div className="rounded-md overflow-hidden cursor-pointer">
                <img src="https://r-xx.bstatic.com/xdata/images/hotel/263x210/595550862.jpeg?k=3514aa4abb76a6d19df104cb307b78b841ac0676967f24f4b860d289d55d3964&o=" alt="" className="" />

                <div className="mt-2 flex flex-col gap-1">
                    <span className="text-[15px] font-medium">Midtown Apartments</span>
                    <span className="text-sm text-gray-500">Old Town, Poland, Krakow</span>

                    <div className="flex items-center gap-2 my-2">
                        <button className="flex items-center gap-1 bg-primary text-white rounded p-1 px-2">
                            ⭐
                            <span>8.9</span>
                        </button>
                        <span className="">Excellent</span>
                    </div>
                    <span className="inline-flex justify-end text-gray-500 gap-2 text-sm items-center">Starting from <span className='text-black font-medium text-base'>₹ 14,130</span></span>
                </div>
            </div>

            <div className="rounded-md overflow-hidden cursor-pointer">
                <img src="https://r-xx.bstatic.com/xdata/images/hotel/263x210/595550862.jpeg?k=3514aa4abb76a6d19df104cb307b78b841ac0676967f24f4b860d289d55d3964&o=" alt="" className="" />

                <div className="mt-2 flex flex-col gap-1">
                    <span className="text-[15px] font-medium">Apart Hotel Stare Miasto</span>
                    <span className="text-sm text-gray-500">Old Town, Poland, Krakow</span>

                    <div className="flex items-center gap-2 my-2">
                        <button className="flex items-center gap-1 bg-primary text-white rounded p-1 px-2">
                            ⭐
                            <span>8.9</span>
                        </button>
                        <span className="">Excellent</span>
                    </div>
                    <span className="inline-flex justify-end text-gray-500 gap-2 text-sm items-center">Starting from <span className='text-black font-medium text-base'>₹ 14,130</span></span>
                </div>
            </div> */}
        </section>

    )
}

export default FeaturedHomes
