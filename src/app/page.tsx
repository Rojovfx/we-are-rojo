'use client';
import { useEffect, useState, useRef } from 'react';
import MainProjectsHome from '@/components/mainProjectsHome';
import VimeoPlayer from '@/components/vimeoPlayer';
import PageSectionVideo from '@/components/pageSectionVideo';
import { useLangHook } from './hooks/setLangHook';
import { projects } from './dataHome';
import './styles.css';
import Image from 'next/image';
import BottomArrow from '../components/images/down-arrow.svg';
import Rojo from '../components/images/rojo.svg';

const Home = () => {
  const [deviceMobile, setDeviceMobile] = useState(false);
  const { useLanguageSwitcher } = useLangHook();

  const i18n = useLanguageSwitcher();
  const { title } = i18n.home;
  const { latestWork } = i18n.home;


  useEffect(() => {
    const isMobile =
      typeof window !== 'undefined' &&
      window.matchMedia('(max-width: 1000px)').matches;

    if (isMobile) {
      setDeviceMobile(true);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', revisarMargenSuperior);

    return () => {
      window.removeEventListener('scroll', revisarMargenSuperior);
    };
  }, []);


  const scrollToNextSection = () => {
    const menu:any = document.getElementsByClassName('mobile-header')[0]
    const contenedor:any = document.getElementsByClassName('main-projects-container')[0]
    
    if(menu){
      menu.style.transition = 'margin-top 0.5s'
      menu.style.marginTop = '0vh'
      eliminarElementosDeFondo()
      setTimeout(
        ()=>{
          menu.style.position = 'sticky'
          contenedor.style.paddingTop = '0px';
        },600
      )
    }
  };

  const revisarMargenSuperior = () =>{
    const menu:any = document.getElementsByClassName('mobile-header')[0]
    const contenedor:any = document.getElementsByClassName('main-projects-container')[0]

    if(menu){
      const top = menu.getBoundingClientRect().top
      if(top < 50 && top!=0){
        menu.style.marginTop = '0vh'
        menu.style.position = 'sticky'
        contenedor.style.paddingTop = '0px';
        //window.scrollTo(0, 0)
        eliminarElementosDeFondo()
      }
    }
  }

  const eliminarElementosDeFondo = () =>{
    const aEliminar:any = document.getElementsByClassName('aEliminarHome')
      for(const e of aEliminar){
        e.style.display = 'none';
      }
  }

  return (
    <div className="home-content">
      {deviceMobile ? (
        <>
          <Image src={Rojo} alt="rojo studio" width={80} height={50} className='logo-sobreVideo aEliminarHome'/>
          <div className="arrow arrowHome aEliminarHome">
            <p className='localidadHomeMobile textoConBorde'>BUENOS AIRES</p>
            <p className='localidadHomeMobile textoConBorde'>TENERIFE</p>
            <Image
              onClick={scrollToNextSection} 
              src={BottomArrow}
              alt="bottom arrow"
              width={30}
              height={30}
              className="arrow-img arrowHome-img"
            />
          </div>
          <VimeoPlayer
            src={'https://player.vimeo.com/video/910805500?badge=0&autoplay=1&muted=1&loop=1&background=1'}
            clase = {"video-container video-container-home aEliminarHome"}
            claseIframe= {"video video-home"}
          />
          
        </>
      ) : (
        <PageSectionVideo
          src={
            'https://player.vimeo.com/video/910805500?badge=0&autoplay=1&muted=1&loop=1&background=1'
          }
        />
      )}
      <MainProjectsHome projects={projects} subtitle={title} home={true} />
    </div>
  );
};

export default Home;
