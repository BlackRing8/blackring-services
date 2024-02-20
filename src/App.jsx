import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AnimasiRoute from "./route/AnimasiRoute";

function App() {
  return (
    <>
      <div>
        <Router>
          <AnimasiRoute />
        </Router>
      </div>
    </>
  );
}

export default App;
