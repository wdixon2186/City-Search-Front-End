import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div>
        <h1>About </h1>
        <h3>Who this site is for </h3>
        <p>
          Thinking about moving? Scroll through the ranked list, or use the
          filter to see if the place you've been considering is among the top
          ranked in the U.S.
        </p>
        <h3>Where our list came from </h3>
        <p>
          We pulled the top 50 cities in the United States as ranked by{" "}
          <a
            href="https://realestate.usnews.com/places/rankings/best-places-to-live"
            target="_blank"
            rel="noopener noreferrer"
          >
            U.S News Real Estate
          </a>{" "}
          based on{" "}
          <a
            href="https://www.census.gov/quickfacts/fact/table/US/PST045218"
            target="_blank"
            rel="noopener noreferrer"
          >
            U.S. Census Data
          </a>
          . For further information on the methods used to compile this list,
          visit U.S. News'{" "}
          <a
            href="https://realestate.usnews.com/places/methodology"
            target="_blank"
            rel="noopener noreferrer"
          >
            How We Rank the Best Places to Live & Retire page
          </a>
          .
        </p>
        <h3>Who we are </h3>
        <p>
          We met in General Assembly's Software Engineering Immersive-Remote
          program. This is a project we worked on as a group within the program.
          Check out our individual GitHub pages by clicking our names below.
        </p>
      </div>
    );
  }
}

export default About;
