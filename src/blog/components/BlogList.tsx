import { useState } from "react"
import { Calendar, User, ChevronRight, BookOpen } from "lucide-react"

interface Post {
  id: string
  image: string
  title: string
  text: string
  creador: string
  created_at: string
}

interface BlogListProps {
  postsprops: Post[]
}

export default function BlogList({ postsprops }: BlogListProps) {
  const [showAll, setShowAll] = useState(false)
  const postsToShow = showAll ? postsprops : postsprops.slice(0, 4)

  return (
    <div className="w-full bg-gradient-to-b from-slate-950 to-slate-900 text-orange-50 py-12 px-4 md:px-8 rounded-lg shadow-xl">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-100 mb-4">Nuestros Blogs</h2>
          <p className="text-orange-200/80 max-w-2xl mx-auto">
            Explora nuestras historias y experiencias compartidas por viajeros apasionados de todo el mundo. Cada
            publicación ofrece una perspectiva única sobre destinos fascinantes.
          </p>
        </div>

        {/* Información sobre el blog */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 bg-slate-900/60 p-6 rounded-lg border border-slate-700">
          <div className="flex items-start space-x-3">
            <BookOpen className="w-6 h-6 text-orange-300 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-orange-200">Sobre nuestro blog</h3>
              <p className="text-orange-100/90 text-sm">
                Compartimos experiencias auténticas de viajeros de todo el mundo, con historias que inspiran y educan.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <User className="w-6 h-6 text-orange-300 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-orange-200">Nuestros autores</h3>
              <p className="text-orange-100/90 text-sm">
                Viajeros apasionados, fotógrafos y escritores que comparten sus experiencias únicas y perspectivas.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Calendar className="w-6 h-6 text-orange-300 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-orange-200">Publicaciones regulares</h3>
              <p className="text-orange-100/90 text-sm">
                Nuevas historias cada semana para mantenerte inspirado y conectado con destinos de todo el mundo.
              </p>
            </div>
          </div>
        </div>

        {/* Lista de posts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {postsToShow.map((post) => (
            <div
              key={post.id}
              className="bg-slate-950/30 rounded-lg overflow-hidden border border-slate-800 hover:border-slate-700 transition-all hover:shadow-lg hover:shadow-orange-900/30"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-950 to-transparent opacity-60"></div>
              </div>

              <div className="p-5">
                <h3 className="text-xl font-semibold text-orange-200 mb-2 line-clamp-2">{post.title}</h3>
                <p className="text-orange-100/80 mb-4 text-sm line-clamp-3">{post.text}</p>

                <div className="flex items-center text-orange-300/80 text-xs mb-4">
                  <User className="w-4 h-4 mr-1" />
                  <span>{post.creador}</span>
                  <span className="mx-2">•</span>
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{post.created_at}</span>
                </div>

                <button className="flex items-center text-orange-300 hover:text-orange-200 text-sm font-medium transition-colors group">
                  Leer más
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Botón Ver más/menos */}
        {postsprops.length > 4 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-3 bg-orange-700 hover:bg-orange-600 text-white font-medium rounded-full transition-colors shadow-lg"
            >
              {showAll ? "Ver menos publicaciones" : "Ver más publicaciones"}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
