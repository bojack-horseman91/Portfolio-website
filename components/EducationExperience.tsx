import React from 'react';
import Image from 'next/image';
type EducationProps = {
  mainImageUrl: string;
  institutionName: string;
  description: string;
  additionalImageUrls: string[];
  logoUrl: string;
};

const EducationExperience: React.FC<EducationProps> = ({
  mainImageUrl,
  institutionName,
  description,
  additionalImageUrls,
  logoUrl,
}) => {
  return (
    <div style={{ maxWidth: '800px', margin: '20px auto', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <img
          src={logoUrl}
          alt={`${institutionName} Logo`}
          style={{ maxWidth: '80px', width: '100%', height: 'auto', margin: '0 auto' }}
        />
      </div>
      
      <h2 style={{ textAlign: 'center', marginBottom: '20px', fontWeight:'bolder' }}>{institutionName}</h2>
      
      <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '20px' }}>
        <a href={mainImageUrl} target="_blank" rel="noopener noreferrer" style={{ marginRight: '20px' }}>
          <img
            src={mainImageUrl}
            alt={institutionName}
            style={{ maxWidth: '180px', width: '100%', height: 'auto', borderRadius: '10px', float: 'left' }}
          />
        </a>
        <p style={{ textAlign: 'justify', flex: 1 }}>{description}</p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap', marginTop: '20px' }}>
        {additionalImageUrls.map((url, index) => (
          <a key={index} href={url} target="_blank" rel="noopener noreferrer" style={{ flexBasis: 'calc(33.33% - 10px)', marginBottom: '10px' }}>
            <img
              src={url}
              alt={`Additional ${index + 1}`}
              style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px' }}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default EducationExperience;
