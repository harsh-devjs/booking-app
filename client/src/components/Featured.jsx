import React from 'react'
import useFetch from '../hooks/useFetch'

const Featured = () => {

  const baseUrl = import.meta.env.VITE_API_BASE_URL
  const { data, error, loading } = useFetch(`${baseUrl}/hotels/countbycities?cities=Berlin,Agra,Kaithal`)

  return (
    <section className='w-full max-w-5xl flex justify-between gap-5 z-1'>
      {loading ? 'Loading please wait...' :
        <>
          {/* featured item */}
          <div className="relative rounded-md overflow-hidden h-64">
            <img src="https://cf.bstatic.com/xdata/images/city/600x600/684765.jpg?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o=" alt="" className="w-full object-cover brightness-75" />
            {/* featured title */}
            <div className="absolute text-white bottom-5 left-5">
              <h1 className="text-2xl font-bold">Berlin</h1>
              <h2 className="text-lg">{data[0]} properties</h2>
            </div>
          </div>
          {/* featured item */}
          <div className="relative rounded-md overflow-hidden h-64">
            <img src="https://cf.bstatic.com/xdata/images/city/600x600/684534.jpg?k=d1fe86c22f2433f4e2dda14ddcbe80feb024b0fb30305e5684a1241fba5d4cff&o=" alt="" className="w-full object-cover brightness-75" />
            {/* featured title */}
            <div className="absolute text-white bottom-5 left-5">
              <h1 className="text-2xl font-bold">Agra</h1>
              <h2 className="text-lg">{data[1]} properties</h2>
            </div>
          </div>
          {/* featured item */}
          <div className="relative rounded-md overflow-hidden h-64">
            <img src="https://cf.bstatic.com/xdata/images/city/600x600/971346.jpg?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o=" alt="" className="w-full object-cover brightness-75" />
            {/* featured title */}
            <div className="absolute text-white bottom-5 left-5">
              <h1 className="text-2xl font-bold">Kaithal</h1>
              <h2 className="text-lg">{data[2]} properties</h2>
            </div>
          </div>
        </>
      }
    </section>
  )
}

export default Featured
