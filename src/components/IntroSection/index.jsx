import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import Modal from 'react-modal';

import Card from '../Card';
import Icon from '../Icon';
import Map from '../Map';

import '../../styles/vendor/react-slick/style.scss';
import Styles from './styles/index.module.scss';

const NextArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={className}
      style={{ ...style, display: 'flex' }}
      onClick={onClick}
    >
      <Icon name="arrow-right" color="black" />
    </div>
  );
};

const PrevArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={className}
      style={{ ...style, display: 'flex' }}
      onClick={onClick}
    >
      <Icon name="arrow-left" color="black" />
    </div>
  );
};

const IntroSection = () => {
  const [isDetailShow, setDetailShow] = useState(false);
  const [isMapShow, setMapShow] = useState(false);

  const handleCloseDetailModal = () => {
    setDetailShow(false);
  };

  const handleOpenDetailModal = () => {
    setDetailShow(true);
  };

  const handleCloseMapModal = () => {
    setMapShow(false);
  };

  const handleOpenMapModal = () => {
    setMapShow(true);
  };

  const customStyles = {
    overlay: {
      zIndex: 2,
      background: 'rgba(0,0,0,0.4)',
    },
    content: {
      padding: 0,
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  const settings = {
    infinite: true,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: '20px',
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className={Styles['wrapper']}>
      <div className={Styles['wrapper-with-bg']}>
        <div className={Styles['row']}>
          <div className={Styles['col-6']}>
            <h1 className={Styles['heading']}>Start Your Journey</h1>
            <p className={Styles['subheading']}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              explicabo rem aspernatur nostrum temporibus blanditiis. Porro
              beatae, quos aperiam nesciunt mollitia maiores officia minima
              iusto earum in magni optio eius.
            </p>
          </div>
          <div className={Styles['col-6']}>
            <div className={Styles['slider-wrapper']}>
              <Slider {...settings}>
                <Card
                  onCTAClick={handleOpenDetailModal}
                  ctaText="Lihat Detail"
                />
                <Card
                  onCTAClick={handleOpenDetailModal}
                  ctaText="Lihat Detail"
                />
              </Slider>
              <Modal
                isOpen={isDetailShow}
                onRequestClose={handleCloseDetailModal}
                closeTimeoutMS={500}
                style={customStyles}
              >
                <Card
                  ctaText="Lihat Peta"
                  onCTAClick={handleOpenMapModal}
                  isPopupCard={true}
                />
              </Modal>
              <Modal
                isOpen={isMapShow}
                onRequestClose={handleCloseMapModal}
                closeTimeoutMS={500}
                style={customStyles}
              >
                <Map onCTAClick={handleCloseMapModal} />
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

NextArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

PrevArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

export default IntroSection;
