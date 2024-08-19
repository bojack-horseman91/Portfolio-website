'use client'
import Head from 'next/head';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

import Videos from '../components/Videos'
import Typography from '@mui/material/Typography';
import ResearchWork  from '../components/research-work'
import MainContent from '@/controller/MainContent';

export default function Home() {
  const [currentSection, setCurrentSection] = useState('research-work');
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className='lg:px-30 md:px-24 sm:px-1 bg-slate-50' >
      <Head>
        <title>Saleh Sakib Ahmed - Official Website</title>
        <meta name="description" content="The sage of Saleh Sakib Ahmed. In his quest to find a cure." />
        <link rel="icon" href="/fab.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
        <script type="application/ld+json">
{`
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Saleh Sakib Ahmed",
  "description": "Researcher focused on finding a cure.",
  "url": "https://saleh-sakib-ahmed.vercel.app/",
  "sameAs": [
    "https://www.linkedin.com/in/saleh-sakib-ahmed-956b8718a/?originalSubdomain=bd",
    
  ]
}
`}
</script>

      </Head>

      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <h1 style={{opacity:0}}>Saleh Sakib Ahmed</h1>
      <MainContent activeTab={activeTab} />
    </div>
  );
}
