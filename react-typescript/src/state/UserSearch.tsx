import { useState } from "react";

const users = [
    { name: 'Amber', age: 32},
    { name: 'Josh', age: 36},
    { name: 'Mary', age: 20}
];

const UserSearch: React.FC = () => {
    const [name, setName] = useState('');
    //user state could be undefined or {name: string, age: number}, so a generic type can be used
    const [user, setUser] = useState<{ name: string, age: number} | undefined>(); 

    const onClick = () => { // the first name is from the users array, the second is from the const [name]
        const foundUser = users.find((user) => {
            return user.name === name;
        });
        // console.log(foundUser);
        setUser(foundUser);
    };

    // {user && user.name} means only if user exists, it will render user.name;
    //otherwise {user.name} will show error because user could be undefined
    return <div> 
        <h3>User Search</h3>
        <input value={name} onChange={e => setName(e.target.value)} />
        <button onClick={onClick}>Find User</button>
        <div> 
            {user && user.name} 
            {user && user.age}
        </div>
    </div>;
};

export default UserSearch