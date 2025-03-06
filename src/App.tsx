import './App.css'
import { Header } from './components/Header'
import Navegator from './components/Navegator'
import { Footer } from './components/Footer'

function App() {
  const logo = 'https://videolab.tec.mx/sites/g/files/vgjovo1291/files/inline-images/Una-mirada-%285%29.jpg'

  return (
    <>
      <Navegator />
      <Header Logo={logo} Text='MakeDev 2.0' Subtext='Building Ideas, Powering Innovation '/>
      <Footer />
    </>
  )
}

export default App
