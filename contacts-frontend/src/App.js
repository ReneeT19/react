import React, { Component } from 'react'
import ListContacts from './ListContacts'
import * as ContactsAPI from './utils/ContactsAPI'
 
class App extends Component {
//pass contact array to this listcontacts component and to access the array go to listcontacts js to add console...
  state = {
    contacts: []
      // {
      //   "id": "erik",
      //   "name": "Erik Thomsen",
      //   "email": "etho201@gmail.com",
      //   "avartarURL": "http://localhost:5001/erik.jpg"
      // },
    //   {
    //     "id": "renee",
    //     "name": "Renee Thomsen",
    //     "email": "rcthomsen19@gmail.com",
    //     "avartarURL": "http://localhost:5001/renee.jpg"
    //   }
    // ]
  }

  componentDidMount() {
    ContactsAPI.getAll().then((contacts) => {
      this.setState({contacts})
    })
  }
  
  removeContact = (contact) => {
    this.setState((state) => ({
      contacts: state.contacts.filter((c) => c.id !== contact.id)
    }))
    ContactsAPI.remove(contact)
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