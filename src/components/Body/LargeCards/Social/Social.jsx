import styled from 'styled-components';
import { useState } from 'react';

import TwitterIcon from '@/components/Icons/TwitterIcon';
import LinkedInIcon from '@/components/Icons/LinkedInIcon';
import GithubIcon from '@/components/Icons/GithubIcon';
import DownloadIcon from '@/components/Icons/DownloadIcon';
import SocialLink from './SocialLink/SocialLink';
import LinkDescription from './LinkDescription/LinkDescription';

export default function Social() {
   // Contains socialLinks.name of hovered icon
   const [isHovered, setIsHovered] = useState();
   return (
      <>
         <SocialDiv>
            <ul>
               {socialLinks.map((link, index) => (
                  <li
                     key={index}
                     onMouseOver={() => setIsHovered(link.name)}
                     onMouseLeave={() => setIsHovered()}
                  >
                     <SocialLink link={link} />
                     {isHovered == link.name ? (
                        <LinkDescription name={link.name} />
                     ) : (
                        ''
                     )}
                  </li>
               ))}
            </ul>
         </SocialDiv>
      </>
   );
}

const SocialDiv = styled.div`
   align-items: center;
   margin-left: 3vw;
   li {
      position: relative;
      margin-left: 1vw;
      display: flex;
      justify-content: center;
   }
`;

const socialLinks = [
   {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/LionelVanS',
      icon: <LinkedInIcon />,
   },
   {
      name: 'Twitter',
      url: 'https://twitter.com/Lionel_Van_S',
      icon: <TwitterIcon />,
   },
   {
      name: 'Github',
      url: 'https://github.com/LionelVanS',
      icon: <GithubIcon />,
   },
   {
      name: 'Télécharger mon CV',
      url: '/pdf/CV_Van_Schellebeck_Lionel_DéveloppeurWeb.pdf',
      icon: <DownloadIcon />,
   },
];
