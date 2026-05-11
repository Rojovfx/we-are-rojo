'use client';
import '../pagesStyles.css';
import VimeoPlayer from '@/components/vimeoPlayer';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import './styles.css';
import { isMobile } from '../../../utilidades/globales.js';

const Page = () => {
  const [isReelMobile, setIsReelMobile] = useState(false);

    const pathname = usePathname();
    useEffect(() => {
      if (isMobile() && pathname == '/reel'){
        setIsReelMobile(true)
      }else{
        setIsReelMobile(false)
      }
    })

  return (
    <div className={`page-container ${isReelMobile ? 'page-container-reelMobile' : ''}`}>
      <VimeoPlayer
        src={'https://player.vimeo.com/video/910187264?h=2cd41c1f82'}
      />
      <h1 className="title">REEL 2026</h1>
    </div>
  );
};

export default Page;
