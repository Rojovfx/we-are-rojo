'use client';
import './styles.css';
import Image from 'next/image';
import { socialMedia } from '../header/data';
import iconoTouch from '../../../public/iconoTouch.png';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { projects as proyectosAdversiting  } from '../../app/advertising/data'
import { projects as proyectosEpisodic  } from '../../app/episodic/data'
import { projects as proyectosFeatures  } from '../../app/features/data'
import { useRouter } from 'next/navigation';

const Footer = () => {
  const router = useRouter();
  const [isAbout, setIsAbout] = useState(false);
  const [deviceMobile, setDeviceMobile] = useState(false);

  useEffect(() => {
    const isMobile =
      typeof window !== 'undefined' &&
      window.matchMedia('(max-width: 1000px)').matches;

    if (isMobile) {
      setDeviceMobile(true);
    }
  }, []);

  
  let listado:any[] = []
  let posicion:number
  let titulo:String
  let posicionInicialTouch:number
  let posicionFinalTouch:number

  const inicioTouch = (e:any) =>{
    posicionInicialTouch = e.touches[0].clientX
  }

  const finTouch = (e:any) =>{
    posicionFinalTouch = e.changedTouches[0].clientX
    const movimiento = Number(posicionFinalTouch) - Number(posicionInicialTouch)
    if(movimiento > 100){
      posicion = posicion + 1
      if(posicion > (listado.length-1)){
        posicion = 0
      }
      const ruta = listado[posicion].href 
      router.push(ruta);
    }
    if(movimiento < -100){
      posicion = posicion - 1
      if(posicion < 0){
        posicion = (listado.length-1)
      }
      const ruta = listado[posicion].href 
      router.push(ruta);
    }
  }

  const pathname = usePathname();
  useEffect(() => {
    const clase = document.getElementsByClassName('page-container')
    const unTitulo = document.getElementsByClassName('title')
    if(clase.length > 0){
      if(pathname.indexOf('features/') > -1){
        listado = proyectosFeatures
      }
      if(pathname.indexOf('episodic/') > -1){
        listado = proyectosEpisodic
      }
      if(pathname.indexOf('advertising/') > -1){
        listado = proyectosAdversiting
      }      
    }
    if(unTitulo.length > 0){
      titulo = unTitulo[0].textContent
      posicion = listado.findIndex((e) => e.titleEn == titulo || e.titleEs == titulo || e.title == titulo)
    }
    const imagenTouch = document.getElementsByClassName('icono-touch')
    if(listado.length > 0){
      const elemento = clase[0]
      elemento.addEventListener('touchstart', inicioTouch)
      elemento.addEventListener('touchend', finTouch)
    }

    if(pathname == '/about'){
      setIsAbout(true)
    }else{
      setIsAbout(false)
    }
  }, [usePathname()]); 


  return (
    <footer className="footer">
      <p className="country">
        BUENOS AIRES, ARGENTINA <br className="mobile-break" />{' '}
        <span className="separator"> - </span>TENERIFE, ESPAÑA
      </p>
      <div className="legal">
        <div className='contenedorFraseLegal'>
          <p>Copyright©2026 ROJO Studio</p>
        </div>
        {isAbout || !deviceMobile ? (
        <div className="social-media">
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
        ):(<></>)}
      </div>
    </footer>
  );
};

export default Footer;
