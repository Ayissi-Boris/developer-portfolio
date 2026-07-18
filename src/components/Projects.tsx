import ProjectCard from "./ProjectCard";
import {projects}  from "../data/projects";

export default function Projects() {
    return (
        <section id="projects" className="py-20 md:py-24 px-6 max-w-6xl mx-auto">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold ">
             My Projects
            </h2>
             

            <div className="
            grid  
            
            grid-cols-1

            sm:grid-cols-2

            lg:grid-cols-3

            gap-6">

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


// max-w-6xl
// Prevents content stretching across
// very large screens.

//Result of the code above
// Phone

// ■

// ■

// ■

// Tablet

// ■ ■

// ■

// Desktop

// ■ ■ ■