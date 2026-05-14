import { useState } from "react";
import Timer from "./components/Timer";
import { Routes, Route, Link } from "react-router-dom";
import StatePropsDemo from "./components/StatePropsDemo";
import Form from "./components/Form";
import Pagination from "./components/Pagination";
import PasswordStrengthChecker from "./components/PasswordChecker";
function App() {

 return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>My React App</h1>

      {/* Navigation */}
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/timer">
          <button style={{ margin: "5px", padding: "10px" }}>
            Timer
          </button>
        </Link>

        <Link to="/demo">
          <button style={{ margin: "5px", padding: "10px" }}>
            State & Props Demo
          </button>
        </Link>

        <Link to="/form">
          <button style={{ margin: "5px", padding: "10px" }}>
            Simple Form
          </button>
        </Link>

        <Link to="/pagination">
          <button style={{ margin: "5px", padding: "10px" }}>
            Pagination
          </button>
        </Link>
        <Link to="/passwordchecker">
          <button style={{ margin: "5px", padding: "10px" }}>
            Password Checker
          </button>
        </Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/timer" element={<Timer />} />
        <Route path="/demo" element={<StatePropsDemo />} />
        <Route path="/form" element={<Form />} />
        <Route path="/pagination" element={<Pagination />} />
        <Route path="/passwordchecker" element={<PasswordStrengthChecker />} />
      </Routes>
    </div>
  );
}

export default App;