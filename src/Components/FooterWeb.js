import React from "react";
import styled from "styled-components";

const FooterWeb = () => {
  return (
    <FooterContainer>
      <FooterSection>
        <Logo>ROAM FREE</Logo>
        <LinksContainer>
          <Section>
            <SectionTitle>Explore</SectionTitle>
            <Link href="#">About us</Link>
            <Link href="#">Contact</Link>
            <Link href="#">Shop</Link>
            <Link href="#">Services</Link>
          </Section>
          <Section>
            <SectionTitle>Follow us</SectionTitle>
            <Link href="#">Email</Link>
            <Link href="#">Facebook</Link>
            <Link href="#">Instagram</Link>
          </Section>
        </LinksContainer>
      </FooterSection>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: #fff;
  padding: 80px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #eaeaea;
`;

const FooterSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  max-width: 1200px;
  align-items: flex-start;
`;

const Logo = styled.div`
  font-size: 50px;
  font-weight: bold;
  text-align: left;
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
  text-align: left;
  font-family: 'space grotesk';

`;

const Link = styled.a`
  text-decoration: underline;
  color: #000;
  margin-bottom: 5px;
  text-align: left;
  &:hover {
    text-decoration: underline;
  }
`;

export default FooterWeb;