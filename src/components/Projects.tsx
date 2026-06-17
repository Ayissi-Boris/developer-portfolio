import ProjectCard from "./ProjectCard";
import {projects}  from "@/src/data/projects";

export default function Projects() {
    return (
        <section id="projects" className="py-24 px-6">
            <h2 className="text-4xl font-bold mb-12 text-center">
             My Projects
            </h2>
            <h2>Project Counts: {projects.length}</h2>

            <div className="grid md:grid-cols-3 gap-6">

                {projects.map((project) => (
                    <ProjectCard 
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    tech={project.tech}  
                     />
                ))}
            </div>
        </section>
    );
}
