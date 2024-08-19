import React from 'react';
import { Grid, Typography, Card, CardMedia, CardContent } from '@mui/material';

interface Image {
    url: string;
    title: string;
  }
  
  interface GalleryProps {
    images: Image[];
  }

const ImageGallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <Grid className='p-3' container spacing={4}>
      {images.map((image, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image={image.url}
              alt={image.title}
            />
            <CardContent>
              <Typography variant="h6" fontFamily={'monospace'} component="div">
                {image.title}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};



export default ImageGallery;