
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ColorPicker from './Components/ColorPicker';

function App() {
  const colors = ['#FF5733', '#33FF57', '#5733FF', '#FFFF33', '#33FFFF'];

  return (
    <div class="background d-flex flex-column justify-content-center align-items-center">
      <h1>Color Picker</h1>
      <ColorPicker colors={colors} />
    </div>
  );
}

export default App;

