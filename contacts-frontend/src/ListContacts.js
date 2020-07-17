import React, {Component} from 'react'
import { Link } from 'react-router-dom' 
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class ListContacts extends Component{ 
    static PropTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired
}

state = {
    query: ''
}

updateQuery = (query) => {
    this.setState({ query: query.trim()})
}

clearQuery = () => {
    this.setState({query: ''})
}
//props is an object and it has one property contacts which is the array of contacts
// class ListContacts extends Component {
    // render() {
        // console.log('Props', this.props)

        //instead of creating a class as shown in the code above, you can put the entire code in a function - stateless functional component
        //use this when all the component needs is a `render` method 
        //since we pass props as the argument, "this" keyword can be taken out
        // function ListContacts(props) {
            render() {

                const { contacts, onDeleteContact } = this.props
                const { query } = this.state

                //only contacts that match specific search
                let showingContacts
                if(query) {
                    const match = new RegExp(escapeRegExp(query), 'i')
                    // match.test('Tyler')
                    showingContacts = contacts.filter((contact) => match.test(contact.name))
                } else {
                    showingContacts = contacts
                }

                showingContacts.sort(sortBy('name'))

            return(     // a javascript property that allows to modify each item in the array and returns a new array
                <div className='list-contacts'>
                {/* {JSON.stringify(this.state)} */}
                <div className='list-contacts-top'>
                    <input
                    className ='search-contacts'
                    type='text'
                    placeholder='Search contacts'
                    value={query}
                    onChange={(event) => this.updateQuery(event.target.value)}
                    />
                    <Link
                        to="/create"
                        // onClick={this.props.onNavigate}
                        className="add-contact"
                        >Add Contact</Link>
                </div>

                {showingContacts.length !== contacts.length && (
                    <div className='showing-contacts'>
                    <span>Now showing {showingContacts.length} of {contacts.length} total </span>
                    <button onClick={this.clearQuery}>Show all</button>
                    </div>
                )}

                <ol className='contact-list'>
                {/* {this.props.contacts.map((contact) => ( */}
                {showingContacts.map((contact) => (
                //UI for each item below;//whenever you use map function a key prop needs to be used
                <li key={contact.id} className='contact-list-item'> 
                <div className='contact-avatar' style={{
                    backgroundImage: `url(${contact.avatarURL})`
                }}></div>  
                <div className='contact-details'>
                    <p>{contact.name}</p>
                    <p>{contact.email}</p>
                    <p>{contact.cell}</p>
                </div>
                <button onClick={() => onDeleteContact(contact)} className='contact-remove'>
                Remove
                </button>
                </li>
            ))}  
            </ol>
                </div>
            
        )
    }
}
export default ListContacts
