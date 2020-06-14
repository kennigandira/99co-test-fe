import React, { Fragment, useState } from 'react';
import classnames from 'classnames';

import Icon from '../Icon';
import hotelImg from './img/hotel.jpg';

import Styles from './styles/index.module.scss';

const Card = ({ onCTAClick, ctaText, isPopupCard }) => {
  return (
    <Fragment>
      <div
        className={classnames(Styles['card'], {
          [`${Styles['card__popup']}`]: isPopupCard,
        })}
      >
        <img src={hotelImg} alt="" className={Styles['card__img']} />
        <div className={Styles['card__top-content']}>
          <span
            className={`${Styles['card__label']} ${Styles['card__label--status']}`}
          >
            Dijual
          </span>
          <span
            className={`${Styles['card__label']}  ${Styles['card__label--term']}`}
          >
            Nego
          </span>
          <button className={Styles['card__wishlist-btn']}>
            <Icon name="love" color="black" />
          </button>
        </div>
        <div className={Styles['card__center-content']}>
          <span className={Styles['card__price']}>Rp 326 jt</span>
          <span className={Styles['card__installment']}>
            Cicilan Rp 2,61jt/bln
          </span>
        </div>
        {isPopupCard && (
          <div className={Styles['card__property-detail']}>
            <h4 className={Styles['card__property-name']}>
              Rumah minimalis dijual di Bandung Jawa Barat
            </h4>
            <p>Jl. Sukajadi No. 1 Bandung, Jawa Barats</p>
          </div>
        )}
        <div className={Styles['card__bottom-content']}>
          <span className={Styles['card__detail']}>
            <Icon
              className={Styles['card__detail-icon']}
              name="kamar-tidur"
              color="#464749"
              size={isPopupCard ? 24 : 16}
            />
            2 K. Tidur
          </span>
          <span className={Styles['card__detail']}>
            <Icon
              className={Styles['card__detail-icon']}
              name="kamar-mandi"
              color="#464749"
              size={isPopupCard ? 24 : 16}
            />
            2 K. Mandi
          </span>
          <span className={Styles['card__detail']}>
            <Icon
              className={Styles['card__detail-icon']}
              name="luas-bangunan"
              color="#464749"
              size={isPopupCard ? 24 : 16}
            />
            65m2
          </span>
          <span className={Styles['card__detail']}>
            <Icon
              className={Styles['card__detail-icon']}
              name="luas-tanah"
              color="#464749"
              size={16}
            />{' '}
            65m2
          </span>
        </div>
        <button onClick={onCTAClick} className={Styles['card__cta']}>
          {ctaText}
        </button>
      </div>
    </Fragment>
  );
};

Card.defaultProps = {
  isPopupCard: false,
};

export default Card;
