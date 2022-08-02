import { useState, useEffect } from "react";
import axios from "axios";

import AddProject from "../components/AddProject";
import ProjectCard from "../components/ProjectCard";

const API_URL = "http://localhost:5005";

function ProjectListPage() {
  const [projects, setProjects] = useState([]);

  const getAllProjects = () => {
    const storedToken = localStorage.getItem("authToken");

    axios
      .get(`${API_URL}/api/projects`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => setProjects(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllProjects();
  }, []);

  return (
    <div className='ProjectListPage'>
      <AddProject refreshProjects={getAllProjects} />

      {projects.length === 0 ? (
        <p>Loading...</p>
      ) : (
        projects.map((project) => (
          <ProjectCard key={project._id} {...project} />
        ))
      )}
    </div>
  );
}

export default ProjectListPage;
