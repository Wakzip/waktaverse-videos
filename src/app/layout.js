import localFont from 'next/font/local';
import './globals.css';
import Navbar from './scripts/navbar';
import ClientLayout from './client-layout';

const NotoBold = localFont({ 
  src: '../../public/fonts/NotoSansKR-Bold.ttf',
  name: 'Noto Sans KR',
  weight: '400 700',
 });

const Noto = localFont({ 
  src: '../../public/fonts/NotoSansKR-VariableFont_wght.ttf',
  name: 'Noto Sans KR',
  weight: '400 700',
});

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
      <body className={Noto.className}>
        <ClientLayout>
                {children}
        </ClientLayout>
      </body>
    </html>
  );
}
