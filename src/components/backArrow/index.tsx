import Image from 'next/image';
import ArrowSvg from '../images/back-arrow.svg';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const BackArrow = ({ href }: any) => {
  const [enlace, setEnlace] = useState(href);

  useEffect(() => {
    if(sessionStorage.getItem("vineDeHomeRojo") == 'si'){
      setEnlace('/')
    }
  }, []); 

  return (
    <div>
      <Link href={enlace}>
        <Image src={ArrowSvg} alt="back arrow" width={25} height={25} />
      </Link>
    </div>
  );
};

export default BackArrow;
