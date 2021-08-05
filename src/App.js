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
import Blogs from './components/blog/Blogs';
import Footer from './components/footer/Footer';
import Nav from './components/Head/Nav';

function App() {
    return (
        <>
            <Top/>
            <Nav/>
            <Platforms/>
            <AboutUs/>
            <Feature/>
            <Blogs/>
            <Testimonials/>
            <Footer/>
        </>
    );
}

export default App;
