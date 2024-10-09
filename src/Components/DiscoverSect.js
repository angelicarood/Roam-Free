import React from 'react';
import styled from 'styled-components';

// Component Home body
const DiscoverSect = () => {
  return (
    <DiscoverSection>
      <Title>Discover Your Next<br></br> Quest</Title>
      <QuestGrid>
        <QuestItem>
          <QuestImage src= "festivals.jpg" alt="Festivals" />
          <QuestTitle>Festivals</QuestTitle>
          <QuestDescription>
            Unlock the hidden secrets of your city with unique curated adventures that let you see the world right outside your door in a new light. Experience the local culture like never before through uncharted tours and exclusive events, tailored just for the innovative traveler in you.
          </QuestDescription>
        </QuestItem>
        <QuestItem>
          <QuestImage src="museums.jpg" alt="Museums" />
          <QuestTitle>Museums</QuestTitle>
          <QuestDescription>
            Transform the way you experience the outdoors with tailored adventures that challenge and inspire. Venture beyond the ordinary into nature's most captivating landscapes, where every journey is a story waiting to unfold.
          </QuestDescription>
        </QuestItem>
        <QuestItem>
          <QuestImage src="workshop.jpg" alt="Workshops" />
          <QuestTitle>Workshops</QuestTitle>
          <QuestDescription>
            Embark on journeys with insider insights and cutting-edge itineraries, crafted to redefine how you explore the world. Transform every trip into an unforgettable adventure full of surprising discoveries and seamless planning.
          </QuestDescription>
        </QuestItem>
        <QuestItem>
          <QuestImage src="trails.jpeg" alt="Trails" />
          <QuestTitle>Trails</QuestTitle>
          <QuestDescription>
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
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 65px;
  font-family: 'Syncopate';
  padding: 40px;
  font-weight: bold;
  text-transform: uppercase;
  
`;

const QuestGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const QuestItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 70px
  `;

const QuestImage = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  object-fit: cover;
`;

const QuestTitle = styled.h2`
  font-size: 1.7em;
  text-decoration: underline;
  margin: 20px 0 10px;
  font-weight: bold;
  font-family: 'Syncopate';
`;

const QuestDescription = styled.p`
  font-size: 1em;
  color: #555;
  font-family: 'Space Grotesk';
  margin: 20px 20px 10px 20px;
`;

export default DiscoverSect;

