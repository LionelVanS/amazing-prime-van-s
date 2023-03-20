// LIBS
import colors from '@/utils/style/colors';
import styled from 'styled-components';
import ContactInfo from './ContactInfo/ContactInfo';
import SocialMedia from './SocialMedia/SocialMedia';

// EXPORTED COMPONENT
export default function UserMenu() {
   return (
      <UserMenuDiv>
         <InfoDiv>
            <SocialMedia mediaLinks={mediaLinks} />
         </InfoDiv>

         <InfoDiv>
            <ContactInfo infoLink={infoLink} />
         </InfoDiv>
      </UserMenuDiv>
   );
}

// STYLES
const UserMenuDiv = styled.div`
   position: absolute;
   padding: 1rem;
   top: 4rem;
   right: 0;
   background-color: ${colors.backgroundHoveredText};
   border-radius: 0 0 0.5rem 0.5rem;
   display: flex;
   justify-content: space-between;
`;

const InfoDiv = styled.div`
   display: flex;
   flex-flow: column;
   padding: 0 1rem;
   p {
      font-size: 20px;
      font-weight: bold;
      margin: 0.5rem 1rem 1rem 0.5rem;
   }
   a {
      font-size: 18px;
      color: ${colors.notHoveredText};
      text-align: center;
      padding: 0.5rem 1.5rem;
      border-radius: 0.5rem;
      :hover {
         background-color: white;
         color: black;
      }
   }
`;

// LINKS
const mediaLinks = [
   {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/LionelVanS',
   },
   {
      name: 'Twitter',
      url: 'https://twitter.com/Lionel_Van_S',
   },
   {
      name: 'Github',
      url: 'https://github.com/LionelVanS',
   },
];

const infoLink = [
   {
      name: 'Adresse Mail',
      url: 'mailto:lionel.vs@gmail.com',
   },
   {
      name: 'Téléphone',
      url: 'tel:+33676856806',
   },
   {
      name: 'Saint Paul Lès Dax',
      url: 'https://www.google.com/maps/place/40990+Saint-Paul-l%C3%A8s-Dax/@43.7484954,-1.1641697,12z/data=!3m1!4b1!4m6!3m5!1s0xd56a8559fa154eb:0x406651748162e40!8m2!3d43.724934!4d-1.051409!16s%2Fm%2F03nvz66',
   },
];
