
interface Project {
  title: string;
  description: string;
  imageUrl: string;
  imageAltText: string;
  repositoryUrl: string;
}

const projectsList: Project[] = [
  {
    title: "Network Packet Sniffer",
    description: "A Python-based tool developed under the Code Alpha framework to capture and analyze data traffic streams for security monitoring.",
    imageUrl: "/project1.jpeg",
    imageAltText: "Code snippet and terminal output of network packet sniffer tool",
    repositoryUrl: "https://github.com/manan-404"
  },
  {
    title: "Student Record Management System",
    description: "A structured data structures application built to efficiently store, retrieve, and organize student records with optimized performance.",
    imageUrl: "/project2.jpeg",
    imageAltText: "Interface and code architecture of Student Record Management System",
    repositoryUrl: "https://github.com/manan-404"
  },
  {
    title: "Market Management System",
    description: "A console-based application built in C++ featuring persistent file handling to track product transactions and pricing workflows.",
    imageUrl: "/project3.jpg",
    imageAltText: "C++ terminal console running Market Management System transactions",
    repositoryUrl: "https://github.com/manan-404"
  }
];

export function Features() {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid">
        {projectsList.map((project, index) => (
          <article key={index} className="project-card">
            <img 
              src={project.imageUrl} 
              alt={project.imageAltText} 
              className="project-card-image" 
            />
            <div className="project-card-content">
              <h3 className="project-card-title">{project.title}</h3>
              <p className="project-card-description">{project.description}</p>
              <a href={project.repositoryUrl} target="_blank" rel="noopener noreferrer">
                View Repository &rarr;
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}