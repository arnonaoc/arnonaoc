import { Routes , Route} from 'react-router-dom'
import NavBar from './components/Nav'

import Home from './pages/Home'
import ContractInfo from './pages/ContractInfo'
import Booking from './pages/Booking'

function App() {

 return (
  <>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ContractInfo" element={<ContractInfo />} />
      <Route path="/Booking" element={<Booking />} />
    </Routes>
  </>

  )
}

export default App
