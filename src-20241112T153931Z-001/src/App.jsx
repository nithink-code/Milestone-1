import { Routes, Route } from "react-router-dom";
import HomePage from "./routes/HomePage";
import NavBar from "./components/NavBar/NavBar";
import AboutUs from "./routes/About";
import Register from "./routes/Register";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <div style={{ marginTop: "4rem", width: "100%", flex: 1 }}>
        {" "}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
