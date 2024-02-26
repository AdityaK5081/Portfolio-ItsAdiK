import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Components/Header/Header';
import MySelf from './Components/MySelf/MySelf';
import Skills from './Components/Skills/Skills';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <div className='horiz-height'></div>
    <MySelf />
    <div className='horiz-height'></div>
    <Skills />
    <div className='horiz-height'></div>
  </React.StrictMode>
);

// content lists
// - skills
// - hobbies
// - previous work, internships
// - certifications
// - office fun - pics with StrictMode, Fathima, Emit-DND