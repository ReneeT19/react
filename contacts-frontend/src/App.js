import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import ListContacts from './ListContacts'
import CreateContact from './CreateContact'
import * as ContactsAPI from './utils/ContactsAPI'
 
class App extends Component {
//pass contact array to this listcontacts component and to access the array go to listcontacts js to add console...
  state = {
    // screen: 'list',
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

  createContact(contact) {
    ContactsAPI.create(contact).then(contact => {
      this.setState(state => ({
        contacts: state.contacts.concat([ contact ])
      }))
    })
  }

  render() {
    return (
      <div className='app'>
          {/* {this.state.screen === 'list' && ( */} 
          {/* // onNavigate={() => { */}
          {/* //   this.setState({ screen: 'create'}) */}
      <Route exact path="/" render={() => (
        <ListContacts 
          onDeleteContact={this.removeContact} 
          contacts={this.state.contacts}/>
      )}/>
              
        <Route path="/create" render={({history}) => (
          <CreateContact
            onCreateContact={(contact) => {
              this.createContact(contact)
              history.push('/')
            }}
          />
        )}/>
          {/* // {this.state.screen === 'create' && ( */}
         </div>
    )
  }
}
export default App