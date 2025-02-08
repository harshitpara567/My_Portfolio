import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubLink: string;
  demoLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  githubLink,
  demoLink,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:-translate-y-1">
      <div className="relative h-48 sm:h-56">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-3">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 sm:px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-xs sm:text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 text-sm sm:text-base"
          >
            <Github size={18} className="sm:w-5 sm:h-5" />
            <span>Code</span>
          </a>
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 text-sm sm:text-base"
          >
            <ExternalLink size={18} className="sm:w-5 sm:h-5" />
            <span>Demo</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;