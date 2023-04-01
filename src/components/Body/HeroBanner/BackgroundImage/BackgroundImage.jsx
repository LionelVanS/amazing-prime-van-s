import Image from 'next/image';

export default function BackgroundImage({ image }) {
   return (
      <Image src={image} alt="background" width="2500" height="1667" priority />
   );
}
