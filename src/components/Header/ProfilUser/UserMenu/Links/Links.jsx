import Link from 'next/link';
import { useRouter } from 'next/router';
import { handleClick } from '@/utils/functions/handleClick';

export default function Links({ links }) {
   const router = useRouter();
   return (
      <>
         <p>{links.type}</p>

         {links.data.map((data, index) => (
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
