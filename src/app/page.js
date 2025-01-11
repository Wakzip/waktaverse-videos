'use client';

import { useState, useEffect } from 'react';
import { Banner } from './scripts/banner';
import PlaylistCard from './scripts/playlistcard';
import { useSession } from 'next-auth/react';
import { CiLogin } from 'react-icons/ci';
import LoginModal from './scripts/modal/login';
import './globals.css';

export default function HomePage() {
  const { data: session } = useSession();
  const [showDropdown, setShowDropdown] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const clickLogin = () => setShowLoginModal(!showLoginModal);
  return (
    <>
      {session ? (
        <>
        <div className='banner-container'>
          <div className='banner-section'>
              <h1>반가워요, {session.user.name}님!</h1>
          </div>
        </div>
        </>
      ) : (
        <>
          <section className="home">
            <div className='banner-container'>
              <div className='banner-section'>
                <h1>왁타버스의 동영상을 한 곳에서!</h1>
              </div>
              <div className='hello'>
                <p><br></br>안녕하세요, 팬치와 이파리 여러분!</p>
                <p>Waktaverse Videos에 오신 것을 환영해요!</p>
                <p><br></br>아래 버튼으로 로그인하고,<br></br>Waktaverse Videos의 모든 기능을 이용해보세요!</p>
              </div>
              <button onClick={clickLogin} className="login-home">
                <CiLogin className="login-icon" /> 로그인
              </button>
            </div>
            <img alt="배너 이미지" className='home_banner_picture'/>
          </section>
        </>
      )}
      {showLoginModal && <LoginModal show={showLoginModal} clickLogin={clickLogin} />}
    </>
  );
}
