import React from 'react';
import Videos from './Videos';
import { Typography } from '@mui/material';
import Link from '@mui/material/Link';
import ArticleIcon from '@mui/icons-material/Article'; // Import the paper icon
import GitHubIcon from '@mui/icons-material/GitHub'; // Import GitHub icon


interface ResearchProps {
  Research_name: string;
  paper_link: string;
  code_link: string;
  videoLink: string;
  subtitle: string
}

const Research: React.FC<ResearchProps> = ({ videoLink, Research_name,code_link,paper_link, subtitle}) => {
  return (
    <div className='shadow-xl p-4'>
      <Typography className='align-middle' fontWeight={300} fontFamily={'monospace'} variant="h3" component="div" sx={{ flexGrow: 1 }}>
        {Research_name}
      </Typography>
      {subtitle?<Typography className='align-middle' fontFamily={'san-serif'} variant="h6" component="div" sx={{ flexGrow: 1 }}>
        {subtitle}
      </Typography>:<></>}
      <Videos videoLink={videoLink} />
  
<Typography className='p-1 hover:text-cyan-600' fontFamily={'monospace'} variant="h5" component="div" sx={{ flexGrow: 1 }}>
  {code_link ? (
    
    <Link href={code_link} underline="none" color="inherit">
      <GitHubIcon style={{ marginRight: '8px' }} />
      Code Link please click
    </Link>
  ) : (
    <></>
  )}
</Typography>

<Typography className='p-1 hover:text-cyan-600' fontFamily={'monospace'} variant="h5" component="div" sx={{ flexGrow: 1 }}>
    {paper_link ? (
      <Link href={paper_link} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
         <ArticleIcon style={{ marginRight: '8px' }} />
        Paper Link please click
      </Link>
    ) : (
      <></>
    )}
  </Typography>

    </div>
  );
};

export default Research;
