import React from 'react';

interface VideosProps {
  videoLink: string;
}

const Videos: React.FC<VideosProps> = ({ videoLink }) => {
  return (
    <div style={{ padding: 0, position: 'relative', width: '80%', height: '0', paddingBottom: '56.25%' }}>
      <iframe
        src={videoLink}
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        title="Vimeo Video"
      ></iframe>
      <script src="https://player.vimeo.com/api/player.js"></script>
    </div>
  );
};

export default Videos;
