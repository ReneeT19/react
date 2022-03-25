import { useState } from "react";

// if no props are used, no need to add <> or interface
const GuestList: React.FC = () => {
    const [name, setName] = useState(''); //create the function/variable with initial value of empty string   
    //create an array of guests
    const [guests, setGuests] = useState<string[]>([]); //TS feature: add <string[]> to tell TS what array it is otherwise it sees it as never[]

    //define onClick function here instead of inline and pass it into onClick in button
    const onClick = () => {
        setName('');
        setGuests([...guests,name]); //if just give ([name]) it will delete previous names entered
    };

    return <div> 
        <h3>Guest List</h3>
        <ul>
            {guests.map(guest => <li key={guest}>{guest}</li>)}
        </ul>
        <input value={name} onChange={(e) => setName(e.target.value)}/>
        <button onClick={onClick}>Add Guest</button>
    </div>;
};

export default GuestList;