import React from 'react';
import EducationExperience from './EducationExperience';

const FaujdarhatDes = "Faujdarhat is one of the finest institutes that my country has to offer. It is a military school that takes in young leaders at the age of 14-15 years and trains them through strict discipline and proper guidance to become good leaders for the country. My experience in Faujdarhat has been an unforgettable one. It has shaped me into the person I am today. Along with my education, I was involved in various extracurricular activities such as poetry, drama, singing, art, and debate, where I won first prize in all. As a military school, we were also taught parade and physical activities. In short, the experience has been amazing."

const BuetDes = "BUET is one of the best engineering universities in my country. It has introduced me to some of the brilliant minds of the nation and ignited in me the spark of research. I am currently a Research Assistant working there which has been a phenoemnal experience."

const IPSC= "I became the national champion in Internation Public Speaking Competition arranged by English Speaking Union. The experience was enlightening for me."

const Others: React.FC = () => {
  return (
    <div>
      <EducationExperience
        mainImageUrl= "https://i.ibb.co/vm2fCWn/15800638-710346469140581-4958697373112912404-o.jpg"
       
        institutionName="Faujdarhat Cadet College"
        description={FaujdarhatDes}
        additionalImageUrls={[
          // "https://i.ibb.co/K22HQJW/received-3379211319047137.png",
          // 'https://i.ibb.co/mvRfH7X/11351209-1575776586019956-9095385571445963733-n.jpg'
          
        ]}
        logoUrl='https://i.ibb.co/TWQ1v4M/download-20.jpg'
      />
      <EducationExperience
        mainImageUrl= "https://i.ibb.co/vcRV4H3/449118050-2757505837757957-2044872682383356260-n.jpg"
       
        institutionName="Bangladesh University of Engineering and Technology (BUET)"
        description={BuetDes}
        additionalImageUrls={[
          // "https://i.ibb.co/K22HQJW/received-3379211319047137.png",
          // 'https://i.ibb.co/mvRfH7X/11351209-1575776586019956-9095385571445963733-n.jpg'
          
        ]}
        logoUrl='https://i.ibb.co/FXWy70Y/download-19.png'
      />
      <EducationExperience
        mainImageUrl= "https://i.ibb.co/LtDjRw0/88158765-1509247939250426-7831079605271265280-n.jpg"
       
        institutionName="Internation Public Speaking Competition"
        description={IPSC}
        additionalImageUrls={[
          // "https://i.ibb.co/K22HQJW/received-3379211319047137.png",
          // 'https://i.ibb.co/mvRfH7X/11351209-1575776586019956-9095385571445963733-n.jpg'
          
        ]}
        logoUrl='https://i.ibb.co/y8JkFt7/png-transparent-the-english-speaking-union-english-speaking-union-scotland-speech-communication-othe.png'
      />
    </div>
  );
};

export default Others;
