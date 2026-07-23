import { skills } from "@/src/data/skills";

export default function Skills() {
    return (
        <section id="skills" className="py-20 px-6">

            {/* Section Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                My Skills
            </h2>

            {/* Respoonsive Grid */}
            <div className="grid gap-6 md:grd-cols-2">
                {Object.entries(skills).map(([category, items])=>(

                    <div 
                      key={category}
                      className="border rounded-xl p-6 shadow-sm hover:shadow-lg transition">

                        {/* Category Name */}
                        <h3 className="text-xl font-semibold capitalize mb-4">
                            {category}
                        </h3>

                        {/* Skill Tags */}
                        <div className="flex flex-wrap gap-2">
                            {items.map((skill) => (
                                <span 
                                  key = {skill}
                                  className = "bg-gray-100 px-3 py-1 rounded-full text-sm">
                                    {skill}
                                  </span>
                            ))}
                        </div>




                    </div>

                ))}

            </div>

        </section>
    )
}




/**  Notes
 * //Object.entries(skills)
 * Converts the object into an array so we can loop over each category.
 * 
 * map()
 * Loops through every category and creates one card.
 * 
 * //flex-wrap
 * Moves skills to the next line when space is limited.
 * 
 * md:grid-cols-2
 * 1 column on mobile.
 * 2 columns on tablets and desktops
 */
