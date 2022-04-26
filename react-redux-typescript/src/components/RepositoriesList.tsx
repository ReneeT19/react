import { useState } from "react";
// import { useSelector } from "react-redux"; //to extract “value” from the global state
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const RepositoriesList: React.FC = () => {
const [term, setTerm] = useState('');
//access reduc functions; call this function and provide whatever action creators you want to load such as Search Repo
const { searchRepositories }= useActions();
//this below will get all redux states and immediately return it in this function
// const state = useSelector((state) => state); //first state: all states from redux, second state: returned value
//if we don't want to return the entire object, use properties and return state.properties and annotate state as any
// const { data, error, loading } = useSelector((state: any) => state.repositories); //destructure state to {data, error, loading} to be used in the future

// the state: any can be replaced by the code below to help redux understand what type of data is in redux store
const { data, error, loading } = useTypedSelector((state) => state.repositories);
// console.log(state); //you can inspect all the states stored in redux and properties from reducer

//the type of event can be found by hovering the mouse to onSubmit in line 13 but remove Handler keyword
//set up correct type for the callback event
const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); //to prevent React from refreshing the page whenever we click Search

    searchRepositories(term);
};

//set up event listener on the form
//consume API data that's deconstructed above
    return (<div>
        <form onSubmit={onSubmit}>
            <input value={term} onChange={e => setTerm(e.target.value)}/>
            <button>Search</button>
        </form>
        {error && <h3>{error}</h3>}
        {loading && <h3>Loading...</h3>}
        {!error && !loading && data.map((name) => <div key={name}>{name}</div>)}
    </div>
    );
};

export default RepositoriesList;