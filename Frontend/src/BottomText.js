import './About.css';
import Footer from './components/Footer';
import Button from 'react-bootstrap/Button';

function BottomText() {
    return (
        <div id="textblock">
             <Button variant="warning" size="lg" href='/'>
        Back To TutorPal
      </Button>
            <div id="textblock-container">
                <h1 id="textblock-title">What is TutorPal?</h1>
                <p id="textblock-content">
                IDK what to type here.<br/><br/>
                Ano to website background WOooooooowwww AMazing
                </p>
            </div>
           <Footer/>
           
        </div>
    );
}

export default BottomText;