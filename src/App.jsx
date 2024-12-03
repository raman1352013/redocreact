import './App.css';
import Login from './Login';
import ApiDocs from './ApiDocs';

import { Routes, Route ,Link} from "react-router-dom";

function App() {
  return (
   
      <> 
        <nav>
        <Link to="/">543534543Login</Link> | <Link to="/apiDocs">API Docs</Link>
      </nav>
        <p>This is app</p>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/apiDocs" element={<ApiDocs />} />
        </Routes>
      </>

  );
}

export default App;
