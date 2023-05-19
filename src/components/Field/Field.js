import React from 'react';

import './Field.css';

function Field(props) {


    return (
        <section className="field">

            <div className="info">
                <div className="info__img"></div>
                <p className="info__main-text">Перетащите сюда</p>
                <p className="info__text">любой элемент из левой панели</p>
            </div>
            
        </section>
    );
}

export default Field;