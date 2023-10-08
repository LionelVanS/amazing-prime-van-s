import { useHeroBanner } from '@/utils/context/heroBanner';
import Image from 'next/image';

export default function BackgroundImage() {
   const data = useHeroBanner();
   return (
      <Image
         src={data.image}
         alt="background"
         width="auto"
         height="auto"
         priority
      />
   );
}
