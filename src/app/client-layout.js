"use client";

import { SessionProvider } from 'next-auth/react';
import Navbar from './scripts/navbar';

export default function ClientLayout({ children }) {
  return (
    <SessionProvider>
      <Navbar />
          {children}
    </SessionProvider>
  );
} 