import React from 'react';
import './SplashScreen.css';
import logo from '../../assets/icons/prasha-logo.svg';

const SplashScreen: React.FC = () => {
  return (
    <div className="splash-container bg-primary flex items-center justify-center min-h-screen">
      <img src={logo} alt="Prasha Sync Logo" className="logo" />
    </div>
  );
};

export default SplashScreen;
