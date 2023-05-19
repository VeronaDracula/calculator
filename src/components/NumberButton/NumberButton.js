import React from 'react';
import './NumberButton.css';

function NumberButton(props) {

    function sendNumber () {
        props.handleSetDisplayValue(props.buttonValue);
    }


    return (
        <button className="numbers__btn" onClick={sendNumber}>{props.buttonValue}</button>
    );
}

export default NumberButton; 


// onClick={function(){ props.onCardDelete(); cardDataRead(); props.onButtonPopupTextRead('Да')}}