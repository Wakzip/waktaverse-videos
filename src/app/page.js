'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Banner } from './scripts/banner';
import PlaylistCard from './scripts/playlistcard';
import { useSession } from 'next-auth/react';
import { CiLogin } from 'react-icons/ci';
import LoginModal from './scripts/modal/login';
import InfoRender from './scripts/render-info';
import Suggest from './scripts/suggest';
import Link from 'next/link'
import './globals.css';

export default function HomePage() {
  const router = useRouter();
  const currentDate = new Date();
  const { data: session } = useSession();
  const [showDropdown, setShowDropdown] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [currentPath, setCurrentPath] = useState('');
  var months = currentDate.getMonth() + 1

  const playlist_music_monthly = () => {
    router.push(`/playlist/new?type=music_${months}`);
  };

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const clickLogin = () => setShowLoginModal(!showLoginModal);
  return (
    <>
      {session ? (
        <>
        <section className="home_logined">
            <div className='banner-container_logined'>
              <div className='banner-section-logined'>
                <h1>안녕하세요, <span className='highlight_login'>{session.user.name}</span>님!</h1>
                <p className='bannner_section_subtitle'>오늘 이파리님을 위한 추천이에요!</p>
              </div>
            </div>
            <div className='home_suggest_videos'>
              <div className='suggest_video'>

              </div>
            </div>
          </section>
          <section className="video">
            <div className='video_section'>
              <h1 className='video_section_title'>오늘 새로 등록된 영상이에요!</h1>
              <p className='video_section_subtitle'>따끈따끈한 새 영상을 놓치지 마세요!</p>
            </div>
          </section>
          <section className="playlist">
            
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
            <div className='video_section'>
              <h1 className='video_section_title'>✨오늘 새로 등록된 영상이에요!</h1>
              <p className='video_section_subtitle'>따끈따끈한 새 영상을 놓치지 마세요!</p>
            </div>
          </section>
          <section className="profile">
            <div className='profile_section'>
              <h1 className='profile_section_title'>🔗프로필 바로가기</h1>
              <p className='profile_section_subtitle'>왁굳형과 이세계아이돌 분들의 프로필로 바로 이동해 보세요!</p>
              <div className='profile_link'>
                <Link className='profile_link_a' href='/profile/woowakgood'>
                  <div className='profile_button_woowakgood'>
                    <div className='profile_p_woowakgood'>
                      <h3>우왁굳</h3>
                    </div>
                  </div>
                </Link>
                <Link className='profile_link_a' href='/profile/ine'>
                  <div className='profile_button_ine'>
                    <div className='profile_p_ine'>
                      <h3>아이네</h3>
                    </div>
                  </div>
                </Link>
                <Link className='profile_link_a' href='/profile/jingburger'>
                  <div className='profile_button_jingburger'>
                    <div className='profile_p_jingburger'>
                      <h3>징버거</h3>
                    </div>
                  </div>
                </Link>
                <Link className='profile_link_a' href='/profile/lilpa'>
                  <div className='profile_button_lilpa'>
                    <div className='profile_p_lilpa'>
                      <h3>릴파</h3>
                    </div>
                  </div>
                </Link>
                <Link className='profile_link_a' href='/profile/jururu'>
                  <div className='profile_button_jururu'>
                    <div className='profile_p_jururu'>
                      <h3>주르르</h3>
                    </div>
                  </div>
                </Link>
                <Link className='profile_link_a' href='/profile/gosegu'>
                  <div className='profile_button_gosegu'>
                    <div className='profile_p_gosegu'>
                      <h3>고세구</h3>
                    </div>
                  </div>
                </Link>
                <Link className='profile_link_a' href='/profile/viichan'>
                  <div className='profile_button_viichan'>
                    <div className='profile_p_viichan'>
                      <h3>비챤</h3>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </section>
          <section className="playlist">
            
          </section>
          <section className="music">
            <div className='music_inline'>
              <div className='music_section'>
                <h1 className='music_section_title'>🎵이번달에 팬치와 이파리분들이 가장 많이 들은 노래 Top 10은?</h1>
                <p className='music_section_subtitle'>바로바로... 아래를 확인해보세요!</p>
              </div>
              <div className='music_playlist' onClick={playlist_music_monthly}>
                  <p>내 플레이리스트에 저장하기</p>
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
      )}
      {showLoginModal && <LoginModal show={showLoginModal} clickLogin={clickLogin} />}
    </>
  );
}
