import React from "react";
import styled from "styled-components";

const BrandSect = () => {
  return (
    <BrandSection>
      <BrandGrid>
        <BrandItem>
          <BrandImage src="hall.jpg" alt="Hall" />
        </BrandItem>
        <TextContainer>
          <Title>OUR BRAND <br></br>VISION</Title>
          <BrandDescription>
            <span>Embark on a journey like never before <br></br>with us, where breakthrough travel<br></br> experiences redefine the boundaries<br></br> of exploration.</span>
            <span>Our visionary team crafts adventures <br></br>that transcend the ordinary, inviting <br></br>you to discover the world’s marvels in <br></br>unparalleled ways.</span>
          </BrandDescription>
          <LearnButton href="#">LEARN MORE</LearnButton>
        </TextContainer>
      </BrandGrid>
    </BrandSection>
  );
};

const BrandSection = styled.section`
  padding: 50px;
`;

const BrandGrid = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
`;

const BrandItem = styled.div`
  flex: 1;
`;

const BrandImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  padding: 70px;
`;

const TextContainer = styled.div`
  flex: 1;
  text-align: left;
`;

const Title = styled.h1`
  font-size: 70px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 20px;
  font-family: 'Syncopate', sans-serif;
`;

const BrandDescription = styled.div`
  display: flex;
  gap: 20px; /* Space between the two text spans */
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 30px;

  span {
    flex: 1; /* Ensures both spans take equal width */
  }
`;

const LearnButton = styled.a`
  display: inline-block;
  background-color: black;
  color: white;
  text-decoration: none;
  padding: 15px 30px;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #333;
  }
`;

export default BrandSect;