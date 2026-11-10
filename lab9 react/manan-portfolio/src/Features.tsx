
interface Project {
  title: string;
  description: string;
  imageUrl: string;
  imageAltText: string;
  repositoryUrl: string;
}

const projectsList: Project[] = [
    {
    title: "Smart Healing AI",
    description: "A Python disease diagnosis system built with a teammate, reaching about 87.5% accuracy on its test data.",
    imageUrl: "https://www.hashstudioz.com/blog/wp-content/uploads/2024/11/AI-in-Medical-Diagnosis-The-Key-to-Early-Detection-and-Prevention.png",
    imageAltText: "Smart Healing AI disease diagnosis system output and results",
    repositoryUrl: "https://github.com/manan-404/REPLACE-WITH-REPO-NAME"
  },
  {
    title: "InvTrack",
    description: "An inventory management system built with Python and MongoDB for my 4th-semester Advanced Database course.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe42RLsFV8iYzLmWhaU2FUjZeWbRX_JQ4i3mCm6v2FPfvcRmlf1eFC8VPD&s=10",
    imageAltText: "InvTrack inventory system running with MongoDB data",
    repositoryUrl: "https://github.com/manan-404/REPLACE-WITH-REPO-NAME"
  },
  {
    title: "Utility Bill Generator",
    description: "An 8086 Assembly program that calculates and generates utility bills.",
    imageUrl: "https://img.magnific.com/free-vector/public-utilities-isometric-composition-with-man-character-puzzled-by-big-electricity-bill-vector-illustration_98292-9176.jpg?semt=ais_hybrid&w=740&q=80",
    imageAltText: "Utility Bill Generator running in an 8086 emulator",
    repositoryUrl: "https://github.com/manan-404/REPLACE-WITH-REPO-NAME"
  },
  {
    title: "Parking Management System",
    description: "An 8086 Assembly program that manages parking slots and records.",
    imageUrl: "https://www.matrixcomsec.com/wp-content/uploads/2025/08/smart-parking-system.webp",
    imageAltText: "Parking Management System running in an 8086 emulator",
    repositoryUrl: "https://github.com/manan-404/REPLACE-WITH-REPO-NAME"
  },

  {
    title: "Network Packet Sniffer",
    description: "A Python-based tool developed under the Code Alpha framework to capture and analyze data traffic streams for security monitoring.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-A9ck4h0g7BXrrPKVRsnvLPZWHpm468qAuXEGGYOg4Ay-gn6paDl-HwOF&s=10",
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
    imageUrl: "/project3.jpeg",
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