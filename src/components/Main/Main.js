import React from 'react';

import './Main.css';

// import StartPlace from '../StartPlace/StartPlace.js';
// import FinalPlace from '../FinalPlace/FinalPlace.js';

import Screen from '../Screen/Screen.js';
import Actions from '../Actions/Actions.js';
import Numbers from '../Numbers/Numbers.js';
import Equals from '../Equals/Equals.js';

import Button from '../Button/Button.js';



function Main(props) {

    // const [screenText, setScreenText] = React.useState(0);
    // const [memory, setMemory] = React.useState(0);
    // const [action, setAction] = React.useState('');

    // React.useEffect(() => {

    // }, [memory]);

    
    // const [count, setСount] = React.useState('0');

    // const components = [
    //     { component: Screen, id: 1, type:'screen'},
    //     { component: Actions, id: 2, type:'actions'},
    //     { component: Numbers, id: 3, type:'numbers'},
    //     { component: Equals, id: 4, type:'equals'}
    // ]

    // function clickNumbers(number) {

    //     if(String(screenText).length < 9 && screenText !== 0) {
    //         setScreenText(Number(String(screenText) + number));
    //     } 

    //     else if(String(screenText).length >= 9) {

    //     }

    //     else if (Number(screenText) === 0) {
    //         setScreenText(Number(number));
    //     }
    //     // else {
    //         // setScreenText(screenText);
    //     // }
    // }


    // function actionsClick (operator) {
    //     if(operator === '+') {
    //         setAction('+');
    //         setMemory(memory + screenText);
    //     }

    //     setScreenText(0);
    // }


    // function showResult () {
    //     console.log(action)
    //     if(action === '+') {
    //         setScreenText(memory + screenText);
    //     }
    //     setMemory(0);
    // }







    return ( 
        <main className = "content">

            <div className="start-place">
                <Screen length={props.lengthStatus}></Screen>
                <Actions handleAction={props.handleAction} activeStatus={props.activeStatus}></Actions>
                <Numbers handleSetDisplayValue={props.handleSetDisplayValue} activeStatus={props.activeStatus}></Numbers>
                <Equals handleEquals={props.handleEquals} activeStatus={props.activeStatus}></Equals>
                {/* {components.map(component => (<component.component draggable id={component.id} key={component.id} component={component.component}/>))} */}
            </div>

            <section className="finnal-place">
                <Button activeCalculator={props.activeCalculator}/>

                <div className="field">
                    <div className="info">
                        <div className="info__img"></div>
                        <p className="info__main-text">Перетащите сюда</p>
                        <p className="info__text">любой элемент из левой панели</p>
                    </div>
                </div>
            </section>

        </main>
    );
}

export default Main;