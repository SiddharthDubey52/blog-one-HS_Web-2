

import Card from './Components/Card';
// import './App.css'

// function App() {

//   return (
//     <>
//       <Card />
//     </>
      
        
//   )
// }

// export default App

import React from 'react';
import TrendingToday from './Components/TrendingToday';
import photo1 from "./assets/photo.jpg";
import photo2 from "./assets/photo.jpg";
import photo3 from "./assets/photo.jpg";
import photo4 from "./assets/photo.jpg";

const App = () => {
  const trendingPhotosData = [
    {
      id: 1,
      imageUrl: photo1,
      date: 'July 15, 2023',
      title: 'Photo 1 Title',
    },
    {
      id: 2,
      imageUrl: photo2,
      date: 'July 16, 2023',
      title: 'Photo 2 Title',
    },
    {
      id: 3,
      imageUrl: photo3,
      date: 'July 17, 2023',
      title: 'Photo 3 Title',
    },
    {
      id: 4,
      imageUrl: photo4,
      date: 'July 18, 2023',
      title: 'Photo 4 Title',
    },
  ];

  return (
    <div className='parent'>
      {/* Other components */}
      <div className='div1'><Card /></div>
      <div className='div2'><TrendingToday trendingPhotosData={trendingPhotosData} /></div>
      {/* Other components */}
    </div>
  );
}

export default App;











