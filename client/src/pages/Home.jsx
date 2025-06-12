import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Featured from '../components/Featured'
import PropertyList from '../components/PropertyList'
import FeaturedHomes from '../components/FeaturedHomes'
import MailList from '../components/MailList'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <main>
      <Navbar />
      <Header />
      <div className="mt-12.5 flex flex-col items-center gap-7.5">
        <Featured />
        <h1 className="w-5xl text-xl font-bold">Browse properties by type</h1>
        <PropertyList />
        <h1 className="w-5xl text-xl font-bold">Homes guests love</h1>
        <FeaturedHomes />
        <MailList />
        <Footer />
      </div>
    </main>
  )
}

export default Home
