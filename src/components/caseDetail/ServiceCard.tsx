interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color?: 'green' | 'emerald';
}

export default function ServiceCard({ 
  icon, 
  title, 
  description, 
  color = 'green' 
}: ServiceCardProps) {
  const colorClasses = {
    green: 'bg-green-800',
    emerald: 'bg-emerald-700'
  };

  return (
    <div className="border-2 border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start gap-4">
        <div className={`${colorClasses[color]} text-white p-3 rounded-lg flex-shrink-0`}>
          {icon}
        </div>
        <div>
          <h3 className="font-bold text-gray-800 mb-2">
            {title}
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
