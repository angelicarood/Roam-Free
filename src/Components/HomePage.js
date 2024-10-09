import React from 'react';
import DiscoverSect from './DiscoverSect';
import CustomizeSect from './CustomizeSect';
import BrandSect from './BrandSect';
import SocialMedia from './SocialMedia';
import SignUp from './SignUp';
import VideoPlayer from "./VideoPlayer";

const HomePage = () => {
  return (
    <>
      <DiscoverSect />
      <VideoPlayer/>
      <CustomizeSect />
      <BrandSect />
      <SocialMedia />
      <SignUp />
    </>
  );
};

export default HomePage;