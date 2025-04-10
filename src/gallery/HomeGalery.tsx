// import { Header } from "../components/Header"
import Navegator from "../components/Navegator"
import ImageGallery from "./components/imagen-gallery"
import MasonryPage from "./mansory/page"
// import lg from '../../public/imgs/img (15).jpg'

// Sample gallery images with different dimensions
const galleryImages = [
  {
    id: "1",
    src: "../../public/imgs/img (1).jpg",
    alt: "Gallery image 1",
    width: 600,
    height: 200,
  },
  {
    id: "2",
    src: "../../public/imgs/img (5).jpg",
    alt: "Gallery image 2",
    width: 500,
    height: 300,
  },
  {
    id: "3",
    src: "../../public/imgs/img (10).jpg",
    alt: "Gallery image 3",
    width: 400,
    height: 600,
  },
  {
    id: "4",
    src: "../../public/imgs/img (12).jpg",
    alt: "Gallery image 4",
    width: 350,
    height: 350,
  },
  {
    id: "5",
    src: "../../public/imgs/img (18).jpg",
    alt: "Gallery image 5",
    width: 300,
    height: 500,
  },
  {
    id: "6",
    src: "../../public/imgs/img (12).jpg",
    alt: "Gallery image 6",
    width: 400,
    height: 250,
  },
  {
    id: "7",
    src: "../../public/imgs/img (14).jpg",
    alt: "Gallery image 7",
    width: 450,
    height: 450,
  },
  {
    id: "8",
    src: "../../public/imgs/img (11).jpg",
    alt: "Gallery image 8",
    width: 600,
    height: 300,
  },
  {
    id: "9",
    src: "../../public/imgs/img (15).jpg",
    alt: "Gallery image 9",
    width: 350,
    height: 550,
  },
]

export default function HomeGallery() {
  return (
    <>
      <Navegator />
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-8">Image Gallery</h1>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Responsive Pinterest-Style Gallery</h2>
          <p className="text-muted-foreground mb-6">
            Click on any image to view it in fullscreen mode. Hover to see the download option.
          </p>

          {/* Desktop: 3 columns */}
          <div className="hidden md:block">
            <ImageGallery images={galleryImages} columns={3} gap={12} />
          </div>

          {/* Tablet: 2 columns */}
          <div className="hidden sm:block md:hidden">
            <ImageGallery images={galleryImages} columns={2} gap={10} />
          </div>

          {/* Mobile: 1 column */}
          <div className="sm:hidden">
            <ImageGallery images={galleryImages} columns={1} gap={8} />
          </div>
          <MasonryPage />
        </div>
      </div>
    </>
  )
}
