import { useEffect, useState } from "react";
import "./App.css";
import TodoCard from "./TodoCard";
// TODO: answer here

const App = () => {
  const [data, setData] = useState([]);
  const[load, setLoad] = useState(false);

  function getData() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then ((response) => response.json())
    .then((data) => console.log(data));
    }
  // TODO: answer here

  useEffect(() => {
    getData();
    }, []);

    return (
      <div>
        {data.length === 0 ? <h1>Load...</h1> : <TodoCard todo={data} />}
      </div>
    )
  }

export default App;