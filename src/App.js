import { Container } from 'react-bootstrap';

import './App.css';
import BackgroundJS from './components/BackgroundJS';
import NavBarAutomatica from './components/NavBarAutomatica';
import useCameraParams from './hooks/useCameraParams';

function App() {
  
  const [cameraParams, cameraFunctions] = useCameraParams();

  return (
    <div className="App">
      <NavBarAutomatica cameraFunctions={cameraFunctions} />
      <Container>
        
      </Container>
      <BackgroundJS cameraParams={cameraParams} />
    </div>
  );
}

export default App;
