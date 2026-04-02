import React, { createContext, useContext, useState } from "react";

// Context Setup
const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [user, setUser] = useState("Guest");
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <GlobalContext.Provider value={{ user, setUser, darkMode, toggleTheme }}>
      {children}
    </GlobalContext.Provider>
  );
};

// Custom Hook
const useGlobal = () => useContext(GlobalContext);

// Glassmorphism + Modern Styles
const styles = {
  page: (dark) => ({
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: dark
      ? "radial-gradient(circle at 20% 20%, #1e293b, #020617 70%)"
      : "radial-gradient(circle at 20% 20%, #e0e7ff, #fdf4ff 70%)",
    transition: "all 0.6s ease",
    fontFamily: "Segoe UI, sans-serif",
  }),

  card: (dark) => ({
    width: "380px",
    padding: "40px",
    borderRadius: "25px",
    background: dark
      ? "rgba(17,24,39,0.75)"
      : "rgba(255,255,255,0.65)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    color: dark ? "#f1f5f9" : "#111827",
    boxShadow: dark
      ? "0 0px 40px rgba(255, 254, 254, 0.7)"
      : "0 0px 60px rgba(0, 0, 0, 0.74)",
    textAlign: "center",
    transition: "all 0.6s ease",
    border: dark
      ? "1px solid rgba(255,255,255,0.08)"
      : "1px solid rgba(255,255,255,0.6)",
  }),

  title: {
    fontSize: "32px",
    fontWeight: "700",
    letterSpacing: "0.5px",
    marginBottom: "12px",
  },

  subtitle: {
    opacity: 0.75,
    fontSize: "14px",
    marginBottom: "25px",
  },

  button: {
    width: "100%",
    padding: "14px",
    marginTop: "12px",
    borderRadius: "14px",
    border: "none",
    cursor: "pointer",
    fontSize: "15px",
    fontWeight: "600",
    background: "linear-gradient(135deg,#6366f1,#a855f7,#ec4899)",
    color: "white",
    boxShadow: "0 10px 25px rgba(139,92,246,0.5)",
    transition: "all 0.25s ease",
  },

  buttonSecondary: {
    width: "100%",
    padding: "14px",
    marginTop: "12px",
    borderRadius: "14px",
    border: "none",
    cursor: "pointer",
    fontSize: "15px",
    fontWeight: "600",
    background: "rgba(148,163,184,0.3)",
    color: "inherit",
    backdropFilter: "blur(10px)",
  },
};

// UI Component
const MainUI = () => {
  const { user, setUser, darkMode, toggleTheme } = useGlobal();

  return (
    <div style={styles.page(darkMode)}>
      <div style={styles.card(darkMode)}>
        <div style={styles.title}>✨ Welcome {user}</div>

        <div style={styles.subtitle}>
          React Context Global State • Modern UI Demo
        </div>

        <button
          style={styles.button}
          onMouseOver={(e) => (e.target.style.transform = "scale(1.04)")}
          onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
          onClick={() => setUser("Roop")}
        >
          Set User
        </button>

        <button
          style={styles.buttonSecondary}
          onClick={() => setUser("Guest")}
        >
          Reset User
        </button>

        <button
          style={styles.button}
          onMouseOver={(e) => (e.target.style.transform = "scale(1.04)")}
          onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
          onClick={toggleTheme}
        >
          Toggle Theme
        </button>
      </div>
    </div>
  );
};

// Main App Export
export default function App() {
  return (
    <GlobalProvider>
      <MainUI />
    </GlobalProvider>
  );
}
