import React,{Component} from 'react'
//props is an object and it has one property contacts which is the array of contacts
// class ListContacts extends Component {
    // render() {
        // console.log('Props', this.props)

        //instead of creating a class as shown in the code above, you can put the entire code in a function - stateless functional component
        //use this when all the component needs is a `render` method
        //since we pass props as the argument, "this" keyword can be taken out
        function ListContacts(props) {
            return(     // a javascript property that allows to modify each item in the array and returns a new array
             <ol className='contact-list'>
             {props.contacts.map((contact) => (
                //UI for each item below;//whenever you use map function a key prop needs to be used
                <li key={contact.id} className='contact-list-item'> 
                <div className='contact-avatar' style={{
                    backgroundImage: `url(${contact.avartarURL})`
                }}/>  
                <div className='contact-details'>
                    <p>{contact.name}</p>
                    <p>{contact.email}</p>
                </div>
                <button className='contact-remove'>
                Remove
                </button>
                </li>
            ))}  
            </ol>
        )
    }
export default ListContacts