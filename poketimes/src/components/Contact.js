import React from 'react';
import CustomNav from '../hoc/CustomNav';

const Contact = props => {
  return (
    <div>
      <div className="container">
        <h4 className="center">Contact</h4>
        <p className="center">This is the Contact page</p>
      </div>
    </div>
  );
};

export default CustomNav(Contact);
