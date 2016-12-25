import React from 'react';
import image from './react-logo.svg';
import './react-logo.scss';

export default function ReactLogo() {
  return (
    <div
      className="react-logo"
      style={{ backgroundImage: `url(${image})` }}
    />
  );
}
