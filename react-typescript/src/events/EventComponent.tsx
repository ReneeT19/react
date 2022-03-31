const EventComponent: React.FC = () => {
    //type standalone event handler
    //changeEvent for radio button, text input, checkbox (something that changes)
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.type);
    }; 

    const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
        console.log(event); //event. will show you all kinds of actions you can do with event object
    };

    return <div>
        <h3>
            onChange Event Handler Example<br></br>
            <input onChange={onChange} />
        </h3>
        <h3>onDragStart Event Handler Example</h3>
        <div draggable onDragStart={onDragStart}>Drag me!</div>
    </div>
};

export default EventComponent;