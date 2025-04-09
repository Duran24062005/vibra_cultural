import Logo from '../../public/cv/cv_bg_less_font-white.png';	
import { Facebook, Github, Youtube, Mail, Phone, MapPin } from "lucide-react"

export const Footer = () => {
  return (
    <footer className="w-full border-t bg-gradient-to-r from-slate-900 via-slate-700 to-slate-800 pt-1 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Logo - Left Side */}
          <div className="flex items-center">
            <a href="/" aria-label="Go to homepage">
              <img src={Logo} alt="Company Logo" className="h-30 w-40 lg:w-70 lg:h-40" />
            </a>
          </div>

          {/* Social Media Icons - Middle */}
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://www.facebook.com/profile.php?id=61573188309392"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-slate-800/30 p-3 hover:bg-blue-600 transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://www.youtube.com/@MakeDev_2.0"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-slate-800/30 p-3 hover:bg-red-600 transition-colors"
              aria-label="YouTube"
            >
              <Youtube size={24} />
            </a>
            <a
              href="https://github.com/Alexi051"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-slate-800/30 p-3 hover:bg-gray-800 transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
          </div>

          {/* Contact Information - Right Side */}
          <div className="space-y-4 md:text-right">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 md:justify-end">
                <Mail size={16} className="flex-shrink-0 md:order-2" />
                <a href="mailto:info@example.com" className="hover:underline">
                  info@example.com
                </a>
              </li>
              <li className="flex items-center gap-2 md:justify-end">
                <Phone size={16} className="flex-shrink-0 md:order-2" />
                <a href="tel:+1234567890" className="hover:underline">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-start gap-2 md:justify-end md:pb-4">
                <MapPin size={16} className="flex-shrink-0 mt-1 md:order-2" />
                <address className="not-italic">
                  123 Business Street
                  <br />
                  City, State 12345
                </address>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-4 border-t border-slate-400/30 pt-4 text-center text-sm text-slate-200">
          Cultural Vibes © {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </footer>
  )
}

