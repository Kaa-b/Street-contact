import Link from 'next/link';

type Props = {
    text: string
    href: string
    active: boolean
}

const NavItem = ({ text, href, active }: Props) => {
  return (
    <Link href={href}>
      {text}
    </Link>
  );
};

export default NavItem;