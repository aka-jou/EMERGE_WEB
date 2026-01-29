interface ProjectBenefitsProps {
  benefits: string[];
}

export default function ProjectBenefits({ benefits }: ProjectBenefitsProps) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
        Impacto y Beneficios para el Cliente
      </h2>
      
      <ul className="space-y-4">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="w-6 h-6 bg-green-800 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-gray-700 leading-relaxed">{benefit}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
