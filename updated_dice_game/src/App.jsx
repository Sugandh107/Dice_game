import GamePage from "./components/GamePage";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SelectNumber from "./components/SelectNumber";
import RoletheDice from "./components/RoletheDice";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/guessnumber" element={<GamePage />} />
        <Route path="/roledice" element={<RoletheDice />} />
      </Routes>
    </Router>
  );
}

export default App;
