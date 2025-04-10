import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import Navegator from "../components/Navegator"
import BackgroundImage from "../../public/imgs/img (9).jpg"
import AboutHome from "../components/AboutHome"

export const HomeAbout = () => {
  return (
    <>
        <Navegator />
        <Header 
            Logo={BackgroundImage }
            Text="Cultural Vibes About"
            Subtext="Lee está historia y vive la experiencia"
            GradientFrom="from-amber-300" 
            GradientTo="to-orange-50" 
            />
        <AboutHome btnIf={false} />
        <Footer />
    </>
  )
}
