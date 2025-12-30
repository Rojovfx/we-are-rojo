'use client';
import VimeoPlayer from '@/components/vimeoPlayer';
import BackArrow from '@/components/backArrow';
import { useLangHook } from '@/app/hooks/setLangHook';
import '../../pagesStyles.css';

const Page = () => {
  const { useLanguageSwitcher } = useLangHook();
  const i18n = useLanguageSwitcher();
  const { title, synopsis, date } = i18n.cometierra;
  const { synopsisWord, productionCompany, releaseDate, DOP } =
    i18n.commonWording;

  return (
    <div className="page-container">
      <VimeoPlayer
        src={'https://player.vimeo.com/video/1024494047'}
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
              <span>VFX Prod:</span> Leonardo Erhardt{' '}
            </p>
            <p className="text">
              <span>VFX Coord:</span> Ariadna Ortiz / Jorge Benjardino{' '}
            </p>
          </div>

          <div className="production-credits">
            <p className="text">
              <span>{productionCompany}:</span> Cimarron
            </p>
            <p className="text">
              <span>Director:</span> Daniel Burman / Martin Hodara{' '}
            </p>
            <p className="text">
              <span>{DOP}:</span> Rolo Pulpeiro
            </p>
          </div>
        </div>
        <div className="credits">
          <p className="column-left">
            <span>{releaseDate}:</span> {date}{' '}
          </p>
          <p className="text">
            <span>VFX Shots:</span> 92{' '}
          </p>
        </div>
        <BackArrow href={'/episodic'} />
      </div>
    </div>
  );
};

export default Page;
