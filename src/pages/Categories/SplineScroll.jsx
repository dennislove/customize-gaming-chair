import React, { useEffect, useRef } from 'react';

const SplineScroll = () => {
  const viewerRef = useRef();

  //   useEffect(() => {
  //     if (viewerRef.current) {
  //       // Thêm sự kiện nếu cần
  //       viewerRef.current.addEventListener('load', () => {
  //         console.log('Spline Viewer Loaded!');
  //       });
  //     }
  //   }, []);

  return (
    <spline-viewer
      //   ref={viewerRef}
      url="https://prod.spline.design/CT9GTzcqD1c4TcIW/scene.splinecode"
      events-target="global"
      style={{
        width: '1700px',
        height: '100%', // Thay đổi chiều cao tùy ý
        display: 'block',
        overflowX: 'hidden',
        position: 'fixed'
      }}
    ></spline-viewer>
  );
};

export default SplineScroll;
