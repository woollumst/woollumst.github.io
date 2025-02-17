import "./Home.css";

const featuredItems = [
  {
    title: "About Me",
    description: "sample text",
  },
  {
    title: "Projects",
    description: "sample text",
  },
  {
    title: "Contact Me",
    description: "sample text",
  },
];

function Home() {
  return (
    <div className="home">
      <h1>Welcome to My Portfolio</h1>
      <p>Full Stack Developer | React Enthusiast</p>
      <button>View Projects</button>
      <div className="featuredContainer">
        {featuredItems.map((featuredItem, index) => (
            <div key={index} className="featured-card">
              <h2>{featuredItem.title}</h2>
              <p>{featuredItem.description}</p>
            </div>
        ))}
      </div>
    </div>
  );
}

export default Home;