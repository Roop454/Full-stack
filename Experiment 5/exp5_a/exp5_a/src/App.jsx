import { lazy, Suspense } from "react";
import "./index.css";

const Dashboard = lazy(() => import("./components/Dashboard"));

function App() {
  return (
    <div style={{ backgroundColor: "#0f0f0f", minHeight: "100vh", color: "white" }}>
      <Suspense
        fallback={
          <h2 style={{ color: "#00ffff", padding: "40px", textAlign: "center" }}>
            Loading Dashboard...
          </h2>
        }
      >
        <Dashboard />
      </Suspense>
    </div>
  );
}

export default App;
