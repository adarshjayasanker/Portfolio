const Contact = () => {
    return(
       <section id="contact" className="py-20 px-6 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Contact</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
                I’m currently open to Full-Stack Developer opportunities. If you're looking for someone who can build real-world systems and grow into a strong engineer, let’s connect.
            </p>
            <div className="space-y-4">
                <a href="mailto:adarshcodes1@gmail.com" className="block underline text-gray-300 text-lg font-medium">adarshcodes1@gmail.com</a>
                <a href="https://github.com/adarshjayasanker" target="_blank" className="block underline">GitHub</a>
                <a href="https://www.linkedin.com/in/adarsh-jayasanker-76b376398" target="_blank" className="block underline">LinkedIn</a>
            </div>
       </section>
    )
};

export default Contact;