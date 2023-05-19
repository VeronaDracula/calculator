import React from 'react';
import './Numbers.css';

import NumberButton from '../NumberButton/NumberButton'; 

function Numbers(props) {

    const btnNumberClass = (
        `${props.activeStatus  ? 'numbers__main' : 'numbers__main numbers__main--inactive'}`
    );

    const btnClass = (
        `${props.activeStatus  ? 'numbers__wrapper' : 'numbers__wrapper numbers__wrapper--inactive'}`
    );

    const numberArr = [7, 8, 9,4, 5, 6, 1, 2, 3];



    return (
        <div className="numbers" >
            <div className={btnNumberClass}>

            {numberArr.map((value) => (<NumberButton buttonValue={value}
                                                    key={value}
                                                    handleSetDisplayValue={props.handleSetDisplayValue}
                                                    // countNumber={props.countNumber}
                                                    />)
                                            )}

                {/* <NumberButton buttonValue={7} handleSetDisplayValue={props.handleSetDisplayValue}/>
                <NumberButton buttonValue={8} handleSetDisplayValue={props.handleSetDisplayValue}/>
                <NumberButton buttonValue={9} handleSetDisplayValue={props.handleSetDisplayValue}/>

                <NumberButton buttonValue={4} handleSetDisplayValue={props.handleSetDisplayValue}/>
                <NumberButton buttonValue={5} handleSetDisplayValue={props.handleSetDisplayValue}/>
                <NumberButton buttonValue={6} handleSetDisplayValue={props.handleSetDisplayValue}/>

                <NumberButton buttonValue={1} handleSetDisplayValue={props.handleSetDisplayValue}/>
                <NumberButton buttonValue={2} handleSetDisplayValue={props.handleSetDisplayValue}/>
                <NumberButton buttonValue={3} handleSetDisplayValue={props.handleSetDisplayValue}/> */}
            </div>

            <div className={btnClass}>
                <NumberButton buttonValue={0} handleSetDisplayValue={props.handleSetDisplayValue}/>
                <NumberButton buttonValue='.' handleSetDisplayValue={props.handleSetDisplayValue}/>
            </div>
        </div>
    );
}

export default Numbers;