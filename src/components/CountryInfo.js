import React from "react";
import countries from 'world-countries'
/*
const CountryInfo = ({ data }) => {
  return (

    /*<div>
      <h1>{country.name.common}</h1>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>
      <h3>Languages</h3>
      <ul>
        {Object.values(country.languages).map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <img src={country.flags.png} alt="flag" width="200px" />
    </div>

    <div>
        <h1>{data.name.common}</h1>

    </div>
  );
}
*/
class CountryInfo extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.data.name.common}</h1>
      </div>
    );
  }
}
export default CountryInfo;