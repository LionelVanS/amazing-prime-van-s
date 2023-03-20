import colors from '@/utils/style/colors';
import Link from 'next/link';
import styled from 'styled-components';

// EXPORTED COMPONENT
export default function DropDownMenu({ link, setOpenLink }) {
   const subMenuLinks = link.subNav;

   return (
      <>
         <DropDownMenuDiv>
            <ul>
               {subMenuLinks
                  ? subMenuLinks.map((link, index) => (
                       <li key={index}>
                          <Link
                             href={link.path}
                             onClick={() => setOpenLink('')}
                          >
                             {link.name}
                          </Link>
                       </li>
                    ))
                  : ''}
            </ul>
         </DropDownMenuDiv>
      </>
   );
}

// STYLES
const DropDownMenuDiv = styled.div`
   background-color: ${colors.backgroundHoveredText};
   position: absolute;
   right: 0;
   left: 0;
   border-radius: 0 0 0.5rem 0.5rem;
   overflow: hidden;
   ul {
      display: flex;
      flex-flow: column;
      li {
         width: 100%;
         display: flex;
         justify-content: center;
         align-items: center;
         a {
            transition: none;
         }
         :hover {
            background-color: white !important;
            a {
               color: black !important;
            }
         }
      }
   }
`;
