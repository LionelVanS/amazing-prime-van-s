import Link from 'next/link';
import { useRouter } from 'next/router';
import { handleClick } from '@/utils/functions/handleClick';
import socialLinks from '@/utils/data/header/profilUser/socialLinks';

export default function SocialMedia() {
   const router = useRouter;
   return (
      <>
         <p>Réseaux</p>
         {socialLinks.map((data, index) => (
            <Link
               key={index}
               href={data.link}
               onClick={(e) => handleClick(e, router, data)}
            >
               {data.name}
            </Link>
         ))}
      </>
   );
}
