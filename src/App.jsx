
import './App.css'
import Login from './Login'
import ApiDocs from './ApiDocs'
import { Routes, Route } from "react-router-dom";
function App() {


  return (
   
   <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/home" element={<ApiDocs></ApiDocs>} />
    </Routes>
  )
}

export default App
