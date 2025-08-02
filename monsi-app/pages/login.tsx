import Navbar from '@/components/Navbar';

export default function Login() {
  return (
    <>
      <Navbar />
      <main className="max-w-md mx-auto py-8">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <form className="space-y-4">
          <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
          <input type="password" placeholder="Password" className="w-full p-2 border rounded" />
          <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded">Login</button>
        </form>
        <div className="mt-4 text-center">
          <a href="/signup" className="underline">Don't have an account? Sign Up</a>
        </div>
        <div className="mt-4 text-center">
          <button className="underline">Connect Wallet</button>
        </div>
      </main>
    </>
  );
}
