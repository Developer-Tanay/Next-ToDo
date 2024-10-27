import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
// import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Next-ToDo - Create Your ToDo with AI right Now!',
  description: 'Leave procrastination forever. Just say AI to create your own to-do list',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <Navbar />
        <div className="bg-gradient-to-r from-blue-100 to-purple-100 min-h-screen flex flex-col items-center py-12">
          {children}
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}
