import React from 'react';
import testImg from './img/TEST.png';
import frontEndImg from './img/FRONTend.png';

import Styles from './styles/index.module.scss';

const Header = () => {
  return (
    <div className={Styles['header']}>
      <img src={testImg} alt="" />
      <img src={frontEndImg} alt="" />
    </div>
  );
};

export default Header;
