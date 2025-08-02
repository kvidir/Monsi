import Navbar from '@/components/Navbar';

export default function Signup() {
  return (
    <>
      <Navbar />
      <main className="max-w-md mx-auto py-8">
        <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
        <form className="space-y-4">
          <input type="text" placeholder="Username" className="w-full p-2 border rounded" />
          <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
          <input type="password" placeholder="Password" className="w-full p-2 border rounded" />
          <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded">Sign Up</button>
        </form>
        <div className="mt-4 text-center">
          <a href="/login" className="underline">Already have an account? Login</a>
        </div>
      </main>
    </>
  );
}
