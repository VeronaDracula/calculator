import React from 'react';

import './StartPlace.css';

import Screen from '../Screen/Screen.js';
import Actions from '../Actions/Actions.js';
import Numbers from '../Numbers/Numbers.js';
import Equals from '../Equals/Equals.js';

function StartPlace(props) {


    return (
        <section className="start-place">
            <Screen/>
            <Actions/>
            <Numbers/>
            <Equals/> 
        </section> 
    );
}

export default StartPlace;