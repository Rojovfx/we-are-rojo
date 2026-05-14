import './styles.css';
import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Player from '@vimeo/player';

export interface VimeoPlayerProps {
  src: string;
  clase?: string;
  claseIframe?: string;
}

const VimeoPlayer = ({ src, clase, claseIframe}: VimeoPlayerProps) => {
  const iframeRef = useRef(null);
  const claseR = clase ? clase: "video-container"
  const claseIframeR = claseIframe ? claseIframe: "video"

  const pathname = usePathname();
  useEffect(() => {
    if (iframeRef.current) {
      const player = new Player(iframeRef.current);

      const quitarCobertor = () =>{
        if(document.querySelector('.placaFullPantalla')){
          const placa = document.querySelector('.placaFullPantalla') as HTMLElement
          placa.style.opacity = '0'    
          setTimeout(
            ()=>{placa.remove()},1000
          ) 
        }
      }

      player.ready().then(() => {
        player.on(
          'playing',
          ()=>{
              quitarCobertor()
          }
        )
      }).catch((error) => {
        quitarCobertor()
      });
    }
  }, [pathname]);

  return (
    <div className={claseR}>
      <iframe
        ref={iframeRef}
        className={claseIframeR}
        title="vimeo-player"
        src={src}
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
      ></iframe>
    </div>
  );
};

export default VimeoPlayer;
