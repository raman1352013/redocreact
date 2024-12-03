import './App.css';
import Login from './Login';
import ApiDocs from './ApiDocs';

import { Routes, Route ,Link} from "react-router-dom";

function App() {
  return (
   
      <>
       <nav>
        <Link to="/">Login</Link> | <Link to="/apiDocs">API Docs</Link>
      </nav>
      
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/apiDocs" element={<ApiDocs />} />
        </Routes>
      </>

  );
}

export default App;
