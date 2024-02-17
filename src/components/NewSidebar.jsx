import React from "react";
import Button from "./Button.jsx";

const NewSidebar = ({ onStartedAddProject, projects, onSelectProject, selectedProjectId }) => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your new projects
      </h2>
      <div>
        <Button onClick={onStartedAddProject}> Add New Project </Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => {
          // Initialize cssClasses here
          let cssClasses = '';

          // Conditional rendering for styling
          if (project.id === selectedProjectId) {
            cssClasses += 'bg-stone-800 text-stone-200';
          } else {
            cssClasses += 'text-stone-400';
          }

          return (
            <li key={project.id}>
              <button className={`w-full text-left px-2 py-1 rounded-sm my-1 ${cssClasses} hover:text-stone-200 hover:bg-stone-800`}>
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default NewSidebar;
