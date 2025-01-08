import React from 'react';
import ProjectCard from './ProjectCard';

const projectsData = [
  {
    id: 1,
    title: "AI Object Detection",
    description: "A project for AI-based object detection.",
    image: "/images/AIOD.png",
    tag: ["AI", "Web"],
    githubLink: "https://github.com/saakshijs/AI-Object-Detection.git" // Add your GitHub link here
  },
  {
    id: 2,
    title: "BMI tracker",
    description: "A web-based BMI tracker app.",
    image: "/images/BMI.png",
    tag: ["Web"],
    githubLink: "https://github.com/SaakshiJShetty2610/BMI.git" // Add your GitHub link here
  },
  {
    id: 3,
    title: "ChachuBot",
    description: "A simple chatbot project.",
    image: "/images/chachubot.png",
    tag: ["AI", "Web"],
    githubLink: "https://github.com/SaakshiJShetty2610/ChachuBot.git" // Add your GitHub link here
  },
  {
    id: 4,
    title: "Stop Watch",
    description: "A Flutter-based stopwatch app.",
    image: "/images/sw.jpg",
    tag: ["Flutter", "Mobile app"],
    githubLink: "https://github.com/SaakshiJShetty2610/Stop-Watch.git" // Add your GitHub link here
  },
  
];

const ProjectsSection = () => {
  return (
    <>
      <h2 className='text-4xl font-bold text-white mb-6'>My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            githubLink={project.githubLink} // Pass the githubLink prop here
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;
