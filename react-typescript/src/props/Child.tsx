interface ChildProps {
    color: string;
}

//create an interface and then apply it in the component below
//there are 3 or 4 methods; one way is to add props or destructure it to {color}
export const Child = ({ color }: ChildProps) => { //export Child component to talk to Parent
    return (
        <><h1>Hi I am a Child! My color is {color} </h1></> //use the color prop here
    )
}
//in Parent, give the color prop a string value to show it

//A better way to define function component with TS
export const ChildAsFC: React.FC<ChildProps> = ({ color }) => {
    return <h1>I'm {color} in function component</h1>
}