'use client';
import './styles.css';
import DesktopHeader from './desktopHeader';
import MobileHeader from './mobileHeader';
import { useEffect, useState, useRef, useLayoutEffect } from 'react';
import { usePathname } from 'next/navigation';
import { isMobile } from '../../../utilidades/globales.js';

const Header = () => {
  const [deviceMobile, setDeviceMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const cobertor = useRef<any>(null);


  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsScrolled(scrollY > 100);

      if (isMobile()){
        setIsScrolled(true)
      }
  };


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const pathname = usePathname();
  useEffect(() => {
    if (isMobile()) {
      setDeviceMobile(true);
      if(pathname == '/'){
        sessionStorage.setItem("vineDeHomeRojo", "si")
      }
      if(cobertor.current){
        cobertor.current.style.transition = 'opacity 0.8s'
        cobertor.current.style.opacity = '0'
        setTimeout(
          ()=>{cobertor.current.remove()},2000
        )
      }
    }else{
      cobertor.current.remove()
    }
  }, [pathname]);

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
