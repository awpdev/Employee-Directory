import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function ResultList(props) {
  return (
    <ul className="list-group">
      {props.display.map(result => (
        <Card style={{ width: '25rem' }} key={result.login.uuid}>
        <Card.Img variant="top" src={result.picture.large} />
          <Card.Body>
            <Card.Title>{result.name.first} {result.name.last}</Card.Title>
            <Card.Text>
              Located in {result.location.city} {result.location.state}, {result.location.state}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </ul>
  );
}

export default ResultList;