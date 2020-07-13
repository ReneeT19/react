import React, { Component } from 'react'
import ListContacts from './ListContacts'

 
class App extends Component {
//pass contact array to this listcontacts component and to access the array go to listcontacts js to add console...
  state = {
    contacts: [
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
  }
  
  removeContact = (contact) => {
    this.setState((state) => ({
      contacts: state.contacts.filter((c) => c.id !== contact.id)
    }))
  }


  render() {
    return (
      <div>
          <ListContacts 
          onDeleteContact={this.removeContact} 
          contacts={this.state.contacts}/>
      </div>
    )
  }
}
export default App