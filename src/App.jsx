import './App.css';
import Login from './Login';
import ApiDocs from './ApiDocs';

import { Routes, Route} from "react-router-dom";

function App() {
  return (
   
      <> 
       
      <Login></Login>
        <p>This is app</p>
        <Routes>
          
          <Route path="/apiDocs" element={<ApiDocs />} />
        </Routes>
      </>

  );
}

export default App;
