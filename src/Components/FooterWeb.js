import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../ThemeContext';

const FooterWeb = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <FooterContainer darkMode={darkMode}>
      <FooterSection>
        <Logo darkMode={darkMode}>ROAM FREE</Logo>
        <LinksContainer>
          <Section>
            <SectionTitle darkMode={darkMode}>Explore</SectionTitle>
            <Link darkMode={darkMode} href="#">About us</Link>
            <Link darkMode={darkMode} href="#">Contact</Link>
            <Link darkMode={darkMode} href="#">Shop</Link>
            <Link darkMode={darkMode} href="#">Services</Link>
          </Section>
          <Section>
            <SectionTitle darkMode={darkMode}>Follow us</SectionTitle>
            <Link darkMode={darkMode} href="#">Email</Link>
            <Link darkMode={darkMode} href="#">Facebook</Link>
            <Link darkMode={darkMode} href="#">Instagram</Link>
          </Section>
        </LinksContainer>
      </FooterSection>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: ${({ darkMode }) => (darkMode ? '#1a202c' : '#fff')};
  color: ${({ darkMode }) => (darkMode ? 'white' : 'black')};
  padding: 80px 0;
`;

const FooterSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.div`
  font-size: 50px;
  font-weight: bold;
  font-family: 'Syncopate', sans-serif;
`;

const LinksContainer = styled.div`
  display: flex;
  gap: 40px;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
`;

const SectionTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Link = styled.a`
  color: ${({ darkMode }) => (darkMode ? '#ccc' : '#000')};
  margin-bottom: 5px;

  &:hover {
    color: ${({ darkMode }) => (darkMode ? '#fff' : '#333')};
  }
`;

export default FooterWeb;