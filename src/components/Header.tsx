// Header, this is a functional
// component that returns a image of background and
// with overlay text.
// import BackgroundImage from "../../public/dbb125a9-ae2b-43bd-90e4-b111721c6c42.jpeg"

interface HeaderProps {
  Logo: string;
  Text: string;
  Subtext: string;
  GradientFrom?: string;
  GradientTo?: string;
}

export const Header = ({
  Logo,
  Text,
  Subtext,
  GradientFrom = "from-blue-500",
  GradientTo = "to-rose-500"
}: HeaderProps) => {
  return (
    <header className="relative h-96 w-full">
      <div className="absolute inset-0 z-0">
        <img
          src={Logo}
          alt="Background header image"
          className="object-cover opacity-80 w-full h-full"
        />
      </div>
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center px-4">
          <h1
            className={`text-4xl font-bold text-transparent bg-clip-text drop-shadow-lg md:text-5xl lg:text-6xl italic bg-gradient-to-l ${GradientFrom} ${GradientTo}`}
          >
            {Text}
          </h1>
          <p
            className={`mt-4 text-xl text-transparent bg-clip-text drop-shadow-md md:text-2xl bg-gradient-to-l ${GradientFrom} ${GradientTo}`}
          >
            {Subtext}
          </p>
        </div>
      </div>
    </header>
  )
}

// For dynamic gradient classes to work with Tailwind, add this to your tailwind.config.js:



