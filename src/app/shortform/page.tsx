'use client';

import PageSectionVideo from '@/components/pageSectionVideo';
import MainProjectsHome from '@/components/mainProjectsHome';
import { useLangHook } from '../hooks/setLangHook';
import { projects } from './data';

const Page = () => {
  const { useLanguageSwitcher } = useLangHook();

  const i18n = useLanguageSwitcher();
  const { advertising } = i18n.navbar;
  const { advertisingTitle } = i18n.pages;
  return (
    <div>
      <PageSectionVideo
        src={
          'https://player.vimeo.com/video/910121439?h=fb1711d84b&autoplay=1&loop=1&background=1'
        }
      />

      <MainProjectsHome
        title={advertising}
        subtitle={advertisingTitle}
        projects={projects}
        home={false}
      />
    </div>
  );
};

export default Page;
