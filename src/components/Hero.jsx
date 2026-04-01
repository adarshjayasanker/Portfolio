const Hero = () => {
    return(
        <section className="min-h-screen flex justify-center items-center px-6 text-center">
      
      <div className="max-w-3xl">

        <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
          I build real-world full-stack applications that solve business problems
        </h1>

        <p className="text-gray-400 mb-4">
          Full-Stack MERN Developer with experience delivering a live client project,
          including lead management systems, admin dashboards, and backend architecture.
        </p>

        <p className="text-sm text-gray-500 mb-8">
          Built and deployed a production-ready system for a service business.
        </p>

        <div className="flex justify-center gap-4 mb-6">
          <a
            href="#projects"
            className="bg-white text-black px-6 py-2 rounded-lg font-semibold hover:opacity-80 transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="border border-white px-6 py-2 rounded-lg font-medium hover:bg-white hover:text-black transition"
          >
            Contact
          </a>
        </div>

        <p className="text-sm text-gray-600">
          Adarsh Babu Jayasanker
        </p>

      </div>

    </section>
    )
};

export default Hero;