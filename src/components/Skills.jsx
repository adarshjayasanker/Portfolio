const Skills = () => {
    const skills = [
        "JavaScript",
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Tailwind CSS",
        "Git"
    ];
    return(
        <section className="py-20 px-6 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">Skills</h2>
            <div className="flex flex-wrap justify-center gap-4">
                {skills.map((skill, index) => (
                    <span key={index} className="border border-gray-700 px-4 py-2 rounded-lg text-gray-300">{skill}</span>
                ))}
            </div>
        </section>
    )
};

export default Skills;