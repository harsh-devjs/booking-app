
const MailList = () => {
  return (
    <section className='bg-primary text-white w-full mt-12.5 flex flex-col items-center gap-5 p-12.5'>
      <h1 className="font-bold text-2xl">Save time, save money!</h1>
      <span className="text-gray-300">Sign up and we'll send the best details to you </span>
      {/* input container */}
      <div className="flex gap-2">
        <input type="text" placeholder="Your Email" className="w-[300px] rounded bg-white text-gray-500 outline-none p-2" />
        <button className="p-2 bg-secondary rounded cursor-pointer">Subscribe</button>
      </div>
    </section>
  )
}

export default MailList
