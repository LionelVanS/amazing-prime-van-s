import Link from 'next/link';
import { useRouter } from 'next/router';
import { handleClick } from '@/utils/functions/handleClick';

export default function ContactInfo({ contactLinks }) {
   const router = useRouter();
   return (
      <>
         <p>Informations</p>
         {contactLinks.map((data, index) => (
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
