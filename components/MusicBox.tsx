import React from 'react';
import Videos from './Videos';
import { Typography } from '@mui/material';
import Link from '@mui/material/Link';
interface MusicBoxProps {
  Music: string;
  subtitle?: string;
  videoLink: string;
}

const MusicBox: React.FC<MusicBoxProps> = ({ videoLink, subtitle,Music}) => {
  return (
    <div className='shadow-xl p-4'>
      <Typography className='align-middle' fontWeight={300} fontFamily={'monospace'} variant="h4" component="div" sx={{ flexGrow: 1 }}>
        {Music}
      </Typography>
      <Typography className='align-middle' fontWeight={300} fontFamily={'monospace'} variant="h6" component="div" sx={{ flexGrow: 1 }}>
        {subtitle}
      </Typography>
      <Videos videoLink={videoLink} />
  
    </div>
  );
};

export default MusicBox;
