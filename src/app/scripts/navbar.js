'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { CiLogin, CiLogout } from 'react-icons/ci';
import { BsSearch } from 'react-icons/bs';
import { useSession, signOut } from 'next-auth/react';
import LoginModal from './modal/login';
import Link from 'next/link';

export default function Navbar() {
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
      <nav className="navbar">
        <div className="logo">
          <a href='/'><img src="/waktaverse_videos_new_logo.png" width="50px" alt="설명"/></a>
        </div>
        <div className="right-section">
          <div className="page-links">
            <a href="/" className={currentPath === '/' ? 'active' : ''}>홈</a>
            <a href="/videos" className={currentPath === '/videos' ? 'active' : ''}>동영상</a>
            <a href="/playlist" className={currentPath === '/playlist' ? 'active' : ''}>플레이리스트</a>
            <a href="/artist" className={currentPath === '/artist' ? 'active' : ''}>아티스트</a>
            <a href="/search"><BsSearch /></a>
          </div>

          <div className="account-container">
            {session ? (
              <div className="profile-section" onClick={() => setShowDropdown(!showDropdown)}>
                <img
                  src={session.user.image || '/waktaverse_videos_new_logo.png'}
                  alt="Profile"
                  className="profile-picture"
                />
                {showDropdown && (
                  <div className="dropdown-menu">
                    <span className="dropdown-item">{session.user.name}</span>
                    <span className="dropdown-item"><a href='/setting'>설정</a></span>
                    <button onClick={() => signOut()} className="dropdown-item">
                      <CiLogout className="dropdown-icon" /> 로그아웃
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button onClick={clickLogin} className="login-btn">
                <CiLogin className="login-icon" /> 로그인
              </button>
            )}
          </div>
        </div>
      </nav>
      {showLoginModal && <LoginModal show={showLoginModal} clickLogin={clickLogin} />}
    </>
  );
}
