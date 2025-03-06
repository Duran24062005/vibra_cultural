import Navegator from "../components/Navegator"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import BackgroundImage from "../../public/dbb125a9-ae2b-43bd-90e4-b111721c6c42.jpeg"

export const HomeBlog = () => {
    
  return (
    <>
        <Navegator />
        <Header 
            Logo={BackgroundImage }
            Text="MakeDev 2.0" 
            Subtext="Building Ideas, Powering Innovation"
            GradientFrom="from-orange-300"
            GradientTo="to-rose-500" />
        <Footer />
    </>
  )
}
