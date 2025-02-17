import "./About.css";

function About() {
    return (
        <div className="about">
            <h1 className="heading">About Me</h1>
            <h2 className="heading">Bio</h2>
            <p>Hi, I'm Toby Woollums, a passionate aspiring software developer working towards becoming a **full-stack developer**. I have a strong foundation in **Java and JavaScript** and am expanding my expertise in **React, TypeScript, and DevOps tools**. Currently, I'm pursuing a **B.S. in Computer Science at WGU** while actively working on projects to improve my skills</p>
            <br />
            <h2  className="heading">Skills</h2>
            <ul className="list">
                <li className="list-item">Languages: Java, C++, SQL, JavaScript, TypeScript (Learning)</li>
                <li className="list-item">Front End: React (JavaScript), HTML, CSS</li>
                <li className="list-item">Back End: Spring (Java), Node.js</li>
                <li className="list-item">Dev Ops: Docker, AWS (Learning)</li>
                <li className="list-item">Version Control: Git @ GitHub</li>
                <li className="list-item">Testing: JUnit (TDD), Mockito</li>
            </ul>
            <br />
            <h2  className="heading">Education & Certifications</h2>
            <h3  className="heading">B.S. Computer Science (In Progress)</h3>
            <p>Western Governors University | 2027</p>
            <br />
            <h3  className="heading">A.A. General Studies</h3>
            <p>Northwest Florida State College | 2015</p>
            <br />
            <h2  className="heading">Professional Experience</h2>
            <h3  className="heading">Java Backend Developer Internship</h3>
            <p>Revature | 08/2024 - Present</p>
            <br />
            <h2  className="heading">Future Goals</h2>
            <p>My goal is to land my first **software development role** while continuing to grow in **React, full-stack development, and DevOps**. I'm eager to work on meaningful projects and contribute to a dynamic engineering team.</p>
        </div>
    );
}

export default About;