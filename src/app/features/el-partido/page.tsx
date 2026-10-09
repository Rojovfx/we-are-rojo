'use client';
import VimeoPlayer from '@/components/vimeoPlayer';
import BackArrow from '@/components/backArrow';
import '../../pagesStyles.css';
import { useLangHook } from '@/app/hooks/setLangHook';

const Page = () => {
  const { useLanguageSwitcher } = useLangHook();
  const i18n = useLanguageSwitcher();
  const { title, synopsis, date } = i18n.elPartido;
  const { synopsisWord, productionCompany, releaseDate, DOP } =
    i18n.commonWording;
  return (
    <div className="page-container">
      <VimeoPlayer
        src={'https://player.vimeo.com/video/1231812396'}
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
              <span>VFX Sup:</span> Jonathan Monroig{' '}
            </p>
            <p className="text">
              <span>VFX Prod:</span> Jorge Benjardino{' '}
            </p>
          </div>

          <div>
            <p className="text">
              <span>{productionCompany}:</span> Industria del Milagro & Blurr Stories
            </p>
            <p className="text">
              <span>Director:</span> Juan Cabral & Santiago Franco
            </p>
            <p className="text">
              <span>{DOP}:</span> Pablo Gallego
            </p>
          </div>
        </div>
        <div className="credits">
          <p className="column-left">
            <span>{releaseDate}:</span> {date}{' '}
          </p>
          <p className="text">
            <span>VFX Shots:</span> 186{' '}
          </p>
        </div>
        <BackArrow href={'/features'} />
      </div>
    </div>
  );
};

export default Page;
