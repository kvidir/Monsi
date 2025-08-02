import Navbar from '@/components/Navbar';

export default function Marketplace() {
  return (
    <>
      <Navbar />
      <main className="max-w-xl mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4">Marketplace</h1>
        <div className="rounded p-6 border shadow bg-white">
          <p>Buy, sell, and mint NFTs or digital goods here.</p>
        </div>
      </main>
    </>
  );
}
