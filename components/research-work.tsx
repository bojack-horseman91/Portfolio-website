import React from 'react';
import Videos from './Videos'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Research from './Research';

const ResearchWork = () => {
  return <div>
    <Box sx={{ display: 'flex', p: 2,
    backgroundImage: `url('https://i.ibb.co/vHqPVmy/DNA-starting-image.jpg')`, // Replace with your background image URL

    backgroundSize: 'full',


  }}>
   
        <Box sx={{ flexGrow: 1, p: 3 }}>
          
            <Typography className='text-violet-950' fontFamily={'sans-serif'} variant="h2" component="div" sx={{ flexGrow: 1 }}>
              My Research and Projects
            </Typography>
            <Typography fontWeight={300} className='text-violet-950' fontFamily={'monospace'} variant="h4" component="div" sx={{ flexGrow: 1 }}>
              Relentlessly finding
            </Typography>
            <Typography fontWeight={300} fontFamily={'monospace'} variant="h4" component="div" sx={{ flexGrow: 1 }}>
              Dedicating to a cause
            </Typography>
            <Typography fontWeight={300} fontFamily={'monospace'} variant="h4" component="div" sx={{ flexGrow: 1 }}>
              All to make a change
            </Typography>
          {/* <Videos/> */}
        </Box>                                                      
    
  </Box>
 <Research Research_name='GraphAge'
 subtitle='DNA methylation is crucial for predicting epigenetic age, but many models overlook key CpG site relationships. We introduce GraphAge, a model that represents methylation data as a graph, with nodes for CpG sites and edges for relationships like co-methylation. Using a Graph Neural Network (GNN), GraphAge predicts age by capturing both structural and positional information. Despite limited computational resources, GraphAge achieved a Mean Absolute Error (MAE) of 3.207 and a Mean Squared Error (MSE) of 25.277, slightly outperforming the state of the art. Crucially, GraphAge excels in interpretation, using a GNN explainer to uncover key CpG sites and aging pathways, revealing complex interactions and patterns that were previously inaccessible. This makes GraphAge a powerful tool not just for prediction, but for deepening our understanding of the biological mechanisms of aging, setting a new benchmark for multimodal models in this field.'
 paper_link='https://arxiv.org/abs/2408.00984' videoLink='https://player.vimeo.com/video/993231309?badge=0&autopause=0&player_id=0&app_id=58479'
 code_link='https://github.com/bojack-horseman91/GraphAge'
 />
 <Research Research_name='JossBee' 
 code_link='https://github.com/JossBee'
 subtitle='A 3D airbnb replica using 3JS fiber and microservices'
 videoLink='https://player.vimeo.com/video/980152907?badge=0&autopause=0&player_id=0&app_id=58479'/>

<Research Research_name='National Election Vote center info App ' 

 code_link='https://github.com/bojack-horseman91/VotingApp'
 subtitle='A website for National Election Vote center info. It has google map location as well as all the necessary information about that vote center.'
 videoLink='https://player.vimeo.com/video/1000204425?badge=0&autopause=0&player_id=0&app_id=58479'/>

 </div>;
};

export default ResearchWork;
