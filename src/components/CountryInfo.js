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
/*
class CountryInfo extends React.Component {
    constructor(data) {
        super(data);
      }

  render() {
    
    return (
      <div>
        <p>{this.data.name.common}</p>
      </div>
    );
  }
}
*/

const CountryInfo = ({ data , details}) => {
  return (
    <div className="country_box">
      <div className="top">
        <p className="country_name">{data.name.common}</p>
        <p className="area">
            {(data.area / Math.pow(10, 6)).toFixed(1)} million km<sup>2</sup>
        </p>
      </div>
      <div className="bottom">
        <p className="capital">Capital: {data.capital}</p>
        <p className="capital">Region: {data.subregion}</p>
        
      </div>
      <div className="bar">
        <div className="bar_inner" style={{width: (data.area / 17098242 * 100) + "%"}}></div>
      </div>
      
    </div>
  );
};
/*
function ExampleApp(data) {
    
    return (
      <div>
        <h2>CountryInfo</h2>
        <CountryInfo data={data} />
      </div>
    );
  }
  export default ExampleApp;

*/
export default CountryInfo;