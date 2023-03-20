// EXPORTED COMPONENT
export default function ContactInfo({ infoLink }) {
   return (
      <>
         <p>Informations</p>
         {infoLink.map((link, index) => (
            <a
               key={index}
               href={link.url}
               target="_blank"
               rel="noopener noreferrer"
            >
               {link.name}
            </a>
         ))}
      </>
   );
}
