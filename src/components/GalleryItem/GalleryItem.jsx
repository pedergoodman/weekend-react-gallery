
// basic imports
import React, { useState } from 'react';
import './GalleryItem.css'


// material UI imports
import ImageListItem from '@mui/material/ImageListItem';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import FavoriteIcon from '@mui/icons-material/Favorite';  
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { CardActions } from '@mui/material';
import { createTheme, styled } from '@mui/material/styles';




// color theme for buttons
const theme = createTheme({
  palette: {
    primary: {
      main: '#558b2f',
    },
    secondary: {
      main: '#cd8427',
    },
  },
  customBadge: {
    backgroundColor: "#689f38",
    color: "white"
  }
});



// expand description animations
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));




export default function GalleryItem({ galleryItem, addLike }) {


  // const [ likeCount, setLikeCount ] = useState(0)

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  const handleLikeClick = () => {
    console.log('like button clicked!');
    addLike(galleryItem.id)
  

  };



  // return using material UI
  return (
    <>

        <ImageListItem>
          <img
            src={`${galleryItem.url}?w=248&fit=crop&auto=format`}
            srcSet={`${galleryItem.url}?w=248&fit=crop&auto=format`}
            alt={galleryItem.title}
            loading="lazy"
          />
          
          <div className='image-action-bar'>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <Typography className='image-description' sx={{ fontSize: 12 }}>
                    Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                    aside for 10 minutes.Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                    aside for 10 minutes.
                  </Typography>
            </Collapse>
          <CardActions disableSpacing sx={{ paddingLeft: 2 }} className='action-bar-content'>    

              <IconButton onClick={handleLikeClick} >
                <Badge 
                  badgeContent={galleryItem.likes} 
                  color="secondary"
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                >
                  <FavoriteIcon sx={{ color: theme.palette.secondary.main }} />
                </Badge>
              </IconButton>
              {/* <IconButton aria-label="share">
                <DeleteIcon sx={{ color: red[600] }}/>
              </IconButton> */}
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
                >
                <ExpandMoreIcon sx={{ color: theme.palette.secondary.main }}/>
              </ExpandMore>
   
            
          </CardActions>
          </div>



        </ImageListItem>
        </>
        
  ); // end return
} // end GalleryItem



 

  /* <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        Lizard
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Lizards are a widespread group of squamate reptiles, with over 6,000
        species, ranging across all continents except Antarctica
      </Typography>
    </CardContent> */