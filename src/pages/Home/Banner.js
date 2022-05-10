import React from 'react';
import chair from '../../assets/images/chair.png'
import MainButton from '../../Shared/MainButton';
import mainbg from '../../assets/images/bg.png'

const Banner = () => {
    return (
        <div style={{background: `url(${mainbg})`}} >
            <div class="hero min-h-screen">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src={chair} class="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <MainButton>
        Get Started
      </MainButton>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Banner;