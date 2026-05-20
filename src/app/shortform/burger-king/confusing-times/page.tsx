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
        src={'https://player.vimeo.com/video/882112436?h=76bba80866'}
      />

      <div className="info-container">
        <h1 className="title">BURGER KING | CONFUSING TIMES</h1>
        <div className="credits">
          <div className="vfx-credits">
            <div className="column-left">
              <p className="text">
                <span>VFX Sup:</span> Jonathan Monroig{' '}
              </p>
              <p className="text">
                <span>VFX Coord:</span> Natalia Páez{' '}
              </p>
            </div>
          </div>

          <div>
            <p className="text">
              <span>{productionCompany}:</span> MJZ Worldwide - Labhouse
            </p>
            <p className="text">
              <span>Director:</span> Juan Cabral
            </p>
          </div>
        </div>
        <BackArrow href={'/shortform'} />
      </div>
    </div>
  );
};

export default Page;
