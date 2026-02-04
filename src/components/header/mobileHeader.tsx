'use client';
import { useContext, useEffect, useRef, useState } from 'react';
import MobileMenu from '../images/mobile-menu.svg';
import Image from 'next/image';
import { menuSectionsMobile } from './data';
import Link from 'next/link';
import LanguageSwitch from './languageSwitch';
import { LangContext } from '@/app/providers/provider';
import Rojo from '../images/isologo-rojo-studio.png';
import { socialMedia } from '../header/data';
import { usePathname } from 'next/navigation';
import path from 'path';

const MobileHeader = () => {
  const { lang } = useContext(LangContext);
  const [isOpen, setIsOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const lineSVG01 = useRef<SVGLineElement>(null);
  const lineSVG02 = useRef<SVGLineElement>(null);
  const lineSVG03 = useRef<SVGLineElement>(null);
  const lineSVG04 = useRef<SVGLineElement>(null);
  const lineSVG05 = useRef<SVGLineElement>(null);
 
  useEffect(() => {
    ajustarLetraMenuDesplegable()
    window.addEventListener('resize', ajustarLetraMenuDesplegable);

    function ajustarLetraMenuDesplegable() {
      const esAlto = window.innerHeight > 500;
      const clase:any = document.getElementsByClassName('options')
      let tamanio = 0
      if (esAlto) {
        tamanio = 30
      }else{
        tamanio = 26
      }

      for(let e of clase){
        e.style.fontSize = tamanio+'px';
      }
    }
      return () => {
      document.removeEventListener('resize', ajustarLetraMenuDesplegable);
    };
  });

  const closeMobileMenu = (e: Event) => {
    if (
      mobileMenuRef.current &&
      isOpen &&
      !mobileMenuRef.current.contains(e.target as Node)
    ) {
      setTimeout(
        ()=>{setIsOpen(false);},500
      )
    }
  };

  const handleButtonClick = () => {
    if(isOpen){
      if (mobileMenuRef.current) {
        mobileMenuRef.current.style.top = '-100vh'
      }
      cruzAHamburguesa()
      setTimeout(
        ()=>{setIsOpen(!isOpen);},500
      )
    }else{
      setIsOpen(!isOpen);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e: Event) => closeMobileMenu(e);

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
      setTimeout(
        () =>{
          if (mobileMenuRef.current) {
            mobileMenuRef.current.style.top = '0vh'
          }
          hambuguesaACruz()
        },300
      )
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });

  const hambuguesaACruz = ()=> {
          if (lineSVG01.current) {
            lineSVG01.current.style.transform = 'rotate(45deg)'
            lineSVG01.current.style.transformOrigin= 'top left';
          }
          if (lineSVG02.current) {
            lineSVG02.current.style.transform = 'rotate(-45deg)'
            lineSVG02.current.style.transformOrigin= 'top right';
          }
          if (lineSVG03.current) {
            lineSVG03.current.style.transform = 'rotate(-45deg)'
            lineSVG03.current.style.transformOrigin= 'bottom left';
          }
          if (lineSVG04.current) {
            lineSVG04.current.style.transform = 'rotate(45deg)'
            lineSVG04.current.style.transformOrigin= 'bottom right';
          }
          if (lineSVG05.current) {
            lineSVG05.current.style.transform = 'scale(0)'
            lineSVG05.current.style.transformOrigin= '50% 50%';
          }
  }

    const cruzAHamburguesa = ()=> {
          if (lineSVG01.current) {
            lineSVG01.current.style.transform = 'rotate(0deg)'
            lineSVG01.current.style.transformOrigin= 'top left';
          }
          if (lineSVG02.current) {
            lineSVG02.current.style.transform = 'rotate(0deg)'
            lineSVG02.current.style.transformOrigin= 'top right';
          }
          if (lineSVG03.current) {
            lineSVG03.current.style.transform = 'rotate(0deg)'
            lineSVG03.current.style.transformOrigin= 'bottom left';
          }
          if (lineSVG04.current) {
            lineSVG04.current.style.transform = 'rotate(0deg)'
            lineSVG04.current.style.transformOrigin= 'bottom right';
          }
          if (lineSVG05.current) {
            lineSVG05.current.style.transform = 'scale(1)'
            lineSVG05.current.style.transformOrigin= '50% 50%';
          }
  }

  const pathname = usePathname();
  useEffect(() => {
    const headerMobile:any = document.getElementsByClassName('mobile-header')[0]

    if(pathname == '/' && Math.abs(window.scrollY) < 100){
      headerMobile.style.position = 'sticky'
      headerMobile.style.marginTop = '100vh'
    }else{
      const aEliminar:any = document.getElementsByClassName('aEliminarHome')
      if(aEliminar.length > 0){
        for(const e of aEliminar){
          e.style.display = 'none';
        }
      }
      headerMobile.style.marginTop = '0vh'
      headerMobile.style.position = 'fixed'
    }

    if(isOpen){
      setTimeout(
        ()=>{handleButtonClick()},500
      )
    }
  }, [usePathname()]); 

  return (
    <>
      <button className="mobile-menu-button" onClick={handleButtonClick}>
        <svg width="20" height="22" xmlns="http://www.w3.org" className='fondoTransparente'>
          <line x1='0' y1='1' x2='12' y2='1' stroke='white' strokeWidth='2' className='mmb-lineaSVG' ref={lineSVG01}/>
          <line x1='8' y1='1' x2='20' y2='1' stroke='white' strokeWidth='2' className='mmb-lineaSVG' ref={lineSVG02}/>
          <line x1='0' y1='10' x2='20' y2='10' stroke='white' strokeWidth='2' className='mmb-lineaSVG' ref={lineSVG05}/>
          <line x1='0' y1='20' x2='12' y2='20' stroke='white' strokeWidth='2' className='mmb-lineaSVG' ref={lineSVG03}/>
          <line x1='8' y1='20' x2='20' y2='20' stroke='white' strokeWidth='2' className='mmb-lineaSVG' ref={lineSVG04}/>
        </svg>
      </button>
      {isOpen && (
        <div className="mobile-menu-container" ref={mobileMenuRef}>
          <Link href={'/reel'} className="mobile-sections">
            <p className="options">
              REEL
            </p>
          </Link>
          {menuSectionsMobile.map((section, index) => (
            <Link
              href={section.href}
              key={lang == 'es' ? section.titleEs : section.titleEn}
              className="mobile-sections"
            >
              <p className="options">
                {lang == 'es' ? section.titleEs : section.titleEn}
              </p>
            </Link>
          ))}
          <div className='mobMenCon-footer'>
            <div className="mobMenCon-footer_social-media">
              {socialMedia.map((social) => (
                <a
                  href={social.href}
                  target="_blank"
                  className="social-icon"
                  key={social.title}
                >
                  <Image
                    src={social.svg}
                    alt={social.title}
                    width={25}
                    height={25}
                    className={"icono-redSocial"}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      <LanguageSwitch />

      <a href={'/'} className="logo logoMobile">
        <Image src={Rojo} alt="rojo studio" width={26} height={26} className='logo-imagen'/>
      </a>

    </>
  );
};

export default MobileHeader;
