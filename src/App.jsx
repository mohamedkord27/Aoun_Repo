import { Routes, Route } from "react-router-dom";
import Login from "./Pages/LoginPage/Login";
import Register from "./Pages/RegisterPage/Register";

// import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/r" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
