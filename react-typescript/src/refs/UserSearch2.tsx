import { useState, useRef, useEffect } from "react";

const users = [
    { name: 'Amber', age: 32},
    { name: 'Josh', age: 36},
    { name: 'Mary', age: 20}
];

const UserSearch2: React.FC = () => {
    //create a ref to refer to html elements (since we use it for input, the type is htmlinputelement)
    //give it a starting value of null to get rid of error in input tag below
    const inputRef = useRef<HTMLInputElement | null>(null);
    //you can use any as well
    //const inputRef = useRef<any>(null);
    const [name, setName] = useState('');
    //user state could be undefined or {name: string, age: number}, so a generic type can be used
    const [user, setUser] = useState<{ name: string, age: number} | undefined>(); 

    useEffect(() => {
        if(!inputRef.current) {
            return;
        }
        inputRef.current.focus() //this will return HTML element
    }, []);

    const onClick = () => { // the first name is from the users array, the second is from the const [name]
        const foundUser = users.find((user) => {
            return user.name === name;
        });
        // console.log(foundUser);
        setUser(foundUser);
    };

    // {user && user.name} means only if user exists, it will render user.name;
    //otherwise {user.name} will show error because user could be undefined
    //inline event handler for onChange
    return <div> 
        <h3>User Search using inputRef</h3>
        <input ref={inputRef} value={name} onChange={e => setName(e.target.value)} /> 
        <button onClick={onClick}>Find User</button>
        <div> 
            {user && user.name} {user && user.age}
        </div>
    </div>;
};

export default UserSearch2