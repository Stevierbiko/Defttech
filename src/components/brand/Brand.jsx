import React from 'react';
import { quickbooks , microsoft, jet, Veeam, redstor } from './imports';
import './brand.css';

const Brand = () => (
  <div className="deft__brand section__padding">
    <div>
      <img src={quickbooks} />
    </div>
    <div>
      <img src={microsoft} />
    </div>
    <div>
      <img src={jet} />
    </div>
    <div>
      <img src={Veeam} />
    </div>
    <div>
      <img src={redstor} />
    </div>
  </div>
);

export default Brand;
