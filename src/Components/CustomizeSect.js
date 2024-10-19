import React from "react";
import styled from "styled-components";



const CustomizeSect = () => {
  return(
    <CustomizeSection>
      <Title>Customize Your Adventure</Title>
      <CustomizeGrid>
        <CustomizeItem>
          <CustomizeImage src="petfriendly.jpg" alt="PetFriendly" />
          <CustomizeTitle> <a href="https://www.bringfido.com/attraction/state/utah/" target="_blank" rel="noopener noreferrer"> 
          Pet Friendly
          </a>
          </CustomizeTitle>
        </CustomizeItem>
        <CustomizeItem>
          <CustomizeImage src="outdoor.jpg" alt="Outdoor" />
          <CustomizeTitle> <a href="https://www.utah.com/things-to-do/outdoor-recreation/" target="_blank" rel="noopener noreferrer">Outdoors</a> </CustomizeTitle>
        </CustomizeItem>
        <CustomizeItem>
          <CustomizeImage src="indoors.jpg" alt="Indoors" />
          <CustomizeTitle> <a href="https://www.utahsadventurefamily.com/indoor-activities-in-utah/" target="_blank" rel="noopener noreferrer">Indoors</a> </CustomizeTitle>
        </CustomizeItem>
      </CustomizeGrid>
      </CustomizeSection>
  )
}
;

const CustomizeSection = styled.section`
  text-align: center;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 85px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 40px;
  margin-top: 40px;
  font-family: 'Syncopate' ,sans-serif;
  letter-spacing: 2px;
`;

const CustomizeGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 70px;
`;

const CustomizeItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const CustomizeImage = styled.img`
  width: 500px;
  height:500px ;
  object-fit: cover;
  margin-bottom: 15px;
`;

const CustomizeTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: underline;
  font-family: 'Syncopate' ,sans-serif;
  letter-spacing: 2px;
   a {
    color: inherit;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
    color: #f1bb7d; /* Change the color on hover */
  }
`;
 
export default CustomizeSect;