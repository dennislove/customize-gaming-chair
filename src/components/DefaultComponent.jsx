import React from 'react';
import HeaderComponent from './HeaderComponent';

const DefaultComponent = ({ children }) => {
  return (
    <div className=" m-0 p-0 bg-white  dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      <HeaderComponent />
      <div>{children}</div>
    </div>
  );
};

export default DefaultComponent;
