import React from 'react'
import Note from'./components/Note'
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      //notes: this.state.notes oli tässä personsin tilalla matskussa
      persons: [],
      newName: '',
      newNumber: ''
    }
  }

  componentWillMount() {
    console.log('will mount')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        this.setState({ persons: response.data })
      })
  }

  handleNoteChange = (event) =>{
    console.log(event.target.value)
    //console.log(event.target.number)
    this.setState({ newName: event.target.value})
  }
  handleNumberChange = (event) =>{
    //console.log(event.target.value)
    console.log(event.target.value)
    this.setState({  newNumber: event.target.value })
  }

  addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      
      name: this.state.newName,
      number:this.state.newNumber,
      
      
    }
    var seis=false;

    var p=this.state.persons
      for(var i=0;i<p.length;i++){
        var a=p[i].name
        //console.log(a)
        if(a===this.state.newName){
          console.log('oh noes!')
          
          var seis=true;
          //break;
        }
      }
      //
      /*function hasDuplicates(p) {
        return (new Set(p)).size !== p.length;
    }
    console.log('onko kahdesti: ', hasDuplicates(p))*/
    //ei toiminu toi yo.
    console.log('seis-arvo: ',seis)

    if(seis===true){
      var pers = this.state.persons
      alert('Nimi löytyy jo!')
    }
    if(seis===false){
      var pers = this.state.persons.concat(noteObject)
    }
    //const perse = this.state.persons.concat(noteObject)
    
  
    
  
    this.setState({
      persons: pers,
      newName: '',
      newNumber: ''
    })
  }

  render() {
    console.log('render')
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <form onSubmit={this.addNote}>
        nimi:  <input 
          
          value={this.state.newName} 
          onChange={this.handleNoteChange}/>
        numero: <input
          number={this.state.newNumber}
          onChange={this.handleNumberChange}/>

          <button type="submit">lisää</button>
          
          
        </form>
       
        <h2>Numerot</h2>
        <ul>
        {this.state.persons.map(note => <Note key={note.name} note={note} />)}
        </ul>
        ...
      </div>
    )
  }
}

export default App
