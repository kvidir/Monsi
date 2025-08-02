import Navbar from '@/components/Navbar';

export default function Messages() {
  return (
    <>
      <Navbar />
      <main className="max-w-xl mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4">Messages</h1>
        <div className="rounded p-6 border shadow bg-white">
          <p>Chat and messaging features will go here.</p>
        </div>
      </main>
    </>
  );
}
