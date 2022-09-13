import logo from './logo.svg';
import './App.css';
import countries from 'world-countries'
//import './components/CountryInfo.js';
import CountryInfo from './components/CountryInfo.js';
//import CountryInfo from './CountryInfo'

function App() {
  console.log(countries)
  console.log(CountryInfo)
  return (
    <div>
      <h1>COCK-A-DOODlE-DOO</h1>
      <p><CountryInfo data={countries[0]}/></p>
    </div>
  );
}



export default App;
