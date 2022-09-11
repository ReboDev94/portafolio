import ProjectsCard, { IProjectProps } from "../ui/components/ProjectsCard";

const projectsAll: IProjectProps["project"][] = [
  {
    title: "Portalio profesional",
    description: "Mi portafolio profesional",
    img: "/assets/img/portafolio.png",
    technologies: ["ts", "react", "git", "tailwind"],
    sitio: "https://rafael-de-jesus.com/",
    repo: "https://github.com/ReboDev94/portafolio",
  },
  {
    title: "PrestamosRRR",
    description:
      "Sistema de prestamos para pequeñas empresas y prestadores individuales.",
    img: "/assets/img/prestamosrrr.png",
    technologies: ["ts", "vue", "laravel", "git", "tailwind"],
    sitio: "https://prestamosrrr.com/",
    repo: "https://github.com/ReboDev94/prestamos-frontend",
  },
];
const Projects = () => {
  return (
    <section id="projects" className="min-h-[calc(100vh-5rem)] mt-10 lg:mt-0">
      <h1 className="text-r-primary font-extrabold text-2xl lg:text-3xl">
        Proyectos
      </h1>
      <div className="w-full mt-10">
        <div className="flex flex-wrap md:-mx-5 lg:-mx-5 -my-5">
          {projectsAll.map((project) => (
            <ProjectsCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
