'use client';
import { useLangHook } from '@/app/hooks/setLangHook';
import './styles.css';
import Link from 'next/link';
import { LangContext } from '@/app/providers/provider';
import { useContext } from 'react';

const MainProjectsHome = ({ projects, home, title, subtitle }: any) => {
  const { useLanguageSwitcher } = useLangHook();
  const { lang } = useContext(LangContext);

  const i18n = useLanguageSwitcher();
  const { works } = i18n.home;

  return (
    <div className="main-projects-container">
      {home ? (
        <div className="home-title">
          <h1 className="home-subtitle"> {subtitle}</h1>
        </div>
      ) : (
        <div className="page-info">
          <h1>{title}</h1>
          <h3 className="subtitle"> {subtitle}</h3>
          <h2 className="work">{works}</h2>
        </div>
      )}

      <div className="thumbnail-container">
        {projects.map((project: any) => (
          <Link
            href={project.href}
            className="thumbnail"
            style={{ backgroundImage: `url(${project.img})` }}
            key={project.title}
          >
            <div className="project-title">
              <p className='textoConBorde'>{lang == 'es' ? project.titleEs : project.titleEn}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MainProjectsHome;
