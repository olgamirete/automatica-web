import { Container } from 'react-bootstrap';

import './App.css';
import BackgroundJS from './components/BackgroundJS';
import InfoCard from './components/InfoCard';
import NavBarAutomatica from './components/NavBarAutomatica';
import useCameraParams from './hooks/useCameraParams';

function App() {

  const [cameraParams, cameraFunctions] = useCameraParams();

  return (
    <div className="App">
      <NavBarAutomatica cameraFunctions={cameraFunctions} />
      <Container className="mt-5">
        <InfoCard />
      </Container>
      <BackgroundJS cameraParams={cameraParams} />
    </div>
  );
}

export default App;
