import React, { useState } from "react";
import ListGroupComponent from "./components/ListGroup";
import "bootstrap/dist/css/bootstrap.min.css";

const arrayData = [
  { serialNo: 1, name: "Hrishikesh", age: 21 },
  { serialNo: 2, name: "Bhushan", age: 18 },
  { serialNo: 3, name: "Chinmay", age: 26 },
  { serialNo: 4, name: "John", age: 22 },
  { serialNo: 5, name: "Alex", age: 24 },
  { serialNo: 6, name: "Ana", age: 26 },
  { serialNo: 7, name: "Alice", age: 20 },
];

function App() {
  const [person, setPerson] = useState(arrayData);
  return <ListGroupComponent person={person} />;
}

export default App;
