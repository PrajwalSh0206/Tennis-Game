import { Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Game from './pages/Game';
import './index.css';
import './App.css';

function App() {
  return (
    <div className="w-screen h-screen">
       <Routes>
        <Route path="/" element={<Login />} />
        <Route path="about" element={<Game />} />
      </Routes>
    </div>
  );
}

export default App;
