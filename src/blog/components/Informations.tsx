import { BookOpen, Users, PenTool, MessageSquare } from "lucide-react"

export const Informations = () => {
  return (
    <div className="w-full bg-gradient-to-b from-slate-950 to-slate-900 text-orange-50 py-12 px-4 md:px-8 shadow-xl">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-100 mb-8 text-center">Nuestra Comunidad de Blogs</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-orange-950/50 p-6 rounded-lg border border-orange-800 hover:bg-orange-950/70 transition-colors">
            <div className="flex items-center mb-4">
              <BookOpen className="w-8 h-8 text-orange-300 mr-3" />
              <h3 className="text-xl font-semibold text-orange-200">¿Qué encontrarás aquí?</h3>
            </div>
            <p className="text-orange-100/90">
              Nuestra plataforma alberga una colección diversa de blogs sobre viajes, cultura, gastronomía y
              experiencias locales. Cada publicación está cuidadosamente creada para inspirar y compartir conocimientos
              auténticos sobre destinos alrededor del mundo.
            </p>
          </div>

          <div className="bg-orange-950/50 p-6 rounded-lg border border-orange-800 hover:bg-orange-950/70 transition-colors">
            <div className="flex items-center mb-4">
              <Users className="w-8 h-8 text-orange-300 mr-3" />
              <h3 className="text-xl font-semibold text-orange-200">¿Quiénes publican?</h3>
            </div>
            <p className="text-orange-100/90">
              Nuestros blogs son creados por viajeros apasionados, expertos locales y colaboradores invitados que
              comparten sus experiencias únicas. Cada autor aporta su perspectiva personal y conocimientos
              especializados sobre los destinos que han explorado.
            </p>
          </div>

          <div className="bg-orange-950/50 p-6 rounded-lg border border-orange-800 hover:bg-orange-950/70 transition-colors">
            <div className="flex items-center mb-4">
              <PenTool className="w-8 h-8 text-orange-300 mr-3" />
              <h3 className="text-xl font-semibold text-orange-200">¿Cómo participar?</h3>
            </div>
            <p className="text-orange-100/90">
              ¿Tienes una historia que contar? Puedes unirte a nuestra comunidad de colaboradores registrándote en la
              plataforma. Después de crear tu perfil, podrás enviar tus propuestas de contenido para revisión. Buscamos
              voces auténticas con historias originales y perspectivas únicas.
            </p>
          </div>

          <div className="bg-orange-950/50 p-6 rounded-lg border border-orange-800 hover:bg-orange-950/70 transition-colors">
            <div className="flex items-center mb-4">
              <MessageSquare className="w-8 h-8 text-orange-300 mr-3" />
              <h3 className="text-xl font-semibold text-orange-200">¿Para qué sirven?</h3>
            </div>
            <p className="text-orange-100/90">
              Nuestros blogs tienen como objetivo inspirar, informar y conectar a viajeros de todo el mundo. Compartimos
              consejos prácticos, recomendaciones locales y relatos personales que ayudan a otros a planificar sus
              propias aventuras y descubrir destinos menos conocidos pero igualmente fascinantes.
            </p>
          </div>
        </div>

        <div className="bg-orange-900/60 p-6 rounded-lg border border-orange-700 text-center">
          <h3 className="text-xl font-semibold text-orange-200 mb-4">¿Listo para compartir tu historia?</h3>
          <p className="text-orange-100/90 mb-6">
            Todos pueden participar: viajeros, fotógrafos, escritores y entusiastas de la cultura. Lo importante es
            tener pasión por compartir experiencias auténticas.
          </p>
          <button className="bg-orange-700 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-full transition-colors shadow-lg">
            Únete como colaborador
          </button>
        </div>
      </div>
    </div>
  )
}
