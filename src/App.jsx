import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((d) => setData(d));
  }, []);

  console.log(data);
  return (
    <div className="App">
      <h1>Hello world</h1>
      {data.map((job) => (
        <ul>
          {job.type.map((t) => (
            <li>{t}</li>
          ))}
        </ul>
      ))}
    </div>
  );
}

export default App;
