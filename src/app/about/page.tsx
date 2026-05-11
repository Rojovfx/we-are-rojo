'use client';
import { isMobile } from '../../../utilidades/globales.js';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useLangHook } from '../hooks/setLangHook';
import './styles.css';

const Page = () => {
  const [deviceMobile, setDeviceMobile] = useState(false);
  const { useLanguageSwitcher } = useLangHook();

  const i18n = useLanguageSwitcher();

  //const { text, subtext } = i18n.pages.aboutUs;
  const { text} = i18n.pages.aboutUs;
  const { contact } = i18n.commonWording;

  useEffect(() => {
    if (isMobile()) {
      setDeviceMobile(true);
    }
  }, []);

  return (
    <div>
      <div className="about-container">
        <div className="about-text">
          <p>
            {text}
            {/*<span className="span">{subtext}</span>*/}
          </p>

          <div className="social-text">
            <div>
              <p>{contact}</p>
              <a href="mailto:contact@wearerojo.com" target="_blank">
                <p className="social-media">contact@wearerojo.com</p>
              </a>
            </div>
          </div>
        </div>

        <Image
          src="/studio.jpg"
          alt="rojo studio"
          width={deviceMobile ? 400 : 600}
          height={deviceMobile ? 300 : 400}
          className="aboutImagen"
        />
      </div>
    </div>
  );
};

export default Page;
