import React,{useContext} from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../ThemeContext'; // Adjust the path as necessary

// Component Home body
const DiscoverSect = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <DiscoverSection>
      <Title darkMode={darkMode}>Discover Your Next Quest</Title>
      <QuestGrid>
        <QuestItem>
          <QuestImage src= "festivals.jpg" alt="Festivals" />
          <QuestTitle darkMode={darkMode}>festivals</QuestTitle>
          <QuestDescription darkMode={darkMode}>
            Unlock the hidden secrets of your city with unique curated adventures that let you see the world right outside your door in a new light. Experience the local culture like never before through uncharted tours and exclusive events, tailored just for the innovative traveler in you.
          </QuestDescription>
        </QuestItem>
        <QuestItem>
          <QuestImage src="museums.jpg" alt="Museums" />
          <QuestTitle darkMode={darkMode}>Museums</QuestTitle>
          <QuestDescription darkMode={darkMode}>
            Transform the way you experience the outdoors with tailored adventures that challenge and inspire. Venture beyond the ordinary into nature's most captivating landscapes, where every journey is a story waiting to unfold.
          </QuestDescription>
        </QuestItem>
        <QuestItem>
          <QuestImage src="workshop.jpg" alt="Workshops" />
          <QuestTitle darkMode={darkMode}>Workshops</QuestTitle>
          <QuestDescription darkMode={darkMode}>
            Embark on journeys with insider insights and cutting-edge itineraries, crafted to redefine how you explore the world. Transform every trip into an unforgettable adventure full of surprising discoveries and seamless planning.
          </QuestDescription>
        </QuestItem>
        <QuestItem>
          <QuestImage src="trails.jpg" alt="Trails" />
          <QuestTitle darkMode={darkMode}>Trails</QuestTitle>
          <QuestDescription darkMode={darkMode}>
            Unveil the world’s hidden gems with DestinationX, where pioneering travel experiences redefine exploration. Journey beyond the ordinary and immerse yourself in handpicked destinations curated for the innovative traveler.
          </QuestDescription>
        </QuestItem>
      </QuestGrid>
    </DiscoverSection>
  );
};


// Styled-components
const DiscoverSection = styled.section`
  text-align: center;
  padding: 20px;
  color: ${({ darkMode }) => (darkMode ? 'white' : 'black')};
`;

const Title = styled.h1`
  margim-top: 50px;
  font-size: 80px;
  font-family: monserrat, sans-serif;
  weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: ${({ darkMode }) => (darkMode ? 'white' : '#282828')};
  
`;

const QuestGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const QuestItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-left: 50px;
  margin-right: 50px;
 
  `;

const QuestImage = styled.img`
  width: 280px;
  height: 280px;
  border-radius: 50%;
  object-fit: cover;
  margin-left: 30px;
  margin-right: 30px;
`;

const QuestTitle = styled.h2`
  font-size: 30px;
  text-decoration: underline;
  margin: 40px;
  font-family: 'Syncopate' ,sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: ${({ darkMode }) => (darkMode ? 'white' : '#282828')};
`;

const QuestDescription = styled.p`
  font-size: 20px;
  width: 50%;
  color: ${({ darkMode }) => (darkMode ? 'white' : '#282828')};
  font-family: 'Space Grotesk';
  margin: 20px 20px 80px 20px;
  letter-spacing: 1px;
`;

export default DiscoverSect;

