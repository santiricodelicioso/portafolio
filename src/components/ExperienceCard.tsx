interface ExperienceCardProps {
  title: string
  company: string
  period: string
  description: string[]
  technologies: string[]
}

export default function ExperienceCard({
  title,
  company,
  period,
  description,
  technologies
}: ExperienceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          <p className="font-medium" style={{ color: 'rgb(29, 134, 118)' }}>{company}</p>
        </div>
        <span className="text-sm text-gray-500">{period}</span>
      </div>
      <ul className="mt-4 space-y-2">
        {description.map((item, index) => (
          <li key={index} className="text-gray-600 flex items-start">
            <svg
              className="h-5 w-5 mr-2 mt-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              style={{ color: 'rgb(29, 134, 118)' }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4"
              />
            </svg>
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-4 flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
} 