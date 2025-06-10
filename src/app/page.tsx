"use client";

import Link from 'next/link'
import ExperienceCard from '@/components/ExperienceCard'
import SkillCard from '@/components/SkillCard'
import ContactButtons from '@/components/ContactButtons'
import Carousel from '@/components/Carousel'

const experiences = [
  {
    title: "Modelador BIM",
    company: "Interventorías y Consultorías S.A.S",
    period: "Marzo/2024 – Noviembre/2024",
    description: [
      "Modelado arquitectónico e ingenieril en plataformas BIM, asegurando precisión y coherencia con planos constructivos",
      "Coordinación interdisciplinaria (arquitectura, estructura, instalaciones)",
      "Optimización de procesos constructivos",
      "Actualización de modelos y documentación técnica",
      "Detección y resolución de interferencias (clash detection)"
    ],
    technologies: [
      "Revit Architecture 2024",
      "Revit MEP",
      "Navisworks Manage",
      "BIM 360",
      "Dynamo para automatización",
      "Coordinación BIM",
      "Clash Detection avanzado",
      "Familias paramétricas",
      "Documentación técnica BIM",
      "Estándares ISO 19650"
    ]
  },
  {
    title: "Delineante de Arquitectura e Ingeniería / Modelador BIM",
    company: "Postobón S.A.",
    period: "Junio/2023 – Enero/2024",
    description: [
      "Desarrollo de diseños arquitectónicos y modelos BIM detallados para optimizar la coordinación y eficiencia del proyecto",
      "Documentación técnica y colaboración interdisciplinaria",
      "Aseguramiento de precisión y coherencia en cada fase del proyecto"
    ],
    technologies: [
      "Revit Architecture 2023",
      "AutoCAD 2023",
      "BIM 360",
      "Coordinación de modelos",
      "Familias BIM personalizadas",
      "Visualización 3D",
      "Documentación técnica avanzada",
      "Estándares BIM",
      "Coordinación MEP",
      "Gestión de información BIM"
    ]
  },
  {
    title: "Dibujante Arquitectónico",
    company: "Jardín Botánico de Medellín",
    period: "Febrero/2019 – Junio/2019",
    description: [
      "Desarrollo de planos y diseños arquitectónicos y urbanísticos con enfoque en sostenibilidad",
      "Creación de representaciones gráficas detalladas, asegurando estética y funcionalidad según estándares",
      "Redacción de reportes técnicos para comunicar resultados y propuestas"
    ],
    technologies: [
      "AutoCAD Architecture 2019",
      "SketchUp Pro",
      "Lumion",
      "Dibujo técnico avanzado",
      "Diseño sostenible LEED",
      "Documentación técnica",
      "Renderizado arquitectónico",
      "Diseño paramétrico",
      "Gestión de capas y estilos",
      "Normativas urbanísticas"
    ]
  }
]

const skills = [
  {
    category: "Software de Diseño y Modelado",
    skills: [
      { name: "Revit", level: 92 },
      { name: "AutoCAD", level: 95 },
      { name: "SketchUp", level: 94 },
      { name: "Civil 3D", level: 91 },
      { name: "Navisworks", level: 73 },
      { name: "Inventor", level: 71 }
    ]
  },
  {
    category: "Software de Visualización y Renderizado",
    skills: [
      { name: "Illustrator", level: 95 },
      { name: "Escape", level: 93 },
      { name: "Lumion", level: 74 },
      { name: "V-Ray", level: 72 },
      { name: "Photoshop", level: 71 }
    ]
  },
  {
    category: "Herramientas de Productividad",
    skills: [
      { name: "Office Suite", level: 94 },
      { name: "Documentación Técnica", level: 93 },
      { name: "Gestión de Proyectos", level: 92 },
      { name: "Coordinación BIM", level: 90 }
    ]
  },
  {
    category: "Habilidades Blandas",
    skills: [
      { name: "Trabajo en Equipo Multidisciplinario", level: 95 },
      { name: "Comunicación Técnica", level: 94 },
      { name: "Gestión de Tiempo y Recursos", level: 93 },
      { name: "Resolución de Conflictos", level: 92 },
      { name: "Adaptabilidad a Cambios", level: 91 },
      { name: "Gestión de Riesgos", level: 88 }
    ]
  }
]

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-gray-900 font-helvetica">Portafolio / Santiago Ramirez</h1>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={() => {
                  const menu = document.getElementById('mobile-menu');
                  if (menu) {
                    menu.classList.toggle('hidden');
                  }
                }}
              >
                <span className="sr-only">Abrir menú principal</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
            {/* Desktop menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                <Link href="#sobre-mi" className="text-gray-700 hover:text-gray-900">Sobre Mí</Link>
                <Link href="#experiencia" className="text-gray-700 hover:text-gray-900">Experiencia</Link>
                <Link href="#habilidades" className="text-gray-700 hover:text-gray-900">Habilidades</Link>
                <Link href="#contacto" className="text-gray-700 hover:text-gray-900">Contacto</Link>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        <div className="hidden md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="#sobre-mi"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Sobre Mí
            </Link>
            <Link
              href="#experiencia"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Experiencia
            </Link>
            <Link
              href="#habilidades"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Habilidades
            </Link>
            <Link
              href="#contacto"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Contacto
            </Link>
          </div>
        </div>
      </nav>
      {/* Hero Section with Carousel Background */}
      <div className="relative h-screen overflow-hidden">
        <Carousel />
      </div>

      {/* Main Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 font-helvetica">
              Santiago Ramirez Cardona
            </h2>
            <h3 className="text-2xl md:text-3xl text-gray-600 font-helvetica tracking-wider">
              Delineante de Arquitectura e Ingeniería / Modelador BIM
            </h3>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="sobre-mi" className="py-20" style={{ backgroundColor: 'rgb(237,246,249)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl font-helvetica">
              Sobre Mí
            </h2>
          </div>
          <div className="prose prose-lg mx-auto text-gray-800" style={{ fontSize: '1.25rem', lineHeight: '2rem', fontFamily: 'Helvetica, Arial, sans-serif' }}>
            <p className="mb-6 font-medium">
              Soy delineante y modelador BIM, especializado en la documentación técnica y el desarrollo de modelos 3D para proyectos de arquitectura, ingeniería y construcción. Mi trabajo se enfoca en transformar ideas y diseños en representaciones digitales precisas, organizadas y listas para su ejecución, facilitando la coordinación entre disciplinas y optimizando los procesos constructivos.
            </p>
            <p className="mb-6 font-medium">
              Aquí encontrarás una muestra de mi experiencia colaborando con profesionales del sector AEC, aportando valor desde el modelado, la documentación y el cumplimiento de estándares BIM.
            </p>
            <p className="font-medium">
              Soy reconocido por mi dinamismo y creatividad en la resolución de desafíos, con un firme interés en seguir adquiriendo nuevos conocimientos para fortalecer mi desempeño laboral y mi crecimiento personal. Mi habilidad para trabajar en equipo se ve respaldada por mi capacidad empática y mi excelente disposición para colaborar eficazmente en entornos colaborativos.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experiencia" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl font-helvetica">
              Experiencia Laboral
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Mi trayectoria profesional en el campo de la arquitectura
            </p>
          </div>
          <div className="mt-12 space-y-8">
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} {...experience} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="habilidades" className="py-20" style={{ backgroundColor: 'rgb(237, 246, 249)', color: '#111' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-black sm:text-5xl font-helvetica">
              Habilidades
            </h2>
            <p className="mt-4 text-xl text-gray-700">
              Conocimientos y competencias profesionales
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Primera columna */}
            <div className="space-y-8">
              <SkillCard {...skills[0]} /> {/* Software de Diseño y Modelado */}
              <SkillCard {...skills[1]} /> {/* Software de Visualización */}
            </div>
            {/* Segunda columna */}
            <div className="space-y-8">
              <SkillCard {...skills[2]} /> {/* Herramientas de Productividad */}
              <SkillCard {...skills[3]} /> {/* Habilidades Blandas */}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl font-helvetica">
              Contacto
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              ¿Interesado en trabajar juntos? ¡Hablemos!
            </p>
          </div>
          <ContactButtons />
        </div>
      </section>
    </main>
  )
}
