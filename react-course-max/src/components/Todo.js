function Todo(props) { // function should start as a capital
    function deleteHandler() {
        console.log('Click Here!!!');
        console.log(props.text);
    }

    return (
        <div className='card'>
        <h2>{props.text}</h2>
            <div>
                <button className='btn' onClick={deleteHandler}>Delete</button>
            </div>
      </div>
    );
}

export default Todo;