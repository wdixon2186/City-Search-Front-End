// import React, { Component } from "react";
// import Card from "react-bootstrap/Card";
// import Accordion from "react-bootstrap/Accordion";
// import listOfCities from "../cities-data.json";

// export default class CardComponent extends Component {
//   constructor() {
//     super();
//     this.state = {};
//   }
//   render() {
//     let showCity = this.props.match.params.city; // this.props.match.params.city
//     console.log(showCity);
//     let city = listOfCities.filter(city => city.general.city === showCity);
//     let population = city[0].population;
//     let general = city[0].general;
//     let bestPlacesData = city[0].bestPlacesData;
//     let ageAndGender = city[0].ageAndGender;
//     let raceAndOrigin = city[0].raceAndOrigin;
//     let veterans = city[0].veterans;
//     let housing = city[0].housing;
//     let households = city[0].households;
//     let education = city[0].education;
//     let employmentAndHealth = city[0].employmentAndHealth;
//     let business = city[0].business;
//     let geography = city[0].geography;

//     let populationList = Object.keys(population).map(key => {
//       return (
//         <div>
//           <li>
//             {String(key)}: {population[key]}
//           </li>
//         </div>
//       );
//     });
//     let bestPlacesDataList = Object.keys(bestPlacesData).map(key => {
//       return (
//         <div>
//           <li>
//             {String(key)}: {bestPlacesData[key]}
//           </li>
//         </div>
//       );
//     });
//     let generalList = Object.keys(general).map(key => {
//       return (
//         <div>
//           <li>
//             {String(key)}: {general[key]}
//           </li>
//         </div>
//       );
//     });
//     let ageAndGenderList = Object.keys(ageAndGender).map(key => {
//       return (
//         <div>
//           <li>
//             {String(key)}: {ageAndGender[key]}
//           </li>
//         </div>
//       );
//     });
//     let raceAndOriginList = Object.keys(raceAndOrigin).map(key => {
//       return (
//         <div>
//           <li>
//             {String(key)}: {raceAndOrigin[key]}
//           </li>
//         </div>
//       );
//     });
//     let veteransList = Object.keys(veterans).map(key => {
//       return (
//         <div>
//           <li>
//             {String(key)}: {veterans[key]}
//           </li>
//         </div>
//       );
//     });
//     let housingList = Object.keys(housing).map(key => {
//       return (
//         <div>
//           <li>
//             {String(key)}: {housing[key]}
//           </li>
//         </div>
//       );
//     });
//     let householdsList = Object.keys(households).map(key => {
//       return (
//         <div>
//           <li>
//             {String(key)}: {households[key]}
//           </li>
//         </div>
//       );
//     });
//     let educationList = Object.keys(education).map(key => {
//       return (
//         <div>
//           <li>
//             {String(key)}: {education[key]}
//           </li>
//         </div>
//       );
//     });
//     let employmentAndHealthList = Object.keys(employmentAndHealth).map(key => {
//       return (
//         <div>
//           <li>
//             {String(key)}: {employmentAndHealth[key]}
//           </li>
//         </div>
//       );
//     });
//     let businessList = Object.keys(business).map(key => {
//       return (
//         <div>
//           <li>
//             {String(key)}: {business[key]}
//           </li>
//         </div>
//       );
//     });
//     let geographyList = Object.keys(geography).map(key => {
//       return (
//         <div>
//           <li>
//             {String(key)}: {geography[key]}
//           </li>
//         </div>
//       );
//     });
//     return (
//       <div>
//         <Accordion defaultActiveKey="0">
//           <Card>
//             <Accordion.Toggle as={Card.Header} eventKey="0">
//               <h4 onClick={this.population1}>Population</h4>
//             </Accordion.Toggle>
//             <Accordion.Collapse eventKey="0">
//               <Card.Body>
//                 <ul>
//                   <li>{populationList}</li>
//                 </ul>
//               </Card.Body>
//             </Accordion.Collapse>
//           </Card>
//           <Card>
//             <Accordion.Toggle as={Card.Header} eventKey="1">
//               <h4 onClick={this.bestPlacesData1}>Best Places Data</h4>
//             </Accordion.Toggle>
//             <Accordion.Collapse eventKey="1">
//               <Card.Body>
//                 <ul>{bestPlacesDataList}</ul>
//               </Card.Body>
//             </Accordion.Collapse>
//           </Card>
//           <Card>
//             <Accordion.Toggle as={Card.Header} eventKey="2">
//               <h4 onClick={this.general1}>General</h4>
//             </Accordion.Toggle>
//             <Accordion.Collapse eventKey="2">
//               <Card.Body>
//                 <ul>{generalList}</ul>
//               </Card.Body>
//             </Accordion.Collapse>
//           </Card>
//           <Card>
//             <Accordion.Toggle as={Card.Header} eventKey="3">
//               <h4 onClick={this.ageAndGender1}>Age and Gender</h4>
//             </Accordion.Toggle>
//             <Accordion.Collapse eventKey="3">
//               <Card.Body>
//                 <ul>{ageAndGenderList}</ul>
//               </Card.Body>
//             </Accordion.Collapse>
//           </Card>
//           <Card>
//             <Accordion.Toggle as={Card.Header} eventKey="4">
//               <h4 onClick={this.raceAndOrigin1}>Race and Origin</h4>
//             </Accordion.Toggle>
//             <Accordion.Collapse eventKey="4">
//               <Card.Body>
//                 <ul>{raceAndOriginList}</ul>
//               </Card.Body>
//             </Accordion.Collapse>
//           </Card>
//           <Card>
//             <Accordion.Toggle as={Card.Header} eventKey="5">
//               <h4 onClick={this.veterans1}>Veterans</h4>
//             </Accordion.Toggle>
//             <Accordion.Collapse eventKey="5">
//               <Card.Body>
//                 <ul>{veteransList}</ul>
//               </Card.Body>
//             </Accordion.Collapse>
//           </Card>
//           <Card>
//             <Accordion.Toggle as={Card.Header} eventKey="6">
//               <h4 onClick={this.housing1}>Housing</h4>
//             </Accordion.Toggle>
//             <Accordion.Collapse eventKey="6">
//               <Card.Body>
//                 <ul>{housingList}</ul>
//               </Card.Body>
//             </Accordion.Collapse>
//           </Card>
//           <Card>
//             <Accordion.Toggle as={Card.Header} eventKey="7">
//               <h4 onClick={this.households1}>Households</h4>
//             </Accordion.Toggle>
//             <Accordion.Collapse eventKey="7">
//               <Card.Body>
//                 <ul>{householdsList}</ul>
//               </Card.Body>
//             </Accordion.Collapse>
//           </Card>
//           <Card>
//             <Accordion.Toggle as={Card.Header} eventKey="8">
//               <h4 onClick={this.education1}>Education</h4>
//             </Accordion.Toggle>
//             <Accordion.Collapse eventKey="8">
//               <Card.Body>
//                 <ul>{educationList}</ul>
//               </Card.Body>
//             </Accordion.Collapse>
//           </Card>
//           <Card>
//             <Accordion.Toggle as={Card.Header} eventKey="9">
//               <h4 onClick={this.employmentAndHealth1}>Employment And Health</h4>
//             </Accordion.Toggle>
//             <Accordion.Collapse eventKey="9">
//               <Card.Body>
//                 <ul>{employmentAndHealthList}</ul>
//               </Card.Body>
//             </Accordion.Collapse>
//           </Card>
//           <Card>
//             <Accordion.Toggle as={Card.Header} eventKey="10">
//               <h4 onClick={this.business1}>Business</h4>
//             </Accordion.Toggle>
//             <Accordion.Collapse eventKey="10">
//               <Card.Body>
//                 <ul>{businessList}</ul>
//               </Card.Body>
//             </Accordion.Collapse>
//           </Card>
//           <Card>
//             <Accordion.Toggle as={Card.Header} eventKey="11">
//               <h4 onClick={this.geography1}>Geography</h4>
//             </Accordion.Toggle>
//             <Accordion.Collapse eventKey="11">
//               <Card.Body>
//                 <ul>{geographyList}</ul>
//               </Card.Body>
//             </Accordion.Collapse>
//           </Card>
//         </Accordion>
//       </div>
//     );
//   }
// }
