import React from 'react'
import ReactDOM from 'react-dom'

//const Osa = (props) => <p>{props.osa} {props.tehtavia}</p>

const Otsikko = (props) => <h1>{props.nimi}</h1>
const Sisalto = (props) => {
  const  {kurssi}  = props;
  const rivit = ()=> kurssi.osat.map(osa => <li key={osa.id}>{osa.nimi} {osa.tehtavia}</li>)
  //yo. rivin aikaansaamiseen meni 4 tuntia. Oon liian väsyny ny tähän :/
  //const tehtavat =()=>kurssi.osat.map(osa =><li key={osa.id}> {osa.tehtavia})</li>
  var lkm = kurssi.osat.reduce(function(sum,order){
    return sum+order.tehtavia
  },0)
  console.log(lkm)
  
  

  return(
    <div>
    <ul>
      {rivit()} 
      

    </ul>
    <p> Yhteensä {lkm} tehtävää. </p>
    </div>
  );
  
  
  
}
const Yhteensa = (props) => {
  const [osa1, osa2, osa3] = props.kurssi.osat
  //<Yhteensa kurssi={kurssi}  /> näin
  
  return(
    <p>yhteensä {osa1.tehtavia + osa2.tehtavia + osa3.tehtavia} tehtävää</p>
  )
}

const Kurssi = (props) =>{
  return(
    <div>
      <Otsikko nimi={props.kurssi.nimi}/>
      <Sisalto kurssi={props.kurssi}/>
      
     
    </div>
  )

}

const App = () => {
  const kurssi = {
    nimi: 'Half Stack -sovelluskehitys',
    osat: [
      {
        nimi: 'Reactin perusteet',
        tehtavia: 10,
        id: 1
      },
      {
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 7,
        id: 2
      },
      {
        nimi: 'Komponenttien tila',
        tehtavia: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <Kurssi kurssi={kurssi} />
    </div>
  )
}

ReactDOM.render(
  //<Sisalto />,
  <App />,
  document.getElementById('root')
)