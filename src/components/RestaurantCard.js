import React from 'react';
import Rate from './Rate';
import imageHolder from '@images/image-holder.png';

export default function RestaurantCard(){
  return (
    <div style={styles.container}>
      <div>
        <img alt="restaurant-image" src={imageHolder} style={styles.image} />
      </div>
      <p style={{ ...styles.title, ...styles.noMargin }}>Keika Ramen</p>
      <p style={styles.noMargin}>Classic • Japan</p>
      <div style={styles.footer}>
        <Rate style={styles.rate} />
        <p>Open Now</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    background: '#FFFFFF 0 % 0 % no - repeat padding - box',
    boxShadow: '0px 8px 7px #00000012',
    borderRadius: '15px',
    padding: 12
  },
  image: {
    width: '100%',
    height: 240,
    objectFit: 'cover'
  },
  title: {
    fontWeight: 'bold',
  },
  noMargin: {
    margin: 0
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  rate: {
    
  }
};