import { useState } from "react";

// if no props are used, no need to add <> or interface
const GuestList: React.FC = () => {
    const [name, setName] = useState(''); //create the function/variable with initial value of empty string   
    return <div> 
        <h3>Guest List</h3>
        <input value={name} onChange={(e) => setName(e.target.value)}/>
        <button>Add Guest</button>
    </div>;
};

export default GuestList;