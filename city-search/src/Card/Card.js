// import React, { Component } from "react";
// import { Card, Accordion } from "react-bootstrap";

// export default class CardComponent extends Component {
//   constructor() {
//     super();
//     this.state = {};
//   }

//   render() {
//     let list = Object.keys(this.props.name).map(key => {
//       return (
//         <div>
//           <li>
//             {String(key)}: {this.props.name[key]}
//           </li>
//         </div>
//       );
//     });

//     return (
//       <div>
//         <Card>
//           <Accordion.Toggle as={Card.Header} eventKey={this.props.key}>
//             <h4>Population</h4>
//           </Accordion.Toggle>
//           <Accordion.Collapse eventKey={this.props.key}>
//             <Card.Body>
//               <ul>
//                 <li>{list}</li>
//               </ul>
//             </Card.Body>
//           </Accordion.Collapse>
//         </Card>
//       </div>
//     );
//   }
// }
