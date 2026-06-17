type ProjectCardProps = {
    title: string;
    description: string;
    tech: string[];
}


export default function ProjectCard({title, description, tech} : ProjectCardProps) {
    return (
        <div className="border rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-bold mb-2">
                {title}
            </h3>

            <p className="text-gray-600 mb-4">
                {description}
            </p>

            <div className="flex flex-wrap gap-2">
                {tech.map((item) => (
                    <span 
                        key={item} 
                            className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                        {item}
                    </span>
                ))}
            </div>
        </div>
    );

}