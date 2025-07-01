'use client'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import MailList from '../components/MailList'
import Footer from '../components/Footer'
import { FaLightbulb } from 'react-icons/fa'
import { useContext, useState } from 'react'
import { FaCircleArrowLeft, FaCircleArrowRight, FaCircleXmark } from 'react-icons/fa6'
import useFetch from '../hooks/useFetch'
import { useLocation } from 'react-router-dom'
import { SearchContext } from '../context/SearchContext'

const Hotel = () => {
  const location = useLocation()
  const id = location.pathname.split('/')[2]
  const [slideIndex, setSlideIndex] = useState(0)
  const [open, setOpen] = useState(false)
  const baseUrl = import.meta.env.VITE_API_BASE_URL
  const { data, loading, error } = useFetch(`${baseUrl}/hotels/${id}`)

  const { dates, options } = useContext(SearchContext)

  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime())
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY)
    return diffDays;
  }

  const days = dayDifference(dates[0].startDate, dates[0].endDate)

  const handleOpen = (i) => {
    setSlideIndex(i)
    setOpen(true)
  }

  const handleMove = (direction) => {
    let newSlideIndex;

    if (direction === 'l') {
      newSlideIndex = slideIndex === 0 ? 4 : slideIndex - 1
    } else {
      newSlideIndex = slideIndex === 4 ? 0 : slideIndex + 1
    }
    setSlideIndex(newSlideIndex)
  }

  return (
    <div className=''>
      <Navbar />
      <Header type='list' />

      {/* hotel container */}
      {loading ? 'Loading please wait...' : <div className="flex flex-col items-center pt-5 gap-7.5">

        {/* slider */}
        {open && (
          <div className="sticky -top-5 left-0 w-screen h-screen bg-gray-700 z-10 flex items-center">
            <FaCircleXmark color='lightgray' size={30} className='absolute top-10 right-20 cursor-pointer' onClick={() => setOpen(false)} />
            <FaCircleArrowLeft color='lightgray' size={50} className='absolute left-20 cursor-pointer' onClick={() => handleMove('l')} />
            {/* slider wrapper */}
            <div className="w-full h-full flex justify-center items-center">
              <img className='w-[80%] h-[80%]' src={photos[slideIndex].src} alt="" />
            </div>
            <FaCircleArrowRight color='lightgray' size={50} className='absolute right-20 cursor-pointer' onClick={() => handleMove('r')} />
          </div>
        )}

        {/* hotel wrapper */}
        <div className="w-full max-w-5xl flex flex-col gap-2.5 relative">
          <button className="absolute right-0 top-2.5 text-white bg-secondary py-2.5 px-5 rounded-md font-medium cursor-pointer">Reserve or Book Now!</button>
          <h1 className="text-2xl">{data.name}</h1>
          {/* hotel address */}
          <div className="flex items-center gap-2.5">
            <FaLightbulb size={16} />
            <span>{data.address}</span>
          </div>
          {/* hotel distance */}
          <span className="text-secondary font-medium">Excellent location - {data.distance}m from center</span>
          {/* hotel price highlight */}
          <span className="text-green-600 font-medium">Book a stay over at this property and get a free airport taxi.</span>
          {/* hotel images */}
          <div className="flex flex-wrap gap-.5">
            {data.photos?.map((photo, i) => (
              <div key={i} className="w-1/3">
                <img onClick={() => handleOpen(i)} className='w-full object-cover' src={photo.src} alt='' />
              </div>
            ))}
          </div>
          {/* hotel details */}
          <div className="flex justify-between gap-5 mt-5">
            {/* hotel detail texts */}
            <div className="flex-3">
              <h1 className="text-2xl font-semibold">{data.title}</h1>
              <p className="text-sm mt-5">{data.desc}</p>
            </div>
            {/* hotel detail price */}
            <div className="bg-secondary rounded-xl flex-1 text-white flex flex-col gap-5 p-5">
              <h1 className="text-xl font-semibold">Perfect for {days}-night stay!</h1>
              <span className="text-sm text-gray-200">Located in the real heart of Krakow, this property has an excellent location score of 9.5!</span>
              <h2 className="">
                <b>₹{days * data.cheapestPrice * options.room}</b> ({days} nights)
              </h2>
              <button className="bg-white text-secondary p-2.5 rounded font-medium">Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>}
    </div>
  )
}

export default Hotel
