import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import HeaderHome from "./components/HeaderHome";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login/>}></Route>
          <Route path="/home" element={<HeaderHome/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
