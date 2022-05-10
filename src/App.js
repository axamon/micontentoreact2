import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import video from './video.mp4';
import Title from './components/title/Title';
import Argomento from './components/argomento/Argomento';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Title titolo="MiContento" />
      <div className='main'>
        <video src={video} loop muted autoPlay />
        </div>
        <Argomento name="Contatti" />
        <Footer owner="MiContento" />
    </div>
  );
}

export default App;
