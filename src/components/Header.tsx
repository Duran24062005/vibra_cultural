// Header, this is a functional
// component that returns a image of background anf
// with overlay text.
import BackgroundImage from "../../public/dbb125a9-ae2b-43bd-90e4-b111721c6c42.jpeg"

export const Header = () => {
  return (
    <header className="relative h-96 w-full">
      <div className="absolute inset-0 z-0">
        <img
          src={BackgroundImage || "/placeholder.svg"}
          alt="Background header image"
          className="object-cover opacity-80 w-full h-full"
        />
      </div>
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-4xl font-bold text-white drop-shadow-lg md:text-5xl lg:text-6xl italic bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block bg-clip-text">MakeDev 2.0</h1>
          <p className="mt-4 text-xl text-white drop-shadow-md md:text-2xl">Building Ideas, Powering Innovation.</p>
        </div>
      </div>
    </header>
  )
}

