'use client';
import { useEffect, useState} from 'react';
import MainProjectsHome from '@/components/mainProjectsHome';
import VimeoPlayer from '@/components/vimeoPlayer';
import PageSectionVideo from '@/components/pageSectionVideo';
import { useLangHook } from './hooks/setLangHook';
import { projects } from './dataHome';
import './styles.css';
import Image from 'next/image';
import BottomArrow from '../components/images/down-arrow.svg';
import Rojo from '../components/images/rojo.svg';
import { isMobile, ubicacion, altoPantalla } from '../../utilidades/globales.js';


const Home = () => {
  const [deviceMobile, setDeviceMobile] = useState(false);
  const { useLanguageSwitcher } = useLangHook();

  const i18n = useLanguageSwitcher();
  const { title } = i18n.home;
  const { latestWork } = i18n.home;


  useEffect(() => {
    if (isMobile()) {
      setDeviceMobile(true);
    }
  }, []);


  useEffect(() => {
    const revisarMargenSuperior = () =>{
      const menu:any = document.getElementsByClassName('mobile-header')[0]
      const contenedor:any = document.getElementsByClassName('main-projects-container')[0]

      if(menu){
        const top = menu.getBoundingClientRect().top
        if(top <= 0){
          menu.style.marginTop = '0vh'
          menu.style.position = 'sticky'
          if(contenedor && (ubicacion() == '/')){
            contenedor.style.paddingTop = '0px';
          }
          //window.scrollTo(0, 0)
          eliminarElementosDeFondo()
        }
      }
    }

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

  const eliminarElementosDeFondo = () =>{
    const aEliminar:any = document.getElementsByClassName('aEliminarHome')
      for(const e of aEliminar){
        e.style.display = 'none';
      }
  }

  useEffect(() => {
      setTimeout(
        ()=>{
          if(document.querySelector('.placaFullPantalla')){
            const placa = document.querySelector('.placaFullPantalla') as HTMLElement
            placa.style.opacity = '0'    
            setTimeout(
              ()=>{placa.remove()},1000
            ) 
          }
        },3500
      )
  }, []);


  useEffect(() => {

    const opacidadDeElementos = () =>{
      if(isMobile()){
        const menu:any = document.getElementsByClassName('mobile-header')[0]
        const currentScrollY = menu.getBoundingClientRect().top;
        const porcentaje = currentScrollY / altoPantalla()
        const elementosFondo:any = document.getElementsByClassName('aEliminarHome')
        const contenedor:any = document.getElementsByClassName('main-projects-container')[0]

        for(let e of elementosFondo){
          console.log(porcentaje)
          if (porcentaje > 0.8){
            e.style.opacity = porcentaje
          }else if(porcentaje > 0.65){
            e.style.opacity = porcentaje*0.40
          }else if(porcentaje > 0.3){
            e.style.opacity = porcentaje*0.15
          }else{
            e.style.opacity = porcentaje*0
          }
        }
        menu.style.opacity = 1 - porcentaje
        contenedor.style.opacity = 1 - porcentaje
      }
    }

    window.addEventListener('scroll', opacidadDeElementos);

    return () => {
      window.removeEventListener('scroll', opacidadDeElementos);
    };
  }, []);

  return (
    <div className="home-content">
      {deviceMobile ? (
        <>
          <div className="placaFullPantalla"></div>
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
            src={'https://player.vimeo.com/video/910805500?badge=0&autoplay=1&muted=1&loop=1&background=1&playsinline=1'}
            clase = {"video-container video-container-home aEliminarHome"}
            claseIframe= {"video video-home"}
          />
          
        </>
      ) : (
        <PageSectionVideo
          src={
            'https://player.vimeo.com/video/910805500?badge=0&autoplay=1&muted=1&loop=1&background=1&playsinline=1'
          }
        />
      )}
      <MainProjectsHome projects={projects} subtitle={title} home={true} />
    </div>
  );
};

export default Home;
