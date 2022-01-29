import React from 'react';
import BtnPanel from './components/BtnPanel';
import Display from './components/Display';

const App = () => {
    return (
        <div className='calculator'>
            <Display />
            <BtnPanel />
        </div>
    );
};

export default App;
