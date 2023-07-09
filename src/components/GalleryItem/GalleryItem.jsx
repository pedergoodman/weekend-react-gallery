import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './GalleryItem.css'






export default function GalleryItem({ galleryItem }) {





  // return using material UI
  return (

        <ImageListItem>
          <img
            src={`${galleryItem.url}?w=248&fit=crop&auto=format`}
            srcSet={`${galleryItem.url}?w=248&fit=crop&auto=format`}
            alt={galleryItem.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={galleryItem.title}
            subtitle={galleryItem.description}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${galleryItem.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
  );



}




// return (
//   <Card sx={{ maxWidth: 345 }}>
//     <CardActionArea>
//       <CardMedia
//         component="img"
//         height="140"
//         image="public/images/co-ut-trip-01.jpg"
//         alt="green iguana"
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           Lizard
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           Lizards are a widespread group of squamate reptiles, with over 6,000
//           species, ranging across all continents except Antarctica
//         </Typography>
//       </CardContent>
//     </CardActionArea>
//     <CardActions>
//       <Button size="small" color="primary">
//         Share
//       </Button>
//     </CardActions>
//   </Card>




{/* <ImageList sx={{ width: 500, height: 450 }}>
<ImageListItem key="Subheader" cols={3}>
  <ListSubheader component="div">December</ListSubheader>
</ImageListItem>
{galleryList.map((item) => (
  <ImageListItem key={item.id}>
    <img
      src={`${item.url}?w=248&fit=crop&auto=format`}
      srcSet={`${item.url}?w=248&fit=crop&auto=format`}
      alt={item.title}
      loading="lazy"
    />
    <ImageListItemBar
      title={item.title}
      subtitle={item.description}
      actionIcon={
        <IconButton
          sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
          aria-label={`info about ${item.title}`}
        >
          <InfoIcon />
        </IconButton>
      }
    />
  </ImageListItem>
))}
</ImageList> */}