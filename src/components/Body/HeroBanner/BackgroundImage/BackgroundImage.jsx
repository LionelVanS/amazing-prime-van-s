import { useHeroBanner } from '@/utils/context/HeroBanner';
import Image from 'next/image';

export default function BackgroundImage() {
   const datas = useHeroBanner();
   return (
      <Image
         src={datas.image}
         alt="background"
         width="2500"
         height="1667"
         priority
      />
   );
}
