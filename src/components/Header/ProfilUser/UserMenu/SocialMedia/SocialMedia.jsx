// LIBS
import Link from 'next/link';

// EXPORTED COMPONENT
export default function SocialMedia({ mediaLinks }) {
   return (
      <>
         <p>Réseaux</p>
         {mediaLinks.map((link, index) => (
            <Link key={index} href={link.url}>
               {link.name}
            </Link>
         ))}
      </>
   );
}
