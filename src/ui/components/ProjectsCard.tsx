import React from 'react';
import Buttom from './Button';
export type Technologies =
  | 'angular'
  | 'git'
  | 'js'
  | 'laravel'
  | 'mongo'
  | 'mysql'
  | 'node'
  | 'php'
  | 'react'
  | 'ts'
  | 'vue'
  | 'tailwind';

export interface IProjectProps {
  project: {
    title: string;
    description: string;
    img: string;
    technologies: Technologies[];
    sitio: string;
    repo: string;
  };
}

const ProjectsCard: React.FC<IProjectProps> = ({
  project: {
    title,
    description,
    img,
    technologies,
    sitio,
    repo,
  },
}) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 md:px-5 lg:px-5 py-5">
      <div className="border p-4 bg-r-white text-r-dark shadow-card-project shadow-r-primary">
        <h4 className="font-bold mb-5">{title}</h4>
        <p className="mb-5 line-clamp-2 text-ellipsis h-12">
          {description}
        </p>
        <img
          src={img}
          alt={title}
          className="object-fill h-40 lg:h-32 w-full mb-5"
        />
        <h5 className="font-bold mb-2">Tecnologias</h5>
        <div className="flex gap-5 mb-5">
          {technologies.map((technology) => (
            <img
              key={technology}
              className="h-6 w-6"
              src={
                '/assets/svg/skills/' + technology + '.svg'
              }
              alt={technology}
            />
          ))}
        </div>
        <div className="flex gap-3 justify-end">
          <a href={sitio} target="_blank" rel="noreferrer">
            <Buttom variant="dark">Sitio</Buttom>
          </a>
          <a href={repo} target="_blank" rel="noreferrer">
            <Buttom variant="dark">Repositorio</Buttom>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
