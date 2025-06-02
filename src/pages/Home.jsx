import React, { useEffect, useState } from 'react';
import HomeMobile from '../components/home/HomeMobile';
import HomeDesktop from '../components/home/HomeDesktop';

const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 650);

  const setWidth = () => {
    setIsMobile(window.innerWidth <= 650);
  };
  useEffect(() => {
    setWidth();
    window.addEventListener('resize', setWidth);
    return () => {
      window.removeEventListener('resize', setWidth);
    };
  }, []);
  return <>{isMobile ? <HomeMobile /> : <HomeDesktop />}</>;
};

export default Home;
