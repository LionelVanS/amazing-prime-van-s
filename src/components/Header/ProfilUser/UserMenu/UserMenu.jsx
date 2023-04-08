import styled from 'styled-components';

import { colors } from '@/utils/style/colors';

import ContactInfo from './ContactInfo/ContactInfo';
import SocialMedia from './SocialMedia/SocialMedia';

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

const UserMenuDiv = styled.div`
   position: absolute;
   padding: 1vw;
   top: 3.5vw;
   right: 0;
   background-color: ${colors.lightGreyBackground};
   border-radius: 0 0 0.5vw 0.5vw;
   display: flex;
   z-index: 2;
`;

const InfoDiv = styled.div`
   display: flex;
   flex-flow: column;
   padding: 0 1vw;
   p {
      font-size: 1vw;
      font-weight: bold;
      margin: 0.5vw 1vw 1vw 0.5vw;
   }
   a {
      font-size: 1vw;
      color: ${colors.text};
      padding: 0.5vw 1.5vw;
      border-radius: 0.5vw;
      :hover {
         background-color: white;
         color: black;
      }
   }
`;

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
      isWebLink: false,
   },
   {
      name: 'Téléphone',
      url: 'tel:+33676856806',
      isWebLink: false,
   },
   {
      name: 'Saint Paul Lès Dax',
      url: 'https://www.google.com/maps/place/40990+Saint-Paul-l%C3%A8s-Dax/@43.7484954,-1.1641697,12z/data=!3m1!4b1!4m6!3m5!1s0xd56a8559fa154eb:0x406651748162e40!8m2!3d43.724934!4d-1.051409!16s%2Fm%2F03nvz66',
      isWebLink: true,
   },
];
