import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

const url = "http://localhost:3001/";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        alert(error.response.data.error);
      });
  }, []);

  return (
    <div style={{ margin: 50 }}>
      <h1>🌻My tasks:</h1>
      <ol>
        {tasks.map((task) => (
          <li key={task.id}> {task.description}</li>
        ))}
      </ol>
    </div>
  );
}

export default App;
