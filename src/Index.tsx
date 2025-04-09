import { Header } from './components/Header'
import Navegator from './components/Navegator'
import AboutHome from './components/AboutHome'
// import PostList from './components/IndexBlog'
import { Footer } from './components/Footer'
// import posts from "./data/posts"
import log from '../public/imgs/bg-antequera.png'

function Index() {
  // const logo = 'https://videolab.tec.mx/sites/g/files/vgjovo1291/files/inline-images/Una-mirada-%285%29.jpg'
//   const logo2 = "https://aprendergratis.es/wp-content/uploads/2021/12/Curso-para-disenar-fabricar-y-programar-un-robot.jpg"

  return (
    <>
        <Navegator />
        <Header 
            Logo={log} 
            Text='Cultural Vibes 2.0' 
            Subtext='Hidden treasures of your town'/>
        <AboutHome />
        {/* <PostList postsprops={posts}/> */}
        <Footer />
    </>
  )
}

export default Index