import WalletConnect from './WalletConnect';

export default function UserBar() {
  return (
    <div className="flex justify-between items-center mb-4 p-4 rounded border bg-white shadow">
      <div>
        <span className="font-semibold">Logged in as:</span> Guest
      </div>
      <WalletConnect />
    </div>
  );
}
