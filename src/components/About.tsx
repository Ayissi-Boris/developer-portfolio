export default function About() {

    return (
        <section id="about"  className="max-w-6xl mx-auto px-6 py-20">

            {/* Section Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-center">
                About Me
            </h2>

            {/* Section Content */}
            <div className="mt-10 max-w-3xl mx-auto space-y-6 text-gray-600 leading-8">
                {/* Professional Summary */}
                <p>
                    Hi, I am <strong>Boris Ayissi</strong>, a Full Stack Developer focused on building fast, responsive, and user-friendly web applications.
                </p>
                
                <p>
                    I enjoy solving real business problems with clean code, modern technologies, and continuous learning. 
                </p>

                <p>
                    My current focus is mastering React, Next.js, TypeScript, Node.js, PostgreSql, and Cloud development while building production-ready projects.
                </p>


            </div>

            {/* Tech Stack */}
            <div className="mt-10 flex flex-wrap justify-center gap-3">

                {
                    [
                        "Next.js",
                        "React",
                        "Typescript CSS",
                        "Node.js",
                        "PostgreSql",
                        "Git",
                        "GitHub"
                    ].map((skill) => (
                        <span 
                           key={skill}
                           className="bg-gray-100 rounded-full px-4 py-2 text-sm font-medium">
                            {skill}
                        </span>
                    ))
              }

            </div>

        </section>

    )
}


//Beginner Explanation 
/* max-w-6xl
  * Prevents content stretching across very large screens
  */

/* mx-auto
  * Centers the section horizontally on smaller screens
  */

/* flex-wrap
  * Moves skills to the next line on smaller screens 
  */
