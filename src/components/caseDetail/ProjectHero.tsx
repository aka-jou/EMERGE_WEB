interface ProjectHeroProps {
  title: string;
  description: string;
  publishDate: string;
  author: string;
  image: string;
}

export default function ProjectHero({
  title,
  description,
  publishDate,
  author,
  image,
}: ProjectHeroProps) {
  return (
    <div className="mb-8">
      <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
        {title}
      </h1>

      <p className="text-gray-600 text-lg mb-4">
        {description}
      </p>

      <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
        <span className="flex items-center gap-1">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          Publicado el {publishDate}
        </span>

        <span className="flex items-center gap-1">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          {author}
        </span>
      </div>

      {/* Imagen */}
      <div className="relative w-full h-[260px] md:h-[320px] rounded-lg overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
