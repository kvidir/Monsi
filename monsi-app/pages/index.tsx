import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="max-w-2xl mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4">Home Feed</h1>
        {/* Future: Map user posts here */}
        <div className="rounded p-6 border shadow bg-white">
          <p>Welcome to ChainSocial! Your decentralized, crypto-powered social feed will appear here.</p>
        </div>
      </main>
    </>
  );
}
