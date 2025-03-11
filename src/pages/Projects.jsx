import "./Projects.css";

const projects = [
    {
        title: "Task Management App",
        description: "Full stack application, used for coordinating tasks with others",
        tech: ["Node.js", "Express.js", "React.ts", "PostgreSQL"],
        github: "https://www.github.com/woollumst/lumaa-spring-2025-swe",
    },
    {
        title: "Employee Management System",
        description: "sample text",
        tech: ["Java", "Spring", "React.js", "MySQL"],
        github: "https://www.github.com/woollumst/EmployeeManagementSystem/",
    },
    {
        title: "Social Media API (Spring)",
        description: "sample",
        tech: ["Java", "Spring", "MySQL"],
        github: "https://www.github.com/woollumst/woollumst-pep-spring-project/",
    },
    {
        title: "Student System",
        description: "sample",
        tech: ["C++", "Memory Management", "OOP"],
        github: "https://www.github.com/woollumst/StudentSystem/",
    },
];

function Projects () {
    return (
        <div className="projects">
            <h1>My Projects</h1>
            <div className="projects-container">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <p className="tech-stack">Tech: {project.tech.join(", ")}</p>
                        <a className="project-link" href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;