const Hero = () => {
    return(
        <section className="min-h-screen flex justify-center items-center px-6 text-center">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Adarsh Babu Jayasanker</h1>
            <h2 className="text-xl md:text-2xl text-gray-300 mb-6">Full-Stack Developer (MERN)</h2>
            <p className="text-gray-400 mb-4">I build real-world web applications with structured backend systems, admin workflows, and lead-generation pipelines</p>
            <p className="text-sm text-gray-500 mb-8">Built and deployed a live client platform used in business operations.</p>
            <div className="flex justify-center gap-4 mb-6">
              <a href="#projects" className="bg-white text-black px-6 py-2 rounded-lg font-semibold hover:opacity-80 transition">View Projects</a>
              <a href="#contact" className="border border-white px-6 py-2 rounded-lg font-medium hover:bg-white hover:text-black transition">Contact</a>
            </div>
        </div>

    </section>
    )
};

export default Hero;