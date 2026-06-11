
export default function Hero() {
	return (
		<section className="min-h-screen flex flex-col justify-center items-center">

			{/* Main Heading */}
			<h1 className="text-5xl font-bold">
				Hi, I am Boris
			</h1>

			{/* Short intro */}
			<p className="mt-4 text-gray-500">
				Full-Stack Developer building modern web apps.
			</p>

			{/* CTA */}
			<button className="
			mt-8
			px-8py-3
			rounded-lg
			bg-black
			text-white">
				View projects
			</button>

		</section>
		
	);
}
