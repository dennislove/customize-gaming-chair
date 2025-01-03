import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

import { gsap } from 'gsap';

const positions = [
  {
    id: 'banner',
    position: { x: -9, y: -4, z: 0 },
    rotation: { x: 0, y: -5, z: 0 },
    scale: { x: 10, y: 10, z: 10 }
    // position: { x: 12, y: -5, z: 3 },
    // rotation: { x: 0, y: -1.5, z: 0 }
  },
  {
    id: 'intro',
    position: { x: -7, y: -1, z: -5 },
    rotation: { x: 0.5, y: -6, z: -0.1 },
    scale: { x: 11, y: 11, z: 11 }
  },
  {
    id: 'description',
    position: { x: 18, y: -8, z: -6 },
    rotation: { x: 0, y: -1, z: 0 },
    scale: { x: 17, y: 17, z: 17 }
  },
  {
    id: 'contact',
    position: { x: -14, y: 0, z: 0 },
    rotation: { x: 0, y: -5, z: 0 },
    scale: { x: 2, y: 2, z: 2 }
  }
];

const BeeModel = () => {
  const { scene } = useGLTF('./models/chair.glb');
  const ref = useRef();
  const mixer = useRef();

  useFrame((delta) => {
    mixer.current?.update(delta);
  });

  const moveModel = (sectionId) => {
    const newPosition = positions.find((pos) => pos.id === sectionId);
    if (newPosition) {
      gsap.to(ref.current.position, {
        ...newPosition.position,
        duration: 1,
        ease: 'power1.out'
      });
      gsap.to(ref.current.rotation, {
        ...newPosition.rotation,
        duration: 1,
        ease: 'power1.out'
      });
      gsap.to(ref.current.scale, {
        ...newPosition.scale,
        duration: 1,
        ease: 'power1.out'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      let currentSection = null;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 3) {
          currentSection = section.id;
        }
      });

      if (currentSection) moveModel(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    if (ref.current) {
      ref.current.scale.set(10, 10, 10);
      ref.current.position.set(14, -4, -3);
      ref.current.rotation.set(0.2, 1.5, 0);
    }
  }, []);

  return <primitive ref={ref} object={scene} />;
};

const Scene = () => {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.z = 13;
  }, [camera]);

  return (
    <>
      <ambientLight intensity={1.3} />
      <directionalLight intensity={1} position={[500, 500, 500]} />
      <BeeModel />
    </>
  );
};

export default Scene;
