import { useState, useEffect, useRef } from "react";

export default function Timer() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const handleStart = () => setIsRunning(true);
  const handlePause = () => setIsRunning(false);

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = () => {
    const minutes = String(Math.floor(time / 60)).padStart(2, "0");
    const seconds = String(time % 60).padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Timer</h2>

        <div style={styles.time}>{formatTime()}</div>

        <div style={styles.buttons}>
          <button
            style={{ ...styles.button, ...styles.start }}
            onMouseOver={(e) =>
              (e.target.style.boxShadow = "0 0 10px #00ff88")
            }
            onMouseOut={(e) => (e.target.style.boxShadow = "none")}
            onClick={handleStart}
          >
            Start
          </button>

          <button
            style={{ ...styles.button, ...styles.pause }}
            onMouseOver={(e) =>
              (e.target.style.boxShadow = "0 0 10px #ffaa00")
            }
            onMouseOut={(e) => (e.target.style.boxShadow = "none")}
            onClick={handlePause}
          >
            Pause
          </button>

          <button
            style={{ ...styles.button, ...styles.reset }}
            onMouseOver={(e) =>
              (e.target.style.boxShadow = "0 0 10px #ff3b3b")
            }
            onMouseOut={(e) => (e.target.style.boxShadow = "none")}
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
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
    marginBottom: "10px",
    color: "#aaa",
    letterSpacing: "2px",
    textTransform: "uppercase",
    fontSize: "18px",
  },
  time: {
    fontSize: "56px",
    fontWeight: "bold",
    marginBottom: "30px",
    color: "#e0e0e0",
    textShadow: "0 0 10px rgba(255,255,255,0.2)",
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between",
    gap: "10px",
  },
  button: {
    flex: 1,
    padding: "10px",
    borderRadius: "8px",
    fontWeight: "bold",
    cursor: "pointer",
    background: "transparent",
    border: "1px solid #333",
    color: "#ccc",
    transition: "all 0.2s ease",
  },
  start: {
    border: "1px solid #00ff88",
    color: "#00ff88",
  },
  pause: {
    border: "1px solid #ffaa00",
    color: "#ffaa00",
  },
  reset: {
    border: "1px solid #ff3b3b",
    color: "#ff3b3b",
  },
};