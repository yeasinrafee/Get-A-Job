import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("jobCategory.json")
      .then((res) => res.json())
      .then((d) => setData(d));
  }, []);

  console.log(data);
  return (
    <div className="App">
      <h1>Hello world</h1>
      {data.map((job) => (
        <img src={job.img} alt="" />
      ))}
    </div>
  );
}

export default App;
