import Link from 'next/link';

export default function SocialMedia({ mediaLinks }) {
   return (
      <>
         <p>Réseaux</p>
         {mediaLinks.map((link, index) => (
            <Link
               key={index}
               href={link.url}
               target="_blank"
               rel="noopener noreferrer"
            >
               {link.name}
            </Link>
         ))}
      </>
   );
}
