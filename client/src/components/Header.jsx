'use client'
import { FaBed, FaPlane, FaCar, FaTaxi, FaCalendarDay, FaPersonBooth } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { MdAttractions } from "react-icons/md";
import { DateRange } from 'react-date-range';
import { useState } from "react";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns'
import { useNavigate } from 'react-router-dom'
import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";

const Header = ({ type }) => {
    const [destination, setDestination] = useState("")
    const [openDate, setOpenDate] = useState(false)
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1
    })
    const [openOptions, setOpenOptions] = useState(false)
    const [dates, setDates] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    const navigate = useNavigate()

    const handleOption = (name, operation) => {
        setOptions(prev => {
            return {
                ...prev, [name]: operation === 'i' ? options[name] + 1 : options[name] - 1
            }
        })
    }

    const { dispatch } = useContext(SearchContext)

    const handleSearch = () => {
        dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } })
        navigate('/hotels', { state: { destination, dates, options } })
    }

    return (
        <header className='bg-primary text-white flex justify-center relative'>
            {/* header container */}
            <div className={`${type !== 'list' ? 'mb-24.5' : 'mb-0'} w-full max-w-5xl mt-5`}>

                {/* header list */}
                <ul className="flex gap-10 mb-12.5">
                    <li className="flex items-center gap-2.5 border p-2.5 rounded-xl">
                        <FaBed size={24} />
                        <span>Stays</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                        <FaPlane size={24} />
                        <span>Flights</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                        <FaCar size={24} />
                        <span>Car Rentals</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                        <MdAttractions size={24} />
                        <span>Attactions</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                        <FaTaxi size={24} />
                        <span>Airport Taxis</span>
                    </li>
                </ul>
                {type !== 'list' && <>
                    <h1 className="text-5xl font-black ">Find your next stay</h1>
                    <p className="my-5 text-xl">Search deals on hotels, homes, and much more...</p>
                    <button className="bg-[#0071C2] p-2.5 cursor-pointer rounded">Sign in / Register</button>

                    {/* header search */}
                    <div className="w-full max-w-5xl p-2 bg-white border-3 border-[#febb02] flex items-center justify-around text-black rounded absolute -bottom-8">
                        {/* search item */}
                        <div className="flex gap-3">
                            <FaBed className="text-gray-400" size={24} />
                            <input
                                type="text"
                                placeholder="Where are you going?"
                                className="outline-none text-gray-500"
                                onChange={e => setDestination(e.target.value)}
                            />
                        </div>

                        {/* search item */}
                        <div className="flex gap-3 cursor-pointer">
                            <FaCalendarDay className="text-gray-400" size={20} />
                            <span onClick={() => setOpenDate(prev => !prev)} className="text-gray-500">{`${format(dates[0].startDate, 'dd/MM/yyyy')} to ${format(dates[0].endDate, 'dd/MM/yyyy')}`}
                            </span>
                            {openDate && <DateRange
                                className="absolute top-12.5 z-20"
                                editableDateInputs={true}
                                onChange={item => setDates([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={dates}
                                minDate={new Date()}
                            />}
                        </div>
                        {/*  search item */}
                        <div className="flex gap-3">
                            <FaPerson className="text-gray-400" size={22} />
                            <span onClick={() => setOpenOptions(prev => !prev)} className="text-gray-500 cursor-pointer">{`${options.adult} Adult . ${options.children} Children . ${options.room} Rooms`}</span>
                            {/* options */}
                            {openOptions && <div className="absolute top-12.5 text-gray-500 bg-white rounded w-48.5 shadow-md z-20">
                                {/* option item */}
                                <div className="flex justify-between m-2.5">
                                    <span className="">Adult</span>
                                    <div className="flex gap-5 text-black">
                                        <button disabled={options.adult <= 1} className="w-6 h-6 bg-gray-200 disabled:cursor-not-allowed" onClick={() => handleOption('adult', 'd')}>-</button>
                                        <span className="">{options.adult}</span>
                                        <button className="w-6 h-6 bg-gray-200" onClick={() => handleOption('adult', 'i')}>+</button>
                                    </div>
                                </div>
                                {/* option item */}
                                <div className="flex justify-between m-2.5">
                                    <span className="">Children</span>
                                    <div className="flex gap-5 text-black">
                                        <button disabled={options.children <= 0} className="w-6 h-6 bg-gray-200 disabled:cursor-not-allowed" onClick={() => handleOption('children', 'd')}>-</button>
                                        <span className="">{options.children}</span>
                                        <button className="w-6 h-6 bg-gray-200" onClick={() => handleOption('children', 'i')}>+</button>
                                    </div>
                                </div>
                                {/* option item */}
                                <div className="flex justify-between m-2.5">
                                    <span className="">Rooms</span>
                                    <div className="flex gap-5 text-black">
                                        <button disabled={options.room <= 1} className="w-6 h-6 bg-gray-200 disabled:cursor-not-allowed" onClick={() => handleOption('room', 'd')}>-</button>
                                        <span className="">{options.room}</span>
                                        <button className="w-6 h-6 bg-gray-200" onClick={() => handleOption('room', 'i')}>+</button>
                                    </div>
                                </div>
                            </div>}
                        </div>
                        {/*  search item */}
                        <div className="flex gap-3">
                            <button className="bg-[#0071C2] p-2.5 cursor-pointer rounded text-white" onClick={handleSearch}>Search</button>
                        </div>
                    </div>
                </>}
            </div>
        </header>
    )
}

export default Header
