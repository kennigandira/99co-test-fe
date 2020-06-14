import React from 'react';
import PropTypes from 'prop-types';

import Styles from './styles/index.module.scss';
import mapImg from './img/map.png';

const Map = ({ onCTAClick }) => {
  return (
    <div className={Styles['map-wrapper']}>
      <img src={mapImg} alt="" />
      <div className={Styles['map-content']}>
        <h4>Jl. Sukajadi No.1 Bandung, Jawa Barat</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo
          laboriosam, excepturi non deleniti, nobis molestias saepe nesciunt,
          dolorum facilis exercitationem itaque et sint quisquam veniam eius
          aperiam aliquam dolore vitae.
        </p>
      </div>
      <button className={Styles['map-cta']} onClick={onCTAClick}>
        Tutup
      </button>
    </div>
  );
};

Map.propTypes = {
  onCTAClick: PropTypes.func,
};

export default Map;
