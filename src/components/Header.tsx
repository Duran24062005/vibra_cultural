// Header, this is a functional
// component that returns a image of background and
// with overlay text.
// import BackgroundImage from "../../public/dbb125a9-ae2b-43bd-90e4-b111721c6c42.jpeg"

export const Header = () => {
  return (
    <header className="relative h-96 w-full">
      <div className="absolute inset-0 z-0">
        <img
          src="https://videolab.tec.mx/sites/g/files/vgjovo1291/files/inline-images/Una-mirada-%285%29.jpg"
          // {BackgroundImage || "/placeholder.svg"}
          alt="Background header image"
          className="object-covers opacity-88 w-full h-full"
          // "https://videolab.tec.mx/sites/g/files/vgjovo1291/files/inline-images/Una-mirada-%285%29.jpg"
        />
      </div>
      <div className="relative z-10 flex h-full items-center justify-center ">
        <div className="text-center px-4 ">
          <h1 className="text-4xl font-bold bg-gradient-to-l from-blue-500 to-rose-500 text-transparent bg-clip-text drop-shadow-lg md:text-5xl lg:text-6xl italic ">MakeDev 2.0</h1>
          <p className="mt-4 text-xl drop-shadow-md md:text-2xl bg-gradient-to-l from-blue-500 to-rose-500 text-transparent bg-clip-text">Building Ideas, Powering Innovation</p>
        </div>
      </div>
    </header>


  )
}

