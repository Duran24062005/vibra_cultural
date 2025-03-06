import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Index from './Index.tsx'
import { HomeBlog } from './blog/HomeBlog.tsx'
import HomeGalery from './gallery/HomeGalery.tsx'

function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/blog" element={<HomeBlog />} />
        <Route path="/galery" element={<HomeGalery />} />
        <Route path="/videos" element={<HomeBlog />} />
        <Route path="/about" element={<HomeBlog />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
