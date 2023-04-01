import Image from 'next/image';

export default function BackgroundImage({ data }) {
   return (
      <Image src={data.background} alt={data.title} width="500" height="768" />
   );
}
