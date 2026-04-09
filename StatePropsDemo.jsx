import { useState } from "react";

// Car component (receives props)
function Car({ brand }) {
  return <h3>I am a {brand} car</h3>;
}

export default function StatePropsDemo() {
  const [carName, setCarName] = useState("Toyota");

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>My Garage</h2>

        {/* Passing state as props */}
        <Car brand={carName} />

        {/* Change state */}
        <button
          style={styles.button}
          onClick={() => setCarName("BMW")}
        >
          Change Car
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #0f0f0f, #1a1a1a)",
    fontFamily: "'Courier New', monospace",
  },
  card: {
    background: "#121212",
    padding: "40px",
    borderRadius: "16px",
    boxShadow: "0 0 30px rgba(0,0,0,0.8)",
    textAlign: "center",
    width: "300px",
    border: "1px solid #222",
  },
  title: {
    marginBottom: "20px",
    color: "#aaa",
    letterSpacing: "2px",
    textTransform: "uppercase",
    fontSize: "18px",
  },
  button: {
    marginTop: "20px",
    padding: "10px 15px",
    borderRadius: "8px",
    cursor: "pointer",
    background: "transparent",
    border: "1px solid #00ff88",
    color: "#00ff88",
  },
};