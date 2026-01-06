import '../pagesStyles.css';
import VimeoPlayer from '@/components/vimeoPlayer';
import './styles.css';

const Page = () => {
  return (
    <div className="page-container">
      <VimeoPlayer
        src={'https://player.vimeo.com/video/910187264?h=2cd41c1f82'}
      />
      <h1 className="title">REEL 2026</h1>
    </div>
  );
};

export default Page;
