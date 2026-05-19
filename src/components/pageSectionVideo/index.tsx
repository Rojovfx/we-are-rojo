'use client';
import Image from 'next/image';
import './styles.css';
import BottomArrow from '../images/down-arrow.svg';
import { useLangHook } from '@/app/hooks/setLangHook';

export interface PageSectionVideoProps {
  src: string;
}

const PageSectionVideo = ({ src }: PageSectionVideoProps) => {
  const { useLanguageSwitcher } = useLangHook();

  const i18n = useLanguageSwitcher();
  const { latestWork } = i18n.home;

  const scrollToNextSection = () => {
    const nextPosition = window.scrollY + window.innerHeight;

    window.scrollTo({
      top: nextPosition,
      behavior: 'smooth',
    });
  };
  return (
    <>
      <div onClick={scrollToNextSection} className="arrow">
        <p>{latestWork}</p>
        <Image
          src={BottomArrow}
          alt="bottom arrow"
          width={25}
          height={25}
          className="arrow-img"
        />
      </div>
      <div className="video-page-container">
        <div className="video-section-container">
          <iframe
            className="video-section"
            src={src}
            width="2560"
            height="1440"
            frameBorder={0}
            allow="autoplay; fullscreen; picture-in-picture"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default PageSectionVideo;
