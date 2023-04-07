import Link from 'next/link';
import BackgroundImage from '../../../BackgroundImage/BackgroundImage';

export default function CardLink({ data, isHoveredCard, isExternalLink }) {
   return (
      <Link
         href={data.link}
         target={isExternalLink ? '_blank' : '_self'}
         rel="noopener noreferrer"
      >
         <BackgroundImage data={data} isHoveredCard={isHoveredCard} />
      </Link>
   );
}
