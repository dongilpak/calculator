import React, { useState } from 'react';

import Calculator from './components/Calculator';

const App = () => {
    const [numOne, setNumOne] = useState('');
    const [numTwo, setNumTwo] = useState('');
    const [operator, setOperator] = useState(null);

    const isNumber = item => {
        return /[0-9]+/.test(item);
    };

    const isOperator = item => {
        const operator = ['÷', 'X', '-', '+'];
        return operator.includes(item);
    };

    const operatorLogic = () => {
        let answer;

        if (operator === '+') {
            answer = `${(parseInt(numOne * 10) + parseInt(numTwo * 10)) / 10}`;
        } else if (operator === '-') {
            answer = (numOne * 10 - numTwo * 10) / 10;
        } else if (operator === 'X') {
            answer = numOne * numTwo;
        } else if (operator === '÷') {
            answer = numOne / numTwo;
        }

        setNumOne(answer);
        setNumTwo('');
        setOperator(null);
    };

    const checkDot = dot => {
        if (!operator) {
            if (numOne.includes(dot)) return;
            numOne === '' ? setNumOne('0' + dot) : setNumOne(numOne + dot);
        } else {
            if (numTwo.includes(dot)) return;

            numTwo === '' ? setNumTwo('0' + dot) : setNumTwo(numTwo + dot);
        }
    };

    const onClickBtn = value => {
        if (!operator && isNumber(value)) {
            numOne === '' || numOne === '0'
                ? setNumOne(value)
                : setNumOne(prev => prev + value);
            return;
        }

        if (operator && isNumber(value)) {
            numTwo === '' || numTwo === '0'
                ? setNumTwo(value)
                : setNumTwo(prev => prev + value);

            return;
        }

        if (numOne && isOperator(value)) {
            setOperator(value);
            return;
        }

        if (value === '=') {
            if (numTwo === '') return;
            operatorLogic(value);
        } else if (value === 'AC') {
            setNumOne('');
            setNumTwo('');
            setOperator(null);
        } else if (value === '+/-') {
            if (numOne === '' || numTwo === '') return;
            numTwo ? setNumTwo(numTwo * -1) : setNumOne(numOne * -1);
        } else if (value === '.') {
            checkDot(value);
        }
    };

    console.log(numOne);
    return (
        <Calculator onClickBtn={onClickBtn} numOne={numOne} numTwo={numTwo} />
    );
};

export default App;
