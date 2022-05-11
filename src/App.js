import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Title from './components/title/Title';
import Argomento from './components/argomento/Argomento';
import Footer from './components/footer/Footer';
import Typewriter from './components/typewriter/Typewriter';

function App() {
  return (
    <>
    <div className='video-wrapper'>
          <video id="myVideo" autostart loop muted autoPlay src={"https://s3.eu-south-1.amazonaws.com/bregliano.com/video.mp4"} type="video/mp4" />
          <div class="header">
            <h1><Typewriter text='Unità di misura di senso.' /></h1>
              {/* <button>Recipe here</button> */}
          </div>
        </div>
      <div className="App">
        <Title titolo="MiContento" />
      </div>
    
      
      <div className='container'>
        
        <div className='argomenti row'>
          <Argomento name="Contatti" contenuto="Contattaci solo il 31 novembre o il 30 febbraio"/>
          <Argomento name="Sportello" contenuto="Sportello amico"/>
          <Argomento name="GPT" contenuto="Non so cosa sia"/>
        </div>
      </div>
      <Footer owner="MiContento" />
    </>
  );
}

export default App;
