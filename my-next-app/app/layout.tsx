// app/layout.tsx
import Link from 'next/link';
import '../styles/globals.css';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <header className="bg-blue-800 text-white p-4 text-center">
        <h1>Happy Birthday, Shawn Seah Yao Ting!</h1>
      </header>
      
      {/* Navbar for Navigation */}
      <nav className="bg-blue-600 text-white p-4">
        <div className="flex justify-center space-x-8">
          <Link href="/" className="text-lg hover:underline">
            Home
          </Link>
          <Link href="/quiz" className="text-lg hover:underline">
            Quiz
          </Link>
          <Link href="/memory-lane" className="text-lg hover:underline">
            Memory Lane
          </Link>
          {/* Add more links as needed */}
        </div>
      </nav>
      
      {/* Main content */}
      <main>{children}</main>

      <footer className="bg-blue-800 text-white p-4 text-center">
        <p>Made with ❤️</p>
      </footer>
    </div>
  );
};

export default Layout;
