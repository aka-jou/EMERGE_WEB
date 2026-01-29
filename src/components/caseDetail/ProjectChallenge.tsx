interface ProjectChallengeProps {
  challenges: string[];
}

export default function ProjectChallenge({ challenges }: ProjectChallengeProps) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
        Desafío del Proyecto
      </h2>
      
      <ul className="space-y-3">
        {challenges.map((challenge, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 mt-2" />
            <span className="text-gray-700 leading-relaxed">{challenge}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
