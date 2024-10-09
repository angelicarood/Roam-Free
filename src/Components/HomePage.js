import React from 'react';
import DiscoverSect from './DiscoverSect';
import CustomizeSect from './CustomizeSect';
import BrandSect from './BrandSect';
import SocialMedia from './SocialMedia';
import SignUp from './SignUp';

const HomePage = () => {
  return (
    <>
      <DiscoverSect />
      <CustomizeSect />
      <BrandSect />
      <SocialMedia />
      <SignUp />
    </>
  );
};

export default HomePage;