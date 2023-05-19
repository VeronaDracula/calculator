import React from 'react';

import './Actions.css';

import ActionButton from '../ActionButton/ActionButton.js';

function Actions(props) {


    const btnClass = (
        `${props.activeStatus  ? 'actions__container' : 'actions__container actions__container--inactive'}`
    );


    return (
        <div className="actions">
            <div className={btnClass}>
                <ActionButton buttonValue='/' handleAction={props.handleAction}/>
                <ActionButton buttonValue='x' handleAction={props.handleAction}/>
                <ActionButton buttonValue='-' handleAction={props.handleAction}/>
                <ActionButton buttonValue='+' handleAction={props.handleAction}/>
                <ActionButton buttonValue='C' handleAction={props.handleAction}/>
            </div>
        </div>
    );
}

export default Actions;