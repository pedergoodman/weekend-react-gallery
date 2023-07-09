import React from "react";
import GalleryItem from "../GalleryItem/GalleryItem";
import './GalleryList.css'
import ImageList from '@mui/material/ImageList';


export default function GalleryList({ galleryList, addLike }) {
  


  return(


    <ImageList id="image-container" cols={3}gap={5} >
      {galleryList.map( (galleryItem) => (
          <GalleryItem key={galleryItem.id} galleryItem={galleryItem} addLike={addLike} />
      ))}
    </ImageList>




      


  );

};


