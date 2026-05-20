'use client';
import VimeoPlayer from '@/components/vimeoPlayer';
import BackArrow from '@/components/backArrow';
import { useLangHook } from '@/app/hooks/setLangHook';
import '../../../pagesStyles.css';

const Page = () => {
  const { useLanguageSwitcher } = useLangHook();
  const i18n = useLanguageSwitcher();
  const { productionCompany } = i18n.commonWording;

  return (
    <div className="page-container">
      <VimeoPlayer
        src={'https://player.vimeo.com/video/1087103918'}
      />

      <div className="info-container">
        <h1 className="title">ESCENA FINAL</h1>
        <div className="credits">
          <div className="vfx-credits">
            <div className="column-left">
              <p className="text">
                <span>VFX Sup:</span> Diego Dzisiuk{' '}
              </p>
              <p className="text">
                <span>VFX Prod:</span> Jonathan Monroig{' '}
              </p>
            </div>
          </div>

          <div>
            <p className="text">
              <span>{productionCompany}:</span> Blurr Stories
            </p>
            <p className="text">
              <span>Director:</span> Diego Kompel
            </p>
            <p className="text">
              <span>Producer:</span> Fernanda Perez
            </p>
          </div>
        </div>
        <BackArrow href={'/advertising'} />
      </div>
    </div>
  );
};

export default Page;
