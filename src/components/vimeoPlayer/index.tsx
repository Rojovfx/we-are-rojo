import './styles.css';
export interface VimeoPlayerProps {
  src: string;
  clase?: string;
  claseIframe?: string;
}

const vimeoPlayer = ({ src, clase, claseIframe}: VimeoPlayerProps) => {
  const claseR = clase ? clase: "video-container"
  const claseIframeR = claseIframe ? claseIframe: "video"
  return (
    <div className={claseR}>
      <iframe
        className={claseIframeR}
        title="vimeo-player"
        src={src}
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
      ></iframe>
    </div>
  );
};

export default vimeoPlayer;
