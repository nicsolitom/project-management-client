import "./App.css";
import { Routes, Route } from "react-router-dom"; 
import EditTaskPage from "./pages/EditTaskPage";
import EditProjectPage from "./pages/EditProjectPage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";    
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import ProjectListPage from "./pages/ProjectListPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import IsPrivate from "./components/IsPrivate";
import IsAnon from "./components/IsAnon";
 
function App() {
  return (
    <div className="App">

      <Navbar />
 
      <Routes>      
        <Route path="/" element={ <HomePage /> } />
        <Route path="/projects" element={ <IsPrivate><ProjectListPage /></IsPrivate> } />
        <Route path="/projects/edit/:projectId" element={ <IsPrivate><EditProjectPage /></IsPrivate> } />
        <Route path="/projects/:projectId" element={<IsPrivate><ProjectDetailsPage /></IsPrivate>} />  
        <Route path="/tasks/edit/:taskId" element={<EditTaskPage />} />  
        <Route path="/login" element={ <IsAnon><LoginPage /></IsAnon> } />
        <Route path="/signup" element={<IsAnon><SignupPage /></IsAnon>} />  
      </Routes>
      
    </div>
  );
}
 
export default App;