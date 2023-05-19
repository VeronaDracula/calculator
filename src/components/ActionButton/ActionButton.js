import React from 'react';

import './ActionButton.css';

function ActionButton(props) {


function sendAction () {
    props.handleAction(props.buttonValue);
}



    return (
        <button className="actions__btn" onClick={sendAction}>{props.buttonValue}</button>
    );
}

export default ActionButton;