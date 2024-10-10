import React from 'react';
import Lottie from 'react-lottie';
import animationData from './../animations/Anim1.json'; 
const LottieAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className="lottie-container">
      <Lottie options={defaultOptions} height={300} width={350} />
    </div>
  );
};

export default LottieAnimation;
