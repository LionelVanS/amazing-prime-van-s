import Link from 'next/link';

import { useRouter } from 'next/router';

import ArrowIcon from '../../../../Icons/ArrowIcon';

export default function NavLink({ link }) {
   const router = useRouter();
   return (
      <Link
         href={link.path}
         className={router.pathname == link.path ? 'active' : ''}
      >
         {link.name}
         <ArrowIcon />
      </Link>
   );
}
