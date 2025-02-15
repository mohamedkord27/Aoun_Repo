import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/LoginPage/Login";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/HomePage/Home";
import AboutUs from "./Pages/AboutUs/AboutUs";
import SuccessStory from "./Pages/SuccessStory/SuccessStory";
import Contact from "./Pages/Contact/Contact";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/success-story" element={<SuccessStory />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
