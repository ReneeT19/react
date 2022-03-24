interface ChildProps {
    color: string;
    onClick: () => void; //we don't expect onClick function to return anything so "void"
}

//create an interface and then apply it in the component below
//there are 3 or 4 methods; one way is to add props or destructure it to {color}
export const Child = ({ color, onClick }: ChildProps) => { //export Child component to talk to Parent
    return ( <>
            <h1>Hi I am a Child! My color is {color} </h1>
            <button onClick={onClick}>Click me</button>  
        </> //use the color prop here
    )
}
//in Parent, give the color prop a string value to show it

//A better way to define function component with TS
//without using () after return, add <> right after return (same line) and ; after </>
//One advantage of using ChildAsFC is ChildProps can receive any children prop inserted in Parent.tsx
export const ChildAsFC: React.FC<ChildProps> = ({ color, onClick, children }) => {
    return <> 
        <h1>Hi {color}</h1>
        {children}
        <button onClick={onClick}>Click me</button>
    </>;
}