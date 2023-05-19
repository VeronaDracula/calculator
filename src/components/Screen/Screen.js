import React from 'react';

import './Screen.css';

import { NumberContext } from '../../context/NumberProvider.js';

function Screen() {


    const number = React.useContext(NumberContext);

    const textClass = (
        `${number.length < 9  ? 'screen__text' : 'screen__text screen__text--type--long'}`
    );



    return (
        <div className="screen">
            <p className={textClass}>{number}</p>
        </div>
    );
}

export default Screen;
