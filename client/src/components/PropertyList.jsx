import React from 'react'
import useFetch from '../hooks/useFetch'

const PropertyList = () => {

  const baseUrl = import.meta.env.VITE_API_BASE_URL
  const { data, error, loading } = useFetch(`${baseUrl}/hotels/countbytype`)

  const images = [
    "https://r-xx.bstatic.com/xdata/images/hotel/263x210/595550862.jpeg?k=3514aa4abb76a6d19df104cb307b78b841ac0676967f24f4b860d289d55d3964&o=",
    "https://r-xx.bstatic.com/xdata/images/hotel/263x210/595548591.jpeg?k=01741bc3aef1a5233dd33794dda397083092c0215b153915f27ea489468e57a2&o=",
    "https://r-xx.bstatic.com/xdata/images/hotel/263x210/595549239.jpeg?k=ad5273675c516cc1efc6cba2039877297b7ad2b5b3f54002c55ea6ebfb8bf949&o=",
    "https://r-xx.bstatic.com/xdata/images/hotel/263x210/595550000.jpeg?k=71eeb3e0996d7f734e57a6fa426c718749a36df768ca5d2fb1dc65fcd7483c1d&o="
  ]


  return (
    <section className='w-full max-w-5xl flex justify-between gap-5 z-1'>
      {loading ? "Loading please wait..." :
        <>
          {data && images.map((img, i) => (
            <div key={i} className="rounded-md overflow-hidden">
              <img src={img} alt="" className="" />
              {/* list title */}
              <div className="">
                <h1 className="font-medium mt-2 capitalize">{data[i]?.type}</h1>
                <h2 className="text-md">{data[i]?.count} {data[i]?.type}</h2>
              </div>
            </div>))
          }
        </>
      }
    </section>
  )
}

export default PropertyList
