import Link from 'next/link';

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-gray-700 xl:text-base text-[14px] hover:text-gray-900 font-medium transition-colors">
      {children}
    </Link>
  );
}

export default NavLink;
