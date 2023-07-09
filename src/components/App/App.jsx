import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';

function App() {
    
  const [ galleryList, setGalleryList ] = useState([])

  // Initial load of Gallery Data
    useEffect(() => {
      getGalleryData();
    }, []);


    const getGalleryData = () => {

      axios.get('/gallery')
        .then((response) => {
          console.log(response.data);
          setGalleryList(response.data)

        }).catch((err) => {
          console.log('error getting gallery', err);
        });


    }; // end getGalleryData



    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryList galleryList={galleryList} />
      </div>
    );
} // end APP

export default App;
