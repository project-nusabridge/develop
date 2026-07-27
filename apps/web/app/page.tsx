import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NusaBridge - Home',
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to NusaBridge</h1>
        <p className="text-xl text-gray-600">Connect Communities, Create Opportunities</p>
      </div>
    </main>
  );
}
