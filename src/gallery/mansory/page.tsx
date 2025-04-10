import MasonryGallery from "../components/masonry-gallery"

// Sample gallery images with different dimensions
const galleryImages = [
  // {
  //   id: "1",
  //   src: "/placeholder.svg?height=400&width=300",
  //   alt: "Gallery image 1",
  //   width: 300,
  //   height: 400,
  // },
  // {
  //   id: "2",
  //   src: "/placeholder.svg?height=300&width=500",
  //   alt: "Gallery image 2",
  //   width: 500,
  //   height: 300,
  // },
  // {
  //   id: "3",
  //   src: "../../public/imgs/img (15).jpg",
  //   alt: "Gallery image 3",
  //   width: 400,
  //   height: 600,
  // },
  // {
  //   id: "4",
  //   src: "/placeholder.svg?height=350&width=350",
  //   alt: "Gallery image 4",
  //   width: 350,
  //   height: 350,
  // },
  // {
  //   id: "5",
  //   src: "/placeholder.svg?height=500&width=300",
  //   alt: "Gallery image 5",
  //   width: 300,
  //   height: 500,
  // },
  // {
  //   id: "6",
  //   src: "/placeholder.svg?height=250&width=400",
  //   alt: "Gallery image 6",
  //   width: 400,
  //   height: 250,
  // },
  // {
  //   id: "7",
  //   src: "/placeholder.svg?height=450&width=450",
  //   alt: "Gallery image 7",
  //   width: 450,
  //   height: 450,
  // },
  // {
  //   id: "8",
  //   src: "/placeholder.svg?height=300&width=600",
  //   alt: "Gallery image 8",
  //   width: 600,
  //   height: 300,
  // },
  // {
  //   id: "9",
  //   src: "/placeholder.svg?height=550&width=350",
  //   alt: "Gallery image 9",
  //   width: 350,
  //   height: 550,
  // },
  // {
  //   id: "10",
  //   src: "/placeholder.svg?height=320&width=480",
  //   alt: "Gallery image 10",
  //   width: 480,
  //   height: 320,
  // },
  // {
  //   id: "11",
  //   src: "/placeholder.svg?height=420&width=280",
  //   alt: "Gallery image 11",
  //   width: 280,
  //   height: 420,
  // },
  // {
  //   id: "12",
  //   src: "/placeholder.svg?height=380&width=380",
  //   alt: "Gallery image 12",
  //   width: 380,
  //   height: 380,
  // },
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



export default function MasonryPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Masonry Gallery</h1>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">True Pinterest-Style Masonry Layout</h2>
        <p className="text-muted-foreground mb-6">
          This gallery uses a true masonry layout that adapts to image dimensions. Click on any image to view it in
          fullscreen mode. Hover to see the download option.
        </p>

        <MasonryGallery images={galleryImages} columnWidth={280} gap={16} />
      </div>
    </div>
  )
}
