interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string[];
}

export default function Experience({
  company,
  role,
  duration,
  description,
}: Experience) {
  return (
    <div className="relative pl-0 md:pl-20 mb-12">
      <div className="absolute left-6 top-6 w-4 h-4 bg-slate-500 rounded-full border-4 border-gray-900 hidden md:block" />
      <div className="max-w-5xl bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
          <div>
            <h3 className="text-2xl font-bold text-white mb-1">{role}</h3>
            <p className="text-xl text-slate-400">{company}</p>
          </div>
          <span className="text-gray-400 text-sm md:text-base mt-2 md:mt-0">
            {duration}
          </span>
        </div>

        <ul className="space-y-2 mb-4">
          {description.map((item, i) => (
            <li key={i} className="text-gray-300 flex items-start">
              <span className="text-slate-400 mr-2">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
