import { useState } from "react";

import Modal from './Modal'
import Backdrop from './Backdrop'


function Todo(props) { // function should start as a capital
    const [modalIsOpen, setModalIsOpen] = useState(false); // always returns an array with two elements or use array destructuring
    
    function deleteHandler() {
        setModalIsOpen(true);
    }

    function closeModalHanler() {
        setModalIsOpen(false);
    }

    return (
        <div className='card'>
        <h2>{props.text}</h2>
            <div className='actions'>
                <button className='btn' onClick={deleteHandler}>Delete</button>
            </div>
            { modalIsOpen &&  (
                <Modal onCancel={closeModalHanler} onConfirm={closeModalHanler} />
            )}
            
            { modalIsOpen && <Backdrop onCancel={closeModalHanler}/>}
      </div>
    );
}

export default Todo;