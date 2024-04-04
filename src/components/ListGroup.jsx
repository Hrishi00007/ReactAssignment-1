import React from "react";
import { Container, ListGroup } from "react-bootstrap";

export default function ListGroupComponent({ person }) {
  return (
    <Container style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>List of People</h2>
      <ListGroup variant="black" numbered vertical>
        {person.map((person) => (
          <ListGroup.Item key={person.serialNo}>
            Name: {person.name}, Age: {person.age}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}
