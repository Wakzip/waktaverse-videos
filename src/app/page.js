'use client';

import { useState, useEffect } from 'react';
import { Banner } from './scripts/banner';
import PlaylistCard from './scripts/playlistcard';
import { useSession } from 'next-auth/react';
import { CiLogin } from 'react-icons/ci';
import LoginModal from './scripts/modal/login';
import InfoRender from './scripts/render-info';
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
                <strong>
                  <CiLogin className="login-icon" /> 로그인
                </strong>
              </button>
            </div>
            <img src="/wakta_videos_home_banner.png" alt="배너 이미지" className='home_banner_picture'/>
          </section>
          <section className="video">
            
          </section>
          <section className="playlist">
            
          </section>
          <footer>
            <div className='footer-section'>
              <img src="/waktaverse_videos_new_logo_gray_text.png" alt="로고" className='footer-logo'/>
              <p className='madeby'><strong>Copyright ⓒ Team WakzipㆍWaktaverse Videos.</strong></p>
              <p className='info_service'>Waktaverse Videos는 왁타버스에서 제공하는 서비스가 아닙니다.</p>
              <p className='info_contact_mail'><a href='mailto:contact@wakzip.kr?subject=[문의]?body=문의를 작성하시고 전송하시면 Team Wakzip 서비스 팀으로 자동 전송됩니다.'>[문의] contact@wakzip.kr</a></p>
              <InfoRender />
            </div>
          </footer>
        </>
      )}
      {showLoginModal && <LoginModal show={showLoginModal} clickLogin={clickLogin} />}
    </>
  );
}
