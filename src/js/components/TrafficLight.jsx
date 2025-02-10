import React from 'react';

const TrafficLight = ({ color, elegirColor, colors }) => {
  return (
    <div className='container'>
      {colors.map((col) => (
        <div
          key={col}
          onClick={() => elegirColor(col)}
          className={`${col} luz ${color === col ? 'selected' : ''}`}
        ></div>
      ))}
    </div>
  );
};

export default TrafficLight;
