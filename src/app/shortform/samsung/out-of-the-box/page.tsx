'use client';
import VimeoPlayer from '@/components/vimeoPlayer';
import BackArrow from '@/components/backArrow';
import { useLangHook } from '@/app/hooks/setLangHook';
import '../../../pagesStyles.css';

const Page = () => {
  const { useLanguageSwitcher } = useLangHook();
  const i18n = useLanguageSwitcher();
  const { productionCompany, producer, DOP } = i18n.commonWording;

  return (
    <div className="page-container">
      <VimeoPlayer
        src={'https://player.vimeo.com/video/880993277?h=7e5b68a427'}
      />
      <div className="info-container">
        <h1 className="title">SAMSUNG | TECH GOES GREEN | OUT OF THE BOX</h1>
        <div className="credits">
          <div className="vfx-credits">
            <div className="column-left">
              <p className="text">
                <span>VFX Sup:</span> Jonathan Monroig{' '}
              </p>
            </div>
          </div>

          <div>
            <p className="text">
              <span>{productionCompany}:</span> Can Can Club - 1stAveMachine
            </p>
            <p className="text">
              <span>Director:</span> Becho & Mab
            </p>
            <p className="text">
              <span>{producer}:</span> Mechi Serrano
            </p>
            <p className="text">
              <span>{DOP}:</span> Lautaro Isern
            </p>
          </div>
        </div>
        <BackArrow href={'/shortform'} />
      </div>
    </div>
  );
};

export default Page;
