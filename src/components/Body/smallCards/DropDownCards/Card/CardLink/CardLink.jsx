import Link from 'next/link';
import { useRouter } from 'next/router';
import { handleClick } from '@/utils/functions/handleClick';
import BackgroundImage from '../../../BackgroundImage/BackgroundImage';

export default function CardLink({ data, isHoveredCard }) {
   const router = useRouter();

   return (
      <Link href={data.link} onClick={(e) => handleClick(e, router, data)}>
         <BackgroundImage data={data} isHoveredCard={isHoveredCard} />
      </Link>
   );
}
