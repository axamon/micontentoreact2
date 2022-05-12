import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Title from './components/title/Title';
import Argomento from './components/argomento/Argomento';
import Footer from './components/footer/Footer';
import Typewriter from './components/typewriter/Typewriter';
// import QuoteCard  from './components/randomquote/RandomQuote';
import Circolo from './components/circolo/Circolo'
import Crowdfunding from './components/crowdfunding/Crowdfunding'

function App() {
  return (
    <>
   
    {/* <div className='video-wrapper'> */}
      {/* <video id="myVideo" autostart loop muted autoPlay src={"https://s3.eu-south-1.amazonaws.com/bregliano.com/video.mp4"} type="video/mp4" /> */}
      {/* <div class="header"> */}
        {/* <h1><Typewriter text='Unità di misura di senso.' /></h1> */}
      {/* </div>    */}
    {/* </div> */}

 
    
    
      
      <div className='container'>
      <div className="links">
        <small>
          <span><a  href="#Progetto">Progetto</a> |  </span>
          <span><a  href="#Contatti">Contatti</a>  | </span>
          <span><a  href="#Crowdfunding">Crowdfunding</a></span>
        </small>
      </div>
      <div className="title">
        <Title titolo="micontento" />
      </div>
      <div className='row center'>
      {/* <Circolo /> */}
      </div>

        <div className='argomenti row'>
          <Argomento name="Contatti" contenuto="Contattaci solo il 31 novembre o il 30 febbraio"/>
          <Argomento name="Progetto" contenuto="Sportello amico"/>
          <Argomento name="Crowdfunding" contenuto="Non so cosa sia"/>
        </div>
      </div>
      
      <Footer owner="micontento" />
    </>
  );
}

export default App;
