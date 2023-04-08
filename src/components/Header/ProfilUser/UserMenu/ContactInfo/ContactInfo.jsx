export default function ContactInfo({ infoLink }) {
   return (
      <>
         <p>Informations</p>
         {infoLink.map((link, index) => (
            <a
               key={index}
               href={link.url}
               target={link.isWebLink ? '_blank' : '_self'}
               rel="noopener noreferrer"
            >
               {link.name}
            </a>
         ))}
      </>
   );
}
