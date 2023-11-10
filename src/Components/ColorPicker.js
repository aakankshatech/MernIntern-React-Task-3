import React, { useState } from 'react';
import './ColorPicker.css';

const ColorPicker = ({ colors }) => {
  const [isColorListVisible, setColorListVisible] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

  const toggleColorList = () => {
    setColorListVisible(!isColorListVisible);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setColorListVisible(false);
  };

  return (
    <div className="color-picker" style={{ backgroundColor: selectedColor, height: '500px', width: '1000px' }}>
      {isColorListVisible && (
        <div className="color-list">
          {colors.map((color, index) => (
            <div
              key={index}
              className="color-item"
              style={{ backgroundColor: color }}
              onClick={() => handleColorClick(color)}
            ></div>
          ))}
        </div>
      )}
      <button className='buttonpick' onClick={toggleColorList}>Pick a color</button>
      {/* {selectedColor && (
        <div className="selected-color">
            <div className="color-swatch" style={{ backgroundColor: selectedColor }}></div>
        </div>
      )} */}
    </div>
  );
};

export default ColorPicker;
