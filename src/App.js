import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/App.scss';
import 'font-awesome/css/font-awesome.min.css';
import Top from './components/Top';
import Platforms from './components/platform/Platforms';
import AboutUs from './components/AboutUs';
import Testimonials from './components/testimonial/Testimonials';
import Feature from './components/feature/Feature';

function App() {
    return (
        <>
            <Top/>
            <Platforms/>
            <AboutUs/>
            <Feature/>
            <Testimonials/>
        </>
    );
}

export default App;
