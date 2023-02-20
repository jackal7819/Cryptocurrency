import Navbar from './components/Navbar';
import Featured from './components/Featured';
import Hero from './components/Hero';
import Signup from './components/Signup';
import Footer from './components/Footer';

const App = () => {
    return (
        <div className='App'>
            <Navbar />
            <Hero />
            <Featured />
            <Signup />
            <Footer />
        </div>
    );
};

export default App;
