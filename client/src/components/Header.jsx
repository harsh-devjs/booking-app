import { FaBed, FaPlane, FaCar, FaTaxi } from "react-icons/fa";
import { MdAttractions } from "react-icons/md";


const Header = () => {
    return (
        <header className='bg-primary text-white flex justify-center'>
            {/* header container */}
            <div className="w-full max-w-5xl mt-5 mb-24.5">

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

                <h1 className="text-5xl font-black ">Find your next stay</h1>
                <p className="my-5 text-xl">Search deals on hotels, homes, and much more...</p>
                <button className="bg-[#0071C2] p-2.5 cursor-pointer rounded">Sign in / Register</button>
            </div>
        </header>
    )
}

export default Header
