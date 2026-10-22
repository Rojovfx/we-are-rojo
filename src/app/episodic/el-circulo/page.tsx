'use client';
import VimeoPlayer from '@/components/vimeoPlayer';
import BackArrow from '@/components/backArrow';
import { useLangHook } from '@/app/hooks/setLangHook';
import '../../pagesStyles.css';

const Page = () => {
  const { useLanguageSwitcher } = useLangHook();
  const i18n = useLanguageSwitcher();
  const { title, synopsis, date } = i18n.elCirculo;
  const { synopsisWord, productionCompany, releaseDate, DOP } =
    i18n.commonWording;

  return (
    <div className="page-container">
      <VimeoPlayer
        src={'https://player.vimeo.com/video/1232067254'}
      />

      <div className="info-container">
        <h1 className="title">{title}</h1>
        <div className="synopsis">
          <h3>
            <span>{synopsisWord}</span>
          </h3>
          <br></br>
          <p>{synopsis}</p>
        </div>
        <div className="credits">
          <div className="column-left">
            <p className="text">
              <span>VFX Sup:</span> Iván E. Sánchez Álvarez{' '}
            </p>
            <p className="text">
              <span>VFX Prod:</span>  Leonardo Mercado{' '}
            </p>
          </div>

          <div className="production-credits">
            <p className="text">
              <span>Showrunner:</span> Alejandro Lozano{' '}
            </p>
            <p className="text">
              <span>{DOP}:</span> Tonatiuh Martínez Valdéz
            </p>       
            <p className="text">
              <span>VFX Studio Sup:</span> Jonathan Monroig{' '}
            </p>
            <p className="text">
              <span>VFX Studio Prod:</span> Jorge Benjardino{' '}
            </p>
          </div>
        </div>
        <div className="credits">
          <p className="column-left">
            <span>{releaseDate}:</span> {date}{' '}
          </p>
          <p className="text">
            <span>VFX Shots:</span> 168{' '}
          </p>
        </div>
        <BackArrow href={'/episodic'} />
      </div>
    </div>
  );
};

export default Page;
