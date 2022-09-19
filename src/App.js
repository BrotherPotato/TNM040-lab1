import './App.css';
import countries from 'world-countries'
import CountryInfo from './components/CountryInfo.js';

const n = 5;
const m = 15;

function App() {
  console.log(countries)

  countries.sort((a, b) => {
    return b.area - a.area;
  });

  countries.filter((a) => {
    return a.name.common != "Antarctica";
  });
 
  return (
    <div>
      <h1>Lab-1-A-DOODLE-DOO</h1>
      <h2>Part 1</h2>
      <CountryInfo data={countries[0]}/>

      <h2>Part 2</h2>

      <div className='part2Div'>
        <div className='col1'>
          {countries.filter(country => { 
            return country.capital != "";
            //return country.name.common != "Antarctica";
          }).slice(0, n).map((c) => (
            <CountryInfo data={c} details={true} key={c.ccn3}/>
          ))}

        </div>
      
        <div className='col2'>
          {countries.filter(country => { 
            return country.capital != "";
            //return country.name.common != "Antarctica";
          }).slice(n, m).map((c) => (
            <CountryInfo data={c} details={false} key={c.ccn3}/>
          ))}
        </div>
      </div>
    </div>
  );
  
}

export default App;
