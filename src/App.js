import { useCallback, useState } from 'react';
import './App.css';
import BackgroundJS from './components/BackgroundJS';

function App() {
  const [val, setVal] = useState(30);
  const updateVal = useCallback((e) => {
    e.preventDefault();
    setVal(e.target.value);
  }, [setVal]);

  return (
    <div className="App">
      <input type="range" min="1" max="100" value={val} onChange={updateVal} />
      <input type="number" min="1" max="100" value={val} onChange={updateVal} />
      <BackgroundJS cameraParams={{val: val}} />
    </div>
  );
}

export default App;
