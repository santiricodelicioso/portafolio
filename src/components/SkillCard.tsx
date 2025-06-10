interface SkillCardProps {
  category: string
  skills: {
    name: string
    level: number
  }[]
}

export default function SkillCard({ category, skills }: SkillCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">{category}</h3>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-gray-700">{skill.name}</span>
              <span className="text-sm text-gray-500">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="h-2 rounded-full"
                style={{ width: `${skill.level}%`, backgroundColor: 'rgb(0, 109, 119)' }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 