export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
            <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

                {/* Logo */}
                <h1 className="text-lg md:text-2xl font-bold">
                    Boris Ayissi
                </h1>

                {/* Navigation Links */}
                <ul className="flex gap-4 md:gap-6 text-sm font-medium">
                    <li><a href="#projects"> Projects</a></li>
                    <li><a href="#contact"> Contacts</a></li>

                </ul>

            </nav>
        </header>
    );
}

// Beginner Explanation
// md:text-2xl
// From tablet upward use larger text.
// Mobile keeps smaller text.
// header = top section 

// sticky = remains visible when scrolling

// nav = navigation container

// href="#projects"
//   scrolls to section with id="projects"
