import { projects } from "../data/projects";
import homeImage from '../assets/greenx-home.png';
import adminDashboard from '../assets/greenx-admin.png';
import leadForm from '../assets/greenx-lead.png';

const Projects = () => {
    return(
        <section id="projects" className="py-20 px-6 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
            <div className="space-y-12">
                {projects.map((project, index) => (
                    <div key={index} className="border border-gray-800 rounded-xl p-6">
                        <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                        <p className="text-gray-400 mb-4">{project.subtitle}</p>
                        <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1">
                            {project.description.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                        {project.title === "Greenx Pest Control Platform" && (
                            <div className="mb-4">
                                <h4 className="text-sm font-semibold text-gray-400 mb-2">Impact</h4>
                                <p className="text-gray-400">Enabled the business to capture and manage customer leads digitally instead of manual follow-ups.</p>
                            </div>
                        )}
                        {project.title === "Greenx Pest Control Platform" && (
                            <div className="mb-6">
                                <div className="grid md:grid-cols-3 gap-4">
                                    <img src={homeImage} alt="greenx-home" className="rounded-lg border border-gray-800" />
                                    <img src={leadForm} alt="greenx-home" className="rounded-lg border border-gray-800" />
                                    <img src={adminDashboard} alt="greenx-home" className="rounded-lg border border-gray-800" />
                                </div>
                            </div>
                        )}
                        <div className="mb-4">
                            <h4 className="text-sm font-semibold text-gray-400 mb-2">Engineering Focus</h4>
                            <ul className="list-disc list-inside text-gray-400 space-y-1">
                                {project.engineering.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                        {project.title === "Greenx Pest Control Platform" && (
                            <div className="mb-4">
                                <h4 className="text-sm font-semibold text-gray-400 mb-2">What I Focused On</h4>

                                <ul className="list-disc list-inside text-gray-400 space-y-1">
                                    <li>Structuring backend APIs for maintainability</li>
                                    <li>Separating admin and public system logic</li>
                                    <li>Designing data flow for lead management</li>
                                </ul>
                            </div>
                            )}
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