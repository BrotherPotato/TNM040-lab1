import logo from './logo.svg';
import './App.css';
import countries from 'world-countries'
//import './components/CountryInfo.js';
import CountryInfo from './components/CountryInfo.js';
//import CountryInfo from './CountryInfo'

const n = 15;

function App() {
  console.log(countries)
  //console.log(CountryInfo(countries[3]))
  //countries.sort((a, b) => (a.population > b.population) ? 1 : -1);
  var countries_sorted = countries.sort((a, b) => (b.area > a.area));
  //countries.reverse();
  /*
  if(c < n) {
    return (
      <div>
        <CountryInfo data={c}/>
      </div>
    );
  }
  */
 
  return (
    <div>
      <h1>COCK-A-DOODlE-DOO</h1>
      <h2>Part 1</h2>
      <CountryInfo data={countries[0]}/>
      <h2>Part 2</h2>
      {countries_sorted.slice(0, n).map((c) => (
        <CountryInfo data={c}/>
      ))}

      {/*{countries.map(c => {
        if(c < n) {
          <CountryInfo data={c}/>
        }
        
      })}*/}
      

    </div>
  );
  
}

//<CountryInfo data={countries[c]}/>

export default App;
