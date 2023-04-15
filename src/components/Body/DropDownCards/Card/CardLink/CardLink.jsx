import Link from 'next/link';
import { useRouter } from 'next/router';
import BackgroundImage from '../../../BackgroundImage/BackgroundImage';
import { handleClick } from '@/utils/functions/handleClick';

export default function CardLink({ data, isHoveredCard }) {
   const router = useRouter();

   return (
      <Link href={data.link} onClick={(e) => handleClick(e, router, data)}>
         <BackgroundImage data={data} isHoveredCard={isHoveredCard} />
      </Link>
   );
}
