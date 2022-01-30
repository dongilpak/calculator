import React from 'react';
import BtnPanel from './BtnPanel';
import Display from './Display';

const Calculator = ({ onClickBtn, numOne, numTwo }) => {
    return (
        <div className='calculator'>
            <Display numOne={numOne} numTwo={numTwo} />
            <BtnPanel onClickBtn={onClickBtn} />
        </div>
    );
};

export default Calculator;
