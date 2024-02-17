import React, { useState } from "react";
import NewSidebar from "./components/NewSidebar.jsx";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import SelectedProject from "./components/SelectedProject.jsx";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  });

  function handleAddTask(newTask) {
    setProjectState((prevState) => {
      const updatedTasks = [...prevState.tasks, newTask];
      return {
        ...prevState,
        tasks: updatedTasks,
      };
    });
  }

  function handleDeleteTask(taskIndex) {
    setProjectState((prevState) => {
      const updatedTasks = [...prevState.tasks];
      updatedTasks.splice(taskIndex, 1);
      return {
        ...prevState,
        tasks: updatedTasks,
      };
    });
  }

  function handleStartedProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleCancelAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectState((prevState) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      };

      return {
        ...prevState,
        selectedProjectId: projectId,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectId
  );

  let content = <SelectedProject project={selectedProject} />;

  if (projectState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />;
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartedAddProject={handleStartedProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <NewSidebar
        onStartedAddProject={handleStartedProject}
        projects={projectState.projects}
        selectedProjectId={projectState.selectedProjectId} 
      />
      {content}
    </main>
  );
}

export default App;
