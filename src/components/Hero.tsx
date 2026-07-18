
export default function Hero() {
	return (
		<section className="min-h-screen flex flex-col items-center justify-center text-center px-6">

			{/* Main Heading */}
			<h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
				Boris Ayissi
			</h1>

			{/* Professional positioning */}
			<p className="mt-4 text-gray-500 max-w-xl text-base md:text-lg">
				Full-Stack Developer building modern web apps.
			</p>

			{/* CTA */}
			<button className="
			mt-8

			px-6
			py-3

			rounded-lg

			bg-black
			text-white
			
			hover:bg-gray-800
			transition">
				<a href="#projects">View projects</a>
			</button>

		</section>
		
	);
}


// Mobile -> text-4xl

// Small tablets -> text-5xl

// Desktop -> text-6xl

// max-w-xl

// Prevents long lines of text.

// Makes reading easier.