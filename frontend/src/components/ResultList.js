import React from 'react'

function ResultList(props) {
    return props.results.map((park) =>
    <div key={park.id}>
      <h1>{park.fullName}</h1>
      <img style={{maxWidth: "400px"}} src={park.images[0].url} alt=""/>
      <h3>Description</h3>
      <p>{park.description}</p>
      <h3>Weather Info</h3>
      <p>{park.weatherInfo}</p>
    </div>
);
}

export default ResultList;
