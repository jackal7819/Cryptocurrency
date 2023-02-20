import React from 'react';
import Navbar from './components/Navbar';
import Featured from './components/Featured';
import Hero from './components/Hero';

const App = () => {
    return (
        <div className='App'>
            <Navbar />
            <Hero />
            <Featured />
        </div>
    );
};

export default App;
