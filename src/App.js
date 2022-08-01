import "./App.css";
import { Routes, Route } from "react-router-dom"; 
import EditProjectPage from "./pages/EditProjectPage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";    
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import ProjectListPage from "./pages/ProjectListPage";
import EditTaskPage from "./pages/EditTaskPage";
 
function App() {
  return (
    <div className="App">

      <Navbar />
 
      <Routes>      
        <Route path="/" element={ <HomePage /> } />
        <Route path="/projects" element={ <ProjectListPage /> } />
        <Route path="/projects/edit/:projectId" element={ <EditProjectPage /> } />
        <Route path="/projects/:projectId" element={<ProjectDetailsPage />} />  
        <Route path="/tasks/edit/:taskId" element={<EditTaskPage />} />  
      </Routes>
      
    </div>
  );
}
 
export default App;