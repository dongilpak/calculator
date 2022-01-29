import React from 'react';

const BtnPanel = () => {
    return (
        <div className='btnPanel'>
            <div className='row'>
                <div className='btn'>
                    <button>AC</button>
                </div>
                <div className='btn'>
                    <button>+/-</button>
                </div>
                <div className='btn'>
                    <button>%</button>
                </div>
                <div className='btn orange'>
                    <button>÷</button>
                </div>
            </div>
            <div className='row'>
                <div className='btn'>
                    <button>7</button>
                </div>
                <div className='btn'>
                    <button>8</button>
                </div>
                <div className='btn'>
                    <button>9</button>
                </div>
                <div className='btn orange'>
                    <button>X</button>
                </div>
            </div>
            <div className='row'>
                <div className='btn'>
                    <button>4</button>
                </div>
                <div className='btn'>
                    <button>5</button>
                </div>
                <div className='btn'>
                    <button>6</button>
                </div>
                <div className='btn orange'>
                    <button>-</button>
                </div>
            </div>
            <div className='row'>
                <div className='btn'>
                    <button>1</button>
                </div>
                <div className='btn'>
                    <button>2</button>
                </div>
                <div className='btn'>
                    <button>3</button>
                </div>
                <div className='btn orange'>
                    <button>+</button>
                </div>
            </div>
            <div className='row'>
                <div className='btn'>
                    <button>0</button>
                </div>
                <div className='btn'>
                    <button>.</button>
                </div>
                <div className='btn orange'>
                    <button>=</button>
                </div>
            </div>
        </div>
    );
};

export default BtnPanel;
