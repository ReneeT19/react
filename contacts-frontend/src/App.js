import React, { Component } from 'react'
import ListContacts from './ListContacts'

const contacts = [
  {
    "id": "erik",
    "name": "Erik Thomsen",
    "email": "etho201@gmail.com",
    "avartarURL": "http://localhost:5001/erik.jpg"
  },
  {
    "id": "renee",
    "name": "Renee Thomsen",
    "email": "rcthomsen19@gmail.com",
    "avartarURL": "http://localhost:5001/renee.jpg"
  }
]

class App extends Component {
//pass contact array to this listcontacts component and to access the array go to listcontacts js to add console...

  render() {
    return (
      <div>
          <ListContacts contacts={contacts}/>
      </div>
    )
  }
}
export default App