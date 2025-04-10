import Navegator from "../components/Navegator"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import BackgroundImage from "../../public/imgs/img (15).jpg"
import { Informations } from "./components/Informations"
import PostList from "./components/BlogList"
import { samplePosts } from "../data/blogsdata"

export const HomeBlog = () => {
    
  return (
    <>
        <Navegator />
        <Header 
            Logo={BackgroundImage }
            Text="Cultural Vibes Blogs" 
            Subtext="Nuestra cultura vibra en el desarrollo"
            GradientFrom="from-rose-500"
            GradientTo="to-slate-800" />
            <Informations />
            <PostList postsprops={samplePosts}/>
        <Footer />
    </>
  )
}
