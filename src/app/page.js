'use client';

import { useState, useEffect } from 'react';
import { Banner } from './scripts/banner';
import PlaylistCard from './scripts/playlistcard';
import { useSession } from 'next-auth/react';
import './globals.css';

export default function HomePage() {
  const { data: session } = useSession();
  return (
    <>
    <div className='banner-container'>
      {session ? (
        <><div className='banner-section'>
            <h1>반가워요, {session.user.name}님!</h1>
          </div></>
      ) : (
        <><div className='banner-section'>
              <h1>Waktaverse Videos에 오신 것을 환영해요!</h1>
          </div>
          <div className='hello'>
            <a href='https://localhost:3000/oauth/authorize?callbackUrl=https://localhost:3000/callback'>안녕하세요</a>
          </div></>
      )}
    </div>
    </>
  );
}
