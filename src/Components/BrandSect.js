import React from "react";
import styled from "styled-components";

const BrandSect = () => {
  return (
    <BrandSection id="brand-section">
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



export default BrandSect;