'use client';
import './styles.css';
import DesktopHeader from './desktopHeader';
import MobileHeader from './mobileHeader';
import { useEffect, useState, useRef, useLayoutEffect } from 'react';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [deviceMobile, setDeviceMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const cobertor = useRef<any>(null);


  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsScrolled(scrollY > 100);
  };


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const isMobile =
      typeof window !== 'undefined' &&
      window.matchMedia('(max-width: 1000px)').matches;

    if (isMobile) {
      setDeviceMobile(true);
      if(cobertor.current){
        cobertor.current.style.transition = 'opacity 0.8s'
        cobertor.current.style.opacity = '0'
        setTimeout(
          ()=>{cobertor.current.remove()},1200
        )
      }
    }else{
      cobertor.current.remove()
    }
  }, []);

  const pathname = usePathname();
  useEffect(() => {

  }, [usePathname()]); 

  return (
    <>
      <div ref={cobertor} className='cobertorFullPantalla'></div>
      {deviceMobile ? (
        <header className={`mobile-header ${isScrolled ? 'scrolled' : ''}`}>
          <MobileHeader />
        </header>
      ) : (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
          <DesktopHeader />
        </header>
      )}
    </>
  );
};

export default Header;
