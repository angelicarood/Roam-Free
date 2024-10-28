import React, { useEffect, useState } from 'react';
import goldenSpikeImage from '../assets/3610cbd1221092d8a32bac234dc459d6.jpg';
import bearRiverImage from '../assets/bear-river-mbr-seeking-refuge-mia-mcpherson-1880.jpg';
import heberImage from '../assets/stelprdb5134404.jpg';
import firstDamImage from '../assets/unnamed.jpg';
import ogdenNatureImage from '../assets/mainhome.jpeg'


// Then use it in your component
// Google Font を使用
const fontLink = document.createElement('link');
fontLink.href =
  'https://fonts.googleapis.com/css2?family=Poppins:wght@600&family=Roboto:wght@400&display=swap';
fontLink.rel = 'stylesheet';
document.head.appendChild(fontLink);

// CSS-in-JSのスタイル
const styles = {
  container: {
    padding: '40px',
    fontFamily: `'Roboto', sans-serif`,
    maxWidth: '900px',
    margin: '0 auto',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontFamily: `'Poppins', sans-serif`,
    fontSize: '2.5rem',
    fontWeight: 600,
    textAlign: 'center',
    marginBottom: '30px',
    color: '#333',
    letterSpacing: '1px',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  listItem: {
    margin: '20px 0',
    opacity: 0,
    transform: 'translateY(20px)',
    transition: 'opacity 0.5s, transform 0.5s',
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  image: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: '15px',
  },
  link: {
    textDecoration: 'none',
    color: '#007bff',
    fontSize: '1.5rem',
    fontWeight: 500,
    transition: 'color 0.3s',
  },
  linkHover: {
    color: '#0056b3',
  },
  fadeIn: {
    opacity: 1,
    transform: 'translateY(0)',
  },
  description: {
    marginTop: '10px',
    fontSize: '1rem',
    color: '#444',
  },
  address: {
    marginTop: '5px',
    fontSize: '0.9rem',
    color: '#666',
    fontStyle: 'italic',
  },
};

// 観光地のデータ
const places = [
  {
    name: 'Golden Spike National Historic Park',
    url: 'https://www.nps.gov/gosp/index.htm',
    address: '6200 N 22300th St W, Corinne, UT 84307, USA',
    description:
      'Golden Spike National Historic Park marks the location of the completion of the first transcontinental railroad in the United States, a momentous event in American history.',
    image: goldenSpikeImage,
  },
  {
    name: 'Bear River Bird Refuge',
    url: 'https://www.fws.gov/refuge/bear-river-migratory-bird-refuge',
    address: '2155 W Forest St, Brigham City, UT 84302, USA',
    description:
      'This bird refuge covers 74,000 acres of wetlands and is home to thousands of migratory birds. It offers scenic drives and nature walks for birdwatchers and wildlife enthusiasts.',
    image: bearRiverImage,
  },
  {
    name: 'Logan Canyon Scenic Drive',
    url: 'https://www.fs.usda.gov/recarea/uwcnf/recarea/?recid=8983',
    address: 'Logan Canyon Rd, Logan, UT 84321, USA',
    description:
      'Logan Canyon offers a breathtaking scenic drive through lush forests, towering cliffs, and winding roads. It is especially popular during the fall season for its colorful foliage.',
    image: heberImage,
  },
  {
    name: 'First Dam',
    url: 'https://www.explorelogan.com/',
    address: '1647 E Canyon Rd, Logan, UT 84321, USA',
    description:
      'Located at the mouth of Logan Canyon, First Dam is a popular spot for fishing, kayaking, and picnicking, offering beautiful views of the surrounding mountains.',
    image: firstDamImage,
  },
  {
    name: 'Ogden Nature Center',
    url: 'https://ogdennaturecenter.org/',
    address: '966 W 12th St, Ogden, UT 84404, USA',
    description:
      'Ogden Nature Center is a 152-acre nature preserve that offers walking trails, birdwatching, and educational programs, promoting conservation and environmental awareness.',
    image: ogdenNatureImage,
  },
];

// コンポーネント
const TouristPlaces = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    places.forEach((_, index) => {
      setTimeout(() => {
        setVisibleItems((prev) => [...prev, index]);
      }, index * 200);
    });
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Tourist Places</h1>
      <ul style={styles.list}>
        {places.map((place, index) => (
          <li
            key={index}
            style={{
              ...styles.listItem,
              ...(visibleItems.includes(index) ? styles.fadeIn : {}),
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img src={place.image} alt={place.name} style={styles.image} />
            <a
              href={place.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                ...styles.link,
                ...(hoveredIndex === index ? styles.linkHover : {}),
              }}
            >
              <h2>{place.name}</h2>
            </a>
            <p style={styles.description}>{place.description}</p>
            <p style={styles.address}>{place.address}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TouristPlaces;
