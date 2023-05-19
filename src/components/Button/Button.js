import React from 'react';

import './Button.css';

function Button(props) {

    const slideRef = React.useRef();

    const [btnStatusRuntime, setBtnStatusRuntime] = React.useState(false);
    const [btnStatusConstructor, setBtnStatusConstructor] = React.useState(true);

    const runtimeBtnIconClassName = (
        `${btnStatusRuntime ? 'slider-btn__icon slider-btn__icon--runtime slider-btn__icon--runtime-active' : 'slider-btn__icon slider-btn__icon--runtime'}`
    );

    const constructorBtnIconClassName = (
        `${btnStatusConstructor ? 'slider-btn__icon slider-btn__icon--constructor slider-btn__icon--constructor-active' : 'slider-btn__icon slider-btn__icon--constructor'}`
    );

    function handleClickRuntime(evt) {
        setBtnStatusRuntime(true);
        setBtnStatusConstructor(false);
        slideRef.current.style.left = `${evt.target.closest('.slider-btn__item').offsetLeft}px`;

        props.activeCalculator(true);
    }

    function handleClickConstructor(evt) {
        setBtnStatusRuntime(false);
        setBtnStatusConstructor(true);
        slideRef.current.style.left = `${evt.target.closest('.slider-btn__item').offsetLeft}px`;

        props.activeCalculator(false);
    }


    return (
        <div className="slider-btn">
            <button className="slider-btn__item" onClick={handleClickRuntime}>
                <span className={runtimeBtnIconClassName}></span>
                <span className="slider-btn__text">Runtime</span>
            </button>

            <button className="slider-btn__item" onClick={handleClickConstructor}>
                <span className={constructorBtnIconClassName}></span>
                <span className="slider-btn__text">Constructor</span>
            </button>

            <span className="slider-btn__slide" ref={slideRef}></span>
        </div>
    );
}

export default Button;