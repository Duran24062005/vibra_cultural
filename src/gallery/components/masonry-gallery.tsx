"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Download, X } from "lucide-react"

interface GalleryImage {
  id: string
  src: string
  alt: string
  width: number
  height: number
}

interface MasonryGalleryProps {
  images: GalleryImage[]
  columnWidth?: number
  gap?: number
}

export default function MasonryGallery({ images, columnWidth = 300, gap = 16 }: MasonryGalleryProps) {
  const [columns, setColumns] = useState<GalleryImage[][]>([])
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleDownload = (image: GalleryImage, e: React.MouseEvent) => {
    e.stopPropagation()
    const link = document.createElement("a")
    link.href = image.src
    link.download = image.alt || "image"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  useEffect(() => {
    const calculateLayout = () => {
      if (!containerRef.current) return

      const containerWidth = containerRef.current.clientWidth
      const numColumns = Math.max(1, Math.floor(containerWidth / (columnWidth + gap)))

      // Initialize columns
      const cols: GalleryImage[][] = Array.from({ length: numColumns }, () => [])

      // Distribute images among columns (shortest column first)
      images.forEach((image) => {
        // Find the shortest column
        const shortestColIndex = cols.reduce((shortestIndex, column, currentIndex, columns) => {
          const shortestHeight = columns[shortestIndex].reduce(
            (height, img) => height + (img.height / img.width) * columnWidth,
            0,
          )

          const currentHeight = column.reduce((height, img) => height + (img.height / img.width) * columnWidth, 0)

          return currentHeight < shortestHeight ? currentIndex : shortestIndex
        }, 0)

        cols[shortestColIndex].push(image)
      })

      setColumns(cols)
    }

    calculateLayout()

    // Recalculate on window resize
    window.addEventListener("resize", calculateLayout)
    return () => window.removeEventListener("resize", calculateLayout)
  }, [images, columnWidth, gap])

  return (
    <>
      <div ref={containerRef} className="w-full">
        <div className="flex" style={{ gap: `${gap}px` }}>
          {columns.map((column, colIndex) => (
            <div key={colIndex} className="flex flex-col" style={{ gap: `${gap}px`, width: columnWidth }}>
              {column.map((image) => (
                <div
                  key={image.id}
                  className="relative group overflow-hidden rounded-lg cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="relative w-full">
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
          ))}
        </div>
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
