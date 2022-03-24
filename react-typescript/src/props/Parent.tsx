import { Child, ChildAsFC } from './Child';

const Parent = () => {  //in Parent, give the color prop a string value to show it
    return (
    <>
    <h1>Hi I am a Parent</h1>
    <ChildAsFC color="red" onClick={() => console.log("clicked")}/>
    {/* <ChildAsFC color="red" onClick={() => console.log("clicked")}>
        abcde
    </ChildAsFC> */}
    </>
    )
};

export default Parent; //export Parent component to make it a module