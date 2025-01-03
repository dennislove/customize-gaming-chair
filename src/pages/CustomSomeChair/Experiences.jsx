import {
  MeshReflectorMaterial,
  PresentationControls,
  Stage
} from '@react-three/drei';
import React, { Suspense } from 'react';

import GamingChair from './GamingChair';
import Sofa from './Sofa';

const Experiences = () => {
  return (
    <PresentationControls
      speed={1.5}
      global
      zoom={0.7}
      polar={[-0.1, Math.PI / 4]}
    >
      <Stage environment="city" intensity={0.6} castShadow={false}>
        <Suspense fallback={null}>
          {/* <Sofa /> */}
          <GamingChair />
        </Suspense>
      </Stage>

      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[170, 170]} />
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={2048}
          mixBlur={1}
          mixStrength={40}
          roughness={1}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#101010"
          metalness={0.15}
        />
      </mesh>
    </PresentationControls>
  );
};

export default Experiences;
