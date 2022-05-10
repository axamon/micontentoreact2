import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import ReactPlayer from 'react-player/lazy'
import Title from './components/title/Title';
import Argomento from './components/argomento/Argomento';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Title titolo="MiContento" />
      <div className='main'>
        <ReactPlayer  playing muted loop url={"https://s3.eu-south-1.amazonaws.com/bregliano.com/video.mp4"} />
      </div>
      <Argomento name="Contatti" />
      <Argomento name="Sportello" />
      <Argomento name="GPT" />
      <Footer owner="MiContento" />
    </div>
  );
}

export default App;
