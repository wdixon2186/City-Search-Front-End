import React, { Component } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "../Card/Card";

export default class AccordionComponent extends Component {
  render() {
    return (
      <div>
        <Accordion defaultActiveKey="0">
          <Card />
          {/* <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              Parent Name
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <ul>
                  <li>First Child: Value</li>
                  <li>Second Child: Value</li>
                  <li>Third Child: Value</li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card> */}
        </Accordion>
      </div>
    );
  }
}

// let population = city[0].population;
// // console.log(population);

// // let general = population.map(info => {
// //   console.log(info);
// // });

// var result = Object.keys(population).map(function(key) {
//   return [String(key), population[key]];
// });
// }
// for (let i = 0; i < result.length; i++) {
//   let x = result[i];
//   return x;
// }
