import "./Home.css";

function Home() {
  return (
    <div className="home">
      <h1>Welcome to My Portfolio</h1>
      <p>Full Stack Developer | React Enthusiast</p>
      <button>View Projects</button>
      <div className="featuredContainer">
        <div className="featuredItem">
          <h2>About Me</h2>
          <p>sample text</p>
        </div>
        <div className="featuredItem">
          <h2>Contact Me</h2>
          <p>sample text</p>
        </div>
        <div className="featuredItem">
          <h2>Projects</h2>
          <p>sample text</p>
        </div>
      </div>
    </div>
  );
}

export default Home;