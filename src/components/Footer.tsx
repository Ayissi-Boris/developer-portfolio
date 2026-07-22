export default function Footer() {
    return (
        <footer 
        id="contact"
        className="border-t bg-gray-50 py-10 px-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                
                {/* Personal Information */}
                <div className="text-center md:text-left">
                    <h2 className="text-xl font-bold">
                        Boris Ayissi
                    </h2>

                    <p className="text-gray-600 mt-2">
                        Full-Stack Developer building modern web applications.
                    </p>
                </div>

                {/* Social Media Links*/}
                <div className="flex gap-6">

                    <a 
                    href="https://github.com/Ayissi-Boris"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 transition-colors"
                    >
                        Github    
                    </a>

                    <a 
                    href="https://linkedin.com/in/ayissi-nga-boris-desire"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 transition-colors"
                    >
                        LinkedIn
                    </a>

                    <a 
                    href="mailto:borisayissi11@gmail.com"
                    className="hover:text-blue-600 transition-colors"
                    >
                        Email
                    </a>

                </div>

            </div>

        </footer>
    )
}

/** 
 * Beginner Explanation
 * 
 * 
 * footer: bottom section of the webpage
 * 
 * id="contact" allows the navbar Contack link to scroll to the footer section
 * 
 * max-w-6xl keeps the content aligned with the rest of the site
 * 
 * md:flex-row changes the layout from vertical on mobile to horizontal on desktop
 * 
 * 
 * rel="noopener noreferrer" is a security best practice when using target="_blank" to prevent the new page from having access to the window object of the original page.
*/