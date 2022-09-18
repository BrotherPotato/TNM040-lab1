import logo from './logo.svg';
import './App.css';
import countries from 'world-countries'
//import './components/CountryInfo.js';
import CountryInfo from './components/CountryInfo.js';
//import CountryInfo from './CountryInfo'

const n = 5;
const m = 15;

function App() {
  console.log(countries)
  //console.log(CountryInfo(countries[3]))
  //countries.sort((a, b) => (a.population > b.population) ? 1 : -1);
  countries.sort((a, b) => {
    return b.area - a.area;
  });

  countries.filter((a) => {
    return a.name.common != "Antarctica";
  });
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
      {/*{countries.slice(0, n).map((c) => (
        <CountryInfo data={c}/>
      ))} */}
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
