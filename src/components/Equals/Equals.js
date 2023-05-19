import React from 'react';


import './Equals.css';

function Equals(props) {

    function showresult () {
        props.handleEquals(props.handleEquals);
    }

    const btnClass = (
        `${props.activeStatus  ? 'equals__container' : 'equals__container equals__container--inactive'}`
    );


    return (
        <div className="equals">
            <div className={btnClass}>
                <button className="equals__btn" onClick={showresult}>=</button>
            </div>
        </div>
    );
}

export default Equals;