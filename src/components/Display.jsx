import React from 'react';

const Display = ({ numOne, numTwo }) => {
    return (
        <div className='display'>
            <input
                className='result'
                type='text'
                readOnly
                value={numOne === '' ? '0' : numTwo ? numTwo : numOne}
            />
        </div>
    );
};

export default Display;
