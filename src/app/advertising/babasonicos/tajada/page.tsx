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
        src={'https://player.vimeo.com/video/'}
      />

      <div className="info-container">
        <h1 className="title">BABASÓNICOS | TAJADA</h1>
        <div className="credits">
          <div className="vfx-credits">
            <div className="column-left">
              <p className="text">
                <span>VFX Sup:</span> Jonathan Monroig{' '}
              </p>
              <p className="text">
                <span>VFX Prod:</span> Ariadna Ortiz{' '}
              </p>
            </div>
          </div>

          <div>
            <p className="text">
              <span>{productionCompany}:</span> Labhouse
            </p>
            <p className="text">
              <span>Director:</span> Juan Cabral
            </p>
            <p className="text">
              <span>Producer:</span> Nicolás Abelovich
            </p>
            <p className="text">
              <span>DOP:</span>  Javier Juliá
            </p>
            <p className="text">
              <span>Post Sup:</span>  Julieta Fernández Castagnino
            </p>
          </div>
        </div>
        <BackArrow href={'/advertising'} />
      </div>
    </div>
  );
};

export default Page;
