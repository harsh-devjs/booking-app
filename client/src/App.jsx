import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Hotels from './pages/Hotels'
import Hotel from './pages/Hotel'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/hotels' element={<Hotels />} />
        <Route path='/hotel' element={<Hotel />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
