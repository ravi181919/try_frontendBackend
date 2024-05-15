import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((res) => {
        setJokes(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div>
      <div className="title">
        <h1>Top {jokes.length} jokes.</h1>
      </div>
      <div className="content">
      {jokes.map((res, index) => (
        <div key={res.id} className="text">
          <h1>{res.title}</h1>
          <p>{res.content}</p>
        </div>
      ))}
      </div>
    </div>
  );
}

export default App;
