import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MusicBox from './MusicBox';

const Music: React.FC = () => {
  return (
    <div>
        <Box sx={{ display: 'flex', p: 2,
    backgroundImage: `url('https://i.ibb.co/PNZBvN9/wallpapersden-com-listing-music-alone-anime-girl-3840x2160.jpg')`, // Replace with your background image URL
    backgroundSize: 'cover',
  }}>
   
        <Box sx={{ flexGrow: 1, p: 3 }}>
          
            <Typography className='text-blue-300'  variant="h1" component="div" sx={{ flexGrow: 1 }}>
              My Music 
            </Typography>
            <Typography fontWeight={300} fontFamily={'monospace'} className='text-yellow-300' variant="h4" component="div" sx={{ flexGrow: 1 }}>
                .......
            </Typography>
            <Typography fontWeight={300} fontFamily={'monospace'} className='text-yellow-300' variant="h4" component="div" sx={{ flexGrow: 1 }}>
                Making feelings
            </Typography>
            <Typography fontWeight={300} fontFamily={'monospace'} className='text-yellow-300' variant="h4" component="div" sx={{ flexGrow: 1 }}>
                Making memories
            </Typography>
            <Typography fontWeight={300} fontFamily={'monospace'} className='text-yellow-200' variant="h4" component="div" sx={{ flexGrow: 1 }}>
               Just to feel alive
            </Typography>
          {/* <Videos/> */}
        </Box>                                                      
    
  </Box>
  <MusicBox videoLink='https://player.vimeo.com/video/997682968?badge=0&autopause=0&player_id=0&app_id=58479' Music='Rag Concert-2024: Fix you '/>
      <MusicBox videoLink='https://player.vimeo.com/video/997683302?badge=0&autopause=0&player_id=0&app_id=58479/embed' Music='CSE fest-2024: Talking to the moon'/>
    <MusicBox videoLink='https://player.vimeo.com/video/999135309?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write' Music='Falling in love with you'/>
    </div>
  );
};

export default Music;
