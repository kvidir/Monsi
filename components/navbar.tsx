import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-3 border-b shadow bg-white">
      <div className="text-2xl font-bold">ChainSocial</div>
      <div className="flex space-x-6">
        <Link href="/">Home</Link>
        <Link href="/marketplace">Marketplace</Link>
        <Link href="/messages">Messages</Link>
        <Link href="/profile">Profile</Link>
        <Link href="/login">Login</Link>
      </div>
    </nav>
  );
}
