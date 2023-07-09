
// basic imports
import React from 'react';
import './GalleryItem.css'


// material UI imports
import { styled } from '@mui/material/styles';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import FavoriteIcon from '@mui/icons-material/Favorite';  
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import { red } from '@mui/material/colors';
import DeleteIcon from '@mui/icons-material/Delete';




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



export default function GalleryItem({ galleryItem }) {

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
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

              <IconButton>
                <Badge 
                  badgeContent={100} 
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