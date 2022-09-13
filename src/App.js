import logo from './logo.svg';
import './App.css';
import countries from 'world-countries'
//import './components/CountryInfo.js';
import CountryInfo from './components/CountryInfo.js';
//import CountryInfo from './CountryInfo'

function App() {
  console.log(countries)
  //console.log(CountryInfo(countries[3]))
  return (
    <div>
      <h1>COCK-A-DOODlE-DOO</h1>
      
      {countries.map(c => (
        <CountryInfo data={c}/>
      ))}
    </div>
  );
}

//<CountryInfo data={countries[c]}/>

export default App;
