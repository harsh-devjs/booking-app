import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Hotels from './pages/Hotels'
import Hotel from './pages/Hotel'
import Login from './pages/Login'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/hotels' element={<Hotels />} />
        <Route path='/hotels/:id' element={<Hotel />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
