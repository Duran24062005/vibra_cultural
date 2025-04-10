import type React from "react"

import { useState } from "react"
import { Download, X } from "lucide-react"

interface GalleryImage {
  id: string
  src: string
  alt: string
  width: number
  height: number
}

interface ImageGalleryProps {
  images: GalleryImage[]
  columns?: number
  gap?: number
}

export default function ImageGallery({ images, columns = 3, gap = 8 }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

  const handleDownload = (image: GalleryImage, e: React.MouseEvent) => {
    e.stopPropagation()
    const link = document.createElement("a")
    link.href = image.src
    link.download = image.alt || "image"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <>
      <div
        className="grid gap-4"
        style={{
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap: `${gap}px`,
        }}
      >
        {images.map((image) => (
          <div
            key={image.id}
            className="relative group overflow-hidden rounded-lg cursor-pointer"
            onClick={() => setSelectedImage(image)}
          >
            <div className="relative w-full h-full">
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <button
                className="rounded-full"
                onClick={(e) => handleDownload(image, e)}
              >
                <Download className="h-4 w-4" />
                <span className="sr-only">Download</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <img
              src={selectedImage.src || "/placeholder.svg"}
              alt={selectedImage.alt}
              width={selectedImage.width}
              height={selectedImage.height}
              className="max-w-full max-h-full object-contain"
            />
            <button
              className="absolute top-2 right-2 text-white rounded-full bg-black/50 hover:bg-black/70"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </button>
            <button
              className="absolute bottom-2 right-2 rounded-full"
              onClick={(e) => {
                e.stopPropagation()
                handleDownload(selectedImage, e)
              }}
            >
              <Download className="h-4 w-4" />
              <span className="sr-only">Download</span>
            </button>
          </div>
        </div>
      )}
    </>
  )
}
