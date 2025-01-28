'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { CiLogin } from 'react-icons/ci';
import { BiSolidError } from "react-icons/bi";
import '../globals.css';
import LoginModal from '../scripts/modal/login';

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
        <section className="home">
            <div className='banner-container'>
              <div className='banner-section-logined'>
                <h1>반가워요, {session.user.name}님!</h1>
              </div>
              <div className='hello'>
                <p>유저 이름 : {session.user.name}</p>
                <p>이메일 : {session.user.email}</p>
                <p>디스코드 연동 여부 : </p>
              </div>
            </div>
            
          </section>
          <footer>
            <div className='footer-section'>
              <img src="/waktaverse_videos_new_logo_gray_text.png" alt="로고" className='footer-logo'/>
              <p className='madeby'><strong>Copyright ⓒ Team WakzipㆍWaktaverse Videos.</strong></p>
              <p className='info_service'>Waktaverse Videos는 왁타버스에서 제공하는 서비스가 아닙니다.</p>
              <p className='info_contact_mail'><a href='mailto:contact@wakzip.kr?subject=[문의]?body=문의를 작성하시고 전송하시면 Team Wakzip 서비스 팀으로 자동 전송됩니다.'>[문의] contact@wakzip.kr</a></p>
            </div>
          </footer>
        </>
      ) : (
        <>
          <section className="setting_home">
            <div className='banner-container_setting'>
              <div className='banner-section'>
                <h1><BiSolidError/> 설정 이용에는 로그인이 필요해요!</h1>
              </div>
              <div className='hello'>
                <p><br></br>Waktaverse Videos 계정이 있으신가요?</p>
                <p><br></br>만약 없어도 구글, 디스코드 계정을 사용해서 로그인 할 수 있어요!<br></br>아래의 버튼을 눌러 로그인하세요!</p>
              </div>
              <button onClick={clickLogin} className="login-home">
                <strong>
                  <CiLogin className="login-icon" /> 로그인
                </strong>
              </button>
            </div>
            <img src="/wakta_videos_home_banner.png" alt="배너 이미지" className='setting_home_banner_picture'/>
          </section>
          <footer>
            <div className='footer-section'>
              <img src="/waktaverse_videos_new_logo_gray_text.png" alt="로고" className='footer-logo'/>
              <p className='madeby'><strong>Copyright ⓒ Team WakzipㆍWaktaverse Videos.</strong></p>
              <p className='info_service'>Waktaverse Videos는 왁타버스에서 제공하는 서비스가 아닙니다.</p>
              <p className='info_contact_mail'><a href='mailto:contact@wakzip.kr?subject=[문의]?body=문의를 작성하시고 전송하시면 Team Wakzip 서비스 팀으로 자동 전송됩니다.'>[문의] contact@wakzip.kr</a></p>
            </div>
          </footer>
        </>
      )}
      {showLoginModal && <LoginModal show={showLoginModal} clickLogin={clickLogin} />}
    </>
  );
}
