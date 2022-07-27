import { Routes , Route} from 'react-router-dom'
import NavBar from './components/Nav'

import Home from './pages/Home'
import Wallet from './pages/Wallet'
import Mint from './pages/Mint'

function App() {

 return (
  <>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Wallet" element={<Wallet />} />
      <Route path="/Mint" element={<Mint />} />
    </Routes>
  </>

  )
}

export default App
