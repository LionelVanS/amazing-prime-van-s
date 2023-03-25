// LIBS
import Link from 'next/link';

// REACT HOOKS
import { useRouter } from 'next/router';

// IMPORTED COMPONENT
import ArrowIcon from '../../../Icons/ArrowIcon';

// EXPORTED COMPONENT
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
