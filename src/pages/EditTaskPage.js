import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { set } from "mongoose";
 
const API_URL = "http://localhost:5005";
 
function EditTaskPage(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [projectId, setProjectId] = useState("");

  // console.log("Project ID: ", props.projectId)

  const { taskId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
        .get(`${API_URL}/api/tasks/edit/${taskId}`)
        .then((response) => {
            const oneTask = response.data;
            setTitle(oneTask.title);
            setDescription(oneTask.description);
            setProjectId(oneTask.project)
        })
        .then(() => console.log(title, description))
        .catch((error) => console.log(error));

  }, [taskId]);


  const handleFormSubmit = (e) => {                     
    e.preventDefault();

    const requestBody = { title, description };
 
   
    axios
      .put(`${API_URL}/api/tasks/${taskId}`, requestBody)
      .then((response) => {
        navigate(`/projects/${projectId}`);
      });
  };


  const deleteTask = () => {
    axios
      .delete(`${API_URL}/api/tasks/${taskId}`)
      .then(() => {
        navigate(`/projects/${projectId}`);
      })
      .catch((err) => console.log(err));
  };  

  
  return (
    <div className="EditTaskPage">
      <h3>Edit the task</h3>
 
      {/* <form> */}
      <form onSubmit={handleFormSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        
        <label>Description:</label>
        <textarea
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
 
        <input type="submit" value="Submit" />
      </form>

      <button onClick={deleteTask}>Delete Task</button>
    </div>
  );
}
 
export default EditTaskPage;
