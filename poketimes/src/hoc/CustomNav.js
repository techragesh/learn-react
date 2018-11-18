import React, { Component } from 'react';

const CustomNav = WrappedComponent => {
  const colors = ['red', 'pink', 'orange', 'blue', 'green', 'yellow'];
  const randomColor = colors[Math.floor(Math.random() * 6)];
  const className = randomColor + '-text';

  return props => (
    <div className={className}>
      <WrappedComponent {...props} />
    </div>
  );
};

export default CustomNav;
