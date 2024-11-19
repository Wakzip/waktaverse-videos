import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './scripts/navbar';
import ClientLayout from './client-layout';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Waktaverse Videosㅣ함께 만들어 가는 왁타버스 생활',
  description: '모든 왁타버스 동영상을 내 손 안에.',
  openGraph: {
    title: 'Waktaverse Videosㅣ함께 만들어 가는 왁타버스 생활',
    description: '모든 왁타버스 동영상을 내 손 안에.',
    images: [
      {
        url: 'https://waktaverse-videos.vercel.app/metadata.png',
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientLayout>
          <div className="container">
              {children}
          </div>
        </ClientLayout>
      </body>
    </html>
  );
}
