import { useHeroBanner } from '@/utils/context/heroBanner';
import Image from 'next/image';

export default function BackgroundImage() {
   const datas = useHeroBanner();
   return (
      <Image
         src={datas.image}
         alt="background"
         width="auto"
         height="auto"
         priority
      />
   );
}
