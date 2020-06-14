import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ReactSVG } from 'react-svg';

const Icon = ({ name, color, size, style, ...props }) => {
  const [icon, setIcon] = useState('');

  useEffect(() => {
    let path = require(`./img/${name}.svg`);
    setIcon(path.default);
  }, []);

  const handleBeforeInjection = (svg) => {
    const selector = [...svg.querySelectorAll('path[fill*="#"]')];

    selector &&
      selector.length > 0 &&
      selector.forEach((list) => {
        list.setAttribute('fill', color);
      });

    svg.setAttribute('width', `${size}`);
    svg.setAttribute('height', `${size}`);
  };

  return (
    <ReactSVG
      src={icon || ''}
      beforeInjection={handleBeforeInjection}
      style={{ display: 'inline-block', ...style }}
      {...props}
    />
  );
};

Icon.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  style: PropTypes.object,
};

Icon.defaultProps = {
  size: 24,
  style: {},
};

export default Icon;
