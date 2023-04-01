import Link from 'next/link';
import BackgroundImage from '../../BackgroundImage/BackgroundImage';

export default function CardLink({ data }) {
   return (
      <Link href={data.link}>
         <BackgroundImage data={data} />
      </Link>
   );
}
