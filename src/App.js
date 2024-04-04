import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { useState } from "react";
import { ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const arrayData = [
  { serialNo: 1, name: "Hrishikesh", age: 21 },
  { serialNo: 2, name: "Bhushan", age: 18 },
  { serialNo: 3, name: "Chinmay", age: 26 },
];

function App() {
  const [person, setPerson] = useState(arrayData);
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>List of People</h2>
      <ListGroup variant="flush">
        {person.map((person) => (
          <ListGroup.Item key={person.id}>
            Name : {person.name}, age : {person.age}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default App;
