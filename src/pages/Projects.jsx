import "./Projects.css";

function Projects () {
    return (
        <div className="projects">
            <h1>My Projects</h1>
            <ul className="project-list">
                <li className="project-list-item">
                    <h2>Employee Management System</h2>
                    <p>Language: Java (Spring), JavaScript (React)</p>
                    <a href="https://www.github.com/woollumst/EmployeeManagementSystem/" target="_blank">Link to GitHub Repo</a>
                    <p>Description: sample text</p>
                </li>
                <li className="project-list-item">
                    <h2>Social Media API (Spring)</h2>
                    <p>Language: Java (Spring)</p>
                    <a href="https://www.github.com/woollumst/woollumst-pep-spring-project/" target="_blank">Link to GitHub Repo</a>
                    <p>Description: sample text</p>
                </li>
                <li className="project-list-item">
                    <h2>Student System</h2>
                    <p>Language: C++</p>
                    <a href="https://www.github.com/woollumst/StudentSystem/" target="_blank">Link to GitHub Repo</a>
                    <p>Description: sample text</p>
                </li>
            </ul>
        </div>
    );
}

export default Projects;