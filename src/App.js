import Navbar from './components/Navbar';
import Featured from './components/Featured';
import Hero from './components/Hero';
import Signup from './components/Signup';

const App = () => {
    return (
        <div className='App'>
            <Navbar />
            <Hero />
            <Featured />
            <Signup />
        </div>
    );
};

export default App;
