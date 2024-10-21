import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../ThemeContext';

const FooterWeb = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <FooterContainer darkMode={darkMode}>
      <FooterSection>
        <LeftSect>
          <Logo darkMode={darkMode}></Logo>
        </LeftSect> 

        <SocialMediaSection darkMode={darkMode}>
          <Title>FOLLOW US ON SOCIAL</Title>
          <SocialMediaGrid>
            <SocialMediaItem>
              <SocialMediaLink href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <SocialMediaImage src="instagram.jpeg" alt="Instagram" />
              </SocialMediaLink>
            </SocialMediaItem>
            <SocialMediaItem>
              <SocialMediaLink href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <SocialMediaImage src="facebook.webp" alt="Facebook" />
              </SocialMediaLink>
            </SocialMediaItem>
            <SocialMediaItem>
              <SocialMediaLink href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
                <SocialMediaImage src="whatsapp.jpeg" alt="WhatsApp" />
              </SocialMediaLink>
            </SocialMediaItem>
            <SocialMediaItem>
              <SocialMediaLink href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <SocialMediaImage src="twitter.jpeg" alt="Twitter" />
              </SocialMediaLink>
            </SocialMediaItem>
          </SocialMediaGrid>
        </SocialMediaSection>

        <FooterLinks darkMode={darkMode}>
          <TitleLink>Explore</TitleLink>
          <FootLink darkMode={darkMode} href="#">Home</FootLink>
          <FootLink darkMode={darkMode} href="#">North Area</FootLink>
          <FootLink darkMode={darkMode} href="#">Central Area</FootLink>
          <FootLink darkMode={darkMode} href="#">South Area</FootLink>
          <FootLink darkMode={darkMode} href="#brand-section">About</FootLink>
          <FootLink darkMode={darkMode} href="#">Shop</FootLink>
        </FooterLinks>
      </FooterSection>
    </FooterContainer>
  );
};

// Styled components

const FooterContainer = styled.footer`
  background-color: ${({ darkMode }) => (darkMode ? '#282828' : '#fff')};
  color: ${({ darkMode }) => (darkMode ? 'white' : '#282828')};
  padding: 30px 0;
  
`;

const FooterSection = styled.div`
  height: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;  /* Align all items vertically */
  flex-wrap: wrap;  /* Wrap items in case of smaller screen */
  padding: 0 50px;  /* Add padding for spacing */
`;

const LeftSect = styled.div`
  display: flex;
  justify-content: flex-start;
  flex: 1;
`;

const Logo = styled.div`
  background-image:${({ darkMode }) => (darkMode ? 'url("/nightlogo.png")': 'url("/RoamLogo.png")')};
  background-size: contain;  // Ensure the logo fits within the container
  background-position: center;
  background-repeat: no-repeat;
  width: 300px;  // Adjust width as necessary
  height: 300px;  // Adjust height as necessary 
  margin-bottom: 10px;
`;

const TitleLink = styled.h3`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 10px;
  font-family: 'Syncopate', sans-serif;
`;

const FooterLinks = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 50px;
  font-family: 'Syncopate', sans-serif;
  text-align: right;

  
  
`;

const FootLink = styled.a`
  color: ${({ darkMode }) => (darkMode ? '#ccc' : '#282828')};
  margin-bottom: 5px;
  display: block;
  font-family: syncopate, sans-serif;
  text-decoration: underline;

  &:hover {
    color: ${({ darkMode }) => (darkMode ? '#fff' : '#282828')};
  }
`;

const SocialMediaSection = styled.div`
  flex: 1;
  text-align: center;
  padding: 50px;
  margin-left: 50px;
  margin-right: 50px;
`;

const Title = styled.h1`
  font-size: 60px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 40px;
  font-family: 'Syncopate', sans-serif;
`;

const SocialMediaGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
`;

const SocialMediaItem = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle at center, #ffffff, #000000);
`;

const SocialMediaLink = styled.a`
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
  }
`;

const SocialMediaImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default FooterWeb;