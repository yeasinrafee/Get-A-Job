import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";

function App() {
  return (
    <div>
      <div className="bg-red-50">
        <Header />
      </div>
      <Outlet />
    </div>
  );
}

export default App;
