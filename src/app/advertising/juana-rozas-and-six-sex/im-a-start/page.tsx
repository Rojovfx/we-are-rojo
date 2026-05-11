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
        src={'https://player.vimeo.com/video/944921072'}
      />

      <div className="info-container">
        <h1 className="title">JUANA ROZAS & SIX SEX | I'M A START</h1>
        <div className="credits">
          <div className="vfx-credits">
            <div className="column-left">
              <p className="text">
                <span>VFX Sup:</span> Jonathan Monroig{' '}
              </p>
              <p className="text">
                <span>VFX Prod:</span> Leonardo Erhardt{' '}
              </p>
            </div>
          </div>

          <div>
            <p className="text">
              <span>{productionCompany}:</span> Blurr Stories
            </p>
            <p className="text">
              <span>Director:</span> Jonathan Monroig
            </p>
            <p className="text">
              <span>Producer:</span> Fernanda Perez
            </p>
            <p className="text">
              <span>DOP:</span> Ramiro Civita
            </p>
          </div>
        </div>
        <BackArrow href={'/advertising'} />
      </div>
    </div>
  );
};

export default Page;
