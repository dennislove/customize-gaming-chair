import React from 'react';
import { Canvas } from '@react-three/fiber';
import Experiences from './Experiences';
import Configurator from './Configurator';
import { CustomizationProvider } from '../../contexts/Customization';
import './style.css';

const CustomHouse = () => {
  return (
    <CustomizationProvider>
      <div className="App">
        <Canvas dpr={[1, 2]}>
          <color attach="background" args={['#213547']} />
          <fog attach="fog" args={['#213547', 10, 20]} />
          <Experiences />
        </Canvas>
        <Configurator />
      </div>
    </CustomizationProvider>
  );
};

export default CustomHouse;
