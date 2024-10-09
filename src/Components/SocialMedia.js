import React from "react";
import styled from "styled-components";

const SocialMedia = () => {
  return (
    <SocialMediaSection>
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
  );
};

const SocialMediaSection = styled.section`
  text-align: center;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 96px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 40px;
  font-family: 'Syncopate', sans-serif;
`;

const SocialMediaGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 65px;
  margin-bottom: 30px;
`;

const SocialMediaItem = styled.div`
  width: 100px;
  height: 100px;
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

export default SocialMedia;