import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { useColorMode } from '@docusaurus/theme-common';

export default function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const { colorMode } = useColorMode();
  const logoPath = colorMode === 'dark' ? 'assets/logo-dark.jpg' : 'assets/logo-light.jpg';
  
  return (
    <header className="hero">
      <div className="container">
        <img 
          className="hero-logo" 
          src={useBaseUrl(logoPath)}
          alt="AquaBera Logo" 
        />
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        {/* Other hero content */}
      </div>
    </header>
  );
} 