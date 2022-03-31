import { Component } from  'react';
import ReactDOM from 'react-dom';

//create User interface to make the code cleaner
interface User {
    name: string;
    age: number;
}

//create an array of objects to pass as a props in the component
interface UserSearchProps {
    users: User[]
}

interface UserSearcState {
    name: string;
    user: User | undefined;
}
//create class-based components
class UserSearchClassComponent extends Component<UserSearchProps> {
    //the useState const can be created like this below in class component:
    state: UserSearcState= {  //since it's hard to define user type here, create an interface and use it as inner annotation
        name: '',
        user: undefined
    };

    //callback functions might show undefined or unpredictable value for this, changing to arrow function solves the problem
    onClick = () => { 
        const foundUser = this.props.users.find((user) => {
            return user.name === this.state.name;
        });
        // console.log(foundUser);
        this.setState({user: foundUser});
    }

    render() {
        const { name, user } = this.state; //create a const to clean up the code

        return <div> 
        <h3>User Search built in Class Component</h3>
        <input value={name} onChange={e => this.setState({name: e.target.value})} /> 
        <button onClick={this.onClick}>Find User</button>
        <div> 
            {user && user.name} {user && user.age}
        </div>
    </div>;
    }
}
export default UserSearchClassComponent;