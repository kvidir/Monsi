import Navbar from '@/components/Navbar';
import WalletConnect from '@/components/WalletConnect';

export default function Profile() {
  return (
    <>
      <Navbar />
      <main className="max-w-xl mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4">My Profile</h1>
        <div className="rounded p-6 border shadow bg-white">
          <p>User information, posts, wallet, subscriptions will be displayed here.</p>
          <WalletConnect />
        </div>
      </main>
    </>
  );
}
