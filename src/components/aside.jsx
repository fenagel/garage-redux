import React from 'react';

const Aside = (props) => {
  return (
    <div className="aside">
      <div className="illustration" style={{backgroundImage: "url('/assets/images/mechanic.jpg')"}}></div>
      <h1>{props.garage}</h1>
      <p>Our garage is the best. Reasonable prices, always on time, always at your service.</p>
      {props.children}
    </div>
  );
}

export default Aside;
