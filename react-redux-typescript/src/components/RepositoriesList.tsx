import { useState } from "react";
import { useActions } from "../hooks/useActions";

const RepositoriesList: React.FC = () => {
const [term, setTerm] = useState('');
const { searchRepositories }= useActions();
//access reduc functions; call this function and provide whatever action creators you want to load such as Search Repo

//the type of event can be found by hovering the mouse to onSubmit in line 13 but remove Handler keyword
//set up correct type for the callback event
const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); //to prevent React from refreshing the page whenever we click Search

    searchRepositories(term);
};

//set up event listener on the form
    return (<div>
        <form onSubmit={onSubmit}>
            <input value={term} onChange={e => setTerm(e.target.value)}/>
            <button>Search</button>
        </form>
    </div>
    );
};

export default RepositoriesList;