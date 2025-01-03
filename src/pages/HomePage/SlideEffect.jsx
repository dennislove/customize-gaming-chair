import React from 'react';
import { useInView } from 'react-intersection-observer';
import './style.css';

const SlideEffect = ({ direction = 'left', children }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2
  });

  // Xác định lớp động cho hướng
  const directionClass = {
    left: 'slide-left',
    right: 'slide-right',
    up: 'slide-up',
    down: 'slide-down'
  }[direction];

  return (
    <div
      ref={ref}
      className={`slide-item ${
        inView ? `${directionClass}-in` : `${directionClass}-out`
      }`}
    >
      {children}
    </div>
  );
};

export default SlideEffect;
