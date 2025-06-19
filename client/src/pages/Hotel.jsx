'use client'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import MailList from '../components/MailList'
import Footer from '../components/Footer'
import { FaLightbulb } from 'react-icons/fa'
import { useState } from 'react'
import { FaCircleArrowLeft, FaCircleArrowRight, FaCircleXmark } from 'react-icons/fa6'

const Hotel = () => {
  const [slideIndex, setSlideIndex] = useState(0)
  const [open, setOpen] = useState(false)

  const photos = [
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max500/543080034.jpg?k=220ebae747b396b126ad45d88f95558e185450540a60926d86067d26613a85d6&o='
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max500/543085557.jpg?k=0f32c35f369beafb6837ebbca1f174d59ff21aa57729e7cee6bc7e93b5587b2c&o='
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max300/178665141.jpg?k=58a46014efa8ae1387a41e6c751310def9899fddd0142ac07829e10c4da8282f&o='
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max300/178798364.jpg?k=59034ae91ce7051e9c16538efda56d981dfcc1c191165081dde2f7ee5b85d439&o='
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max300/47657393.jpg?k=f8554eb986666757cc8666151fe0f6c3a4818d7c543eee16aad92889901a575d&o='
    }
  ]

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
      <div className="flex flex-col items-center pt-5 gap-7.5">

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
          <h1 className="text-2xl">Grand Hotel</h1>
          {/* hotel address */}
          <div className="flex items-center gap-2.5">
            <FaLightbulb size={16} />
            <span>Elton St 25 New York</span>
          </div>
          {/* hotel distance */}
          <span className="text-secondary font-medium">Excellent location - 500m from center</span>
          {/* hotel price highlight */}
          <span className="text-green-600 font-medium">Book a stay over $114 at this property and get a free airport taxi.</span>
          {/* hotel images */}
          <div className="flex flex-wrap gap-.5">
            {photos.map((photo, i) => (
              <div key={photo.src} className="w-1/3">
                <img onClick={() => handleOpen(i)} className='w-full object-cover' src={photo.src} alt='' />
              </div>
            ))}
          </div>
          {/* hotel details */}
          <div className="flex justify-between gap-5 mt-5">
            {/* hotel detail texts */}
            <div className="flex-3">
              <h1 className="text-2xl font-semibold">Stay in the heart of Krakow</h1>
              <p className="text-sm mt-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt consequatur aspernatur molestiae nemo, voluptas officia nobis necessitatibus molestias, sapiente earum minus? Harum cupiditate dolore placeat temporibus iure dolores minus quo, sed tempora eligendi porro libero architecto animi eum fuga amet dolorum quisquam officia ipsum provident, pariatur nemo eaque cum deleniti. Facere debitis deleniti voluptas! Ipsa sapiente velit vitae eveniet perferendis. Blanditiis nisi sed neque similique quae unde, quidem veniam quisquam, culpa facere dolorum. Animi eveniet porro ex ut suscipit beatae inventore tempora! Voluptatem quaerat rem quibusdam possimus debitis modi enim.</p>
            </div>
            {/* hotel detail price */}
            <div className="bg-secondary rounded-xl flex-1 text-white flex flex-col gap-5 p-5">
              <h1 className="text-xl font-semibold">Perfect for 9 night stay!</h1>
              <span className="text-sm text-gray-200">Located in the real heart of Krakow, this property has an excellent location score of 9.5!</span>
              <h2 className="">
                <b>$945</b> (9 nights)
              </h2>
              <button className="bg-white text-secondary p-2.5 rounded font-medium">Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  )
}

export default Hotel
