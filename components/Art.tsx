import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ImageGallery from './ImageGallery';
// Example usage
const imageList = [
  { url: 'https://i.ibb.co/tztQm5C/IMG-20211005-130942.jpg', title: 'Taj Mahal' },
  { url: 'https://i.ibb.co/nQMGZqS/IMG-20210125-120716.jpg', title: 'Sailing in the Storm' },
  { url: 'https://i.ibb.co/StGL9zj/IMG-20210509-104300.jpg', title: 'Peace in the mountain' },
  { url: 'https://i.ibb.co/3kQXhVX/IMG-20200928-134052.jpg', title: 'Eiffel Tower' },
  { url: 'https://i.ibb.co/56xkTSZ/IMG-20191115-205505.jpg', title: 'Love of Mother' },
  { url: 'https://i.ibb.co/H7NyxZq/IMG-20220506-113710.jpg', title: 'Norway' },
  { url: 'https://i.ibb.co/FB2y3cC/IMG-20210722-122436.jpg', title: 'Japan' },
  { url: 'https://i.ibb.co/d60Dftg/IMG-20210427-124718-1.jpg', title: 'London' },
  { url: 'https://i.ibb.co/K0SgfQ3/FB-IMG-1572247157443.jpg', title: 'Rain in Bangladesh' },
  { url: 'https://i.ibb.co/mthdFjN/FB-IMG-1572247208773.jpg', title: 'Rain in Japan' },
  { url: 'https://i.ibb.co/wsN7q5s/IMG-20200815-132839.jpg', title: 'Eden' },
  { url: 'https://i.ibb.co/Bj9d5xH/IMG-20200909-130136.jpg', title: 'Fall' },
];
const Art: React.FC = () => {
  return (
    <div>
        <Box sx={{ display: 'flex', p: 2,
    backgroundImage: `url('background_images/ArtBG.jpg')`, // Replace with your background image URL
    backgroundSize: 'cover',
    backgroundBlendMode:'hard-light',
  }}>
   
        <Box sx={{ flexGrow: 1, p: 3 }}>
          
            <Typography className='text-rose-600'  variant="h1" component="div" sx={{ flexGrow: 1 }}>
              My Art
            </Typography>
            <Typography fontWeight={300} fontFamily={'monospace'} className='text-rose-500' variant="h4" component="div" sx={{ flexGrow: 1 }}>
                .......
            </Typography>
            <Typography fontWeight={300} fontFamily={'monospace'} className='text-rose-500' variant="h4" component="div" sx={{ flexGrow: 1 }}>
                Making feelings
            </Typography>
            <Typography fontWeight={300} fontFamily={'monospace'} className='text-rose-500' variant="h4" component="div" sx={{ flexGrow: 1 }}>
                Making memories
            </Typography>
            <Typography fontWeight={300} fontFamily={'monospace'} className='text-yellow-200' variant="h4" component="div" sx={{ flexGrow: 1 }}>
               Just to feel alive
            </Typography>
          {/* <Videos/> */}
        </Box>                                                      
    
  </Box>
  <ImageGallery images={imageList}/>
   </div>
  );
};


export default Art;
