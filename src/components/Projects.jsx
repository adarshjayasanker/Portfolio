import { projects } from "../data/projects";

const Projects = () => {
    return(
        <section id="projects" className="py-20 px-6 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
            <div className="space-y-12">
                {projects.map((project, index) => (
                    <div key={index} className="border border-gray-800 rounded-xl p-6">
                        <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                        <p className="text-gray-400 mb-4">{project.subtitle}</p>
                        <div className="mb-4">
                            <h4 className="text-sm font-semibold text-gray-400 mb-2">Engineering Focus</h4>
                            <ul className="list-disc list-inside text-gray-400 space-y-1">
                                {project.engineering.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.techStack.map((tech, i) => (
                                <span key={i} className="text-sm border border-gray-700 px-2 py-1 rounded">{tech}</span>
                            ))}
                        </div>
                        <div className="flex gap-4">
                            <a href={project.github} target="_blank" className="underline">GitHub</a>
                            <a href={project.live} target="_blank" className="underline">Live</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
};

export default Projects;