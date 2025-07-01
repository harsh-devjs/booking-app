'use client'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { format } from 'date-fns'
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import SearchItem from '../components/SearchItem'
import useFetch from '../hooks/useFetch'

const Hotels = () => {

  const location = useLocation()
  const [destination, setDestination] = useState(location.state.destination)
  const [dates, setDates] = useState(location.state.dates)
  const [openDate, setOpenDate] = useState(false)
  const [options, setOptions] = useState(location.state.options)
  const [min, setMin] = useState(undefined)
  const [max, setMax] = useState(undefined)

  const baseUrl = import.meta.env.VITE_API_BASE_URL
  const { data, loading, error, reFetch } = useFetch(`${baseUrl}/hotels?city=${destination}&min=${min || 0}&max=${max || 999999}`)

  const handleOption = (name, operation) => {
    setOptions(prev => {
      return {
        ...prev, [name]: operation === 'i' ? options[name] + 1 : options[name] - 1
      }
    })
  }

  const handleClick = () => {
    reFetch( )
  }

  return (
    <main>
      <Navbar />
      <Header type='list' />
      {/* hotels container */}
      <div className="flex justify-center mt-5">
        {/* hotels wrapper */}
        <div className="w-full max-w-5xl flex gap-5">

          {/* search inputs */}
          <div className="bg-accent flex-1 p-2.5 rounded-xl sticky top-2.5 h-max">
            <h1 className="text-xl font-semibold text-gray-800 mb-2.5">Search</h1>

            {/* search item */}
            <div className="flex flex-col gap-1 mb-2.5">
              <label htmlFor="" className='text-xs'>Destination</label>
              <input className='p-2.5 outline-none bg-white' placeholder={destination} type="text" />
            </div>

            {/* search item */}
            <div className="flex flex-col gap-1 mb-2.5">
              <label htmlFor="" className='text-xs'>Check-in Date</label>
              <span
                onClick={() => setOpenDate(prev => !prev)}
                className="text-gray-800 p-2.5 bg-white flex items-center cursor-pointer">
                {`${format(dates[0].startDate, 'dd/MM/yyyy')} to ${format(dates[0].endDate, 'dd/MM/yyyy')}`}
              </span>
              {openDate && <DateRange
                onChange={item => setDate([item.selection])}
                minDate={new Date()}
                ranges={dates}
              />}
            </div>

            {/* search item */}
            <div className="flex flex-col gap-1 mb-2.5">
              <label htmlFor='' className='text-xs'>Options</label>
              <div className="p-2 flex flex-col gap-2">

                {/* option 1 */}
                <div className="flex justify-between items-center">
                  <span className="text-sm">Min Price <small>per night</small></span>
                  <input type="number" onChange={e => setMin(e.target.value)} name="" id="" className='p-2.5 outline-none bg-white w-24' />
                </div>
                {/* option 2 */}
                <div className="flex justify-between items-center">
                  <span className="text-sm">Max Price <small>per night</small></span>
                  <input type="number" onChange={e => setMax(e.target.value)} name="" id="" className='p-2.5 outline-none bg-white w-24' />
                </div>
                {/* option 3 */}
                <div className="flex justify-between items-center">
                  <span className="text-sm">Adult</span>
                  <input type="number" min={1} placeholder={options.adult} className='p-2.5 outline-none bg-white w-24' />
                </div>
                {/* option 4 */}
                <div className="flex justify-between items-center">
                  <span className="text-sm">Children</span>
                  <input type="number" min={0} placeholder={options.children} className='p-2.5 outline-none bg-white w-24' />
                </div>
                {/* option 5 */}
                <div className="flex justify-between items-center">
                  <span className="text-sm">Room</span>
                  <input type="number" min={1} placeholder={options.room} className='p-2.5 outline-none bg-white w-24' />
                </div>
              </div>
              <button
                onClick={handleClick}
                className="p-2.5 bg-secondary text-white rounded font-medium">Search</button>
            </div>
          </div>

          {/* search results */}
          <div className="flex-3">
            {loading ? 'Loading please wait...' : <>
              {data?.map(item => (
                <SearchItem key={item._id} item={item} />
              ))}
            </>}
          </div>
        </div>
      </div>
    </main>
  )
}
export default Hotels
