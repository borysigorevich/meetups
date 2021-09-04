import React from 'react';

const Modal = (props) => {
    const cancelHandler = () => {
        props.onCancel()
    }

    const confirmHandler = () => {
        props.onConfirm()
    }

    return (
        <div className={'modal'}>
            <p>Are yoru sure?</p>
            <button className={'btn btn--alt'} onClick={cancelHandler}>Cancel</button>
            <button className={'btn'} onClick={confirmHandler}>Confirm</button>
        </div>
    );
};

export default Modal;