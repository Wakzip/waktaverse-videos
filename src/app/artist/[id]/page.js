'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { CiLogin } from 'react-icons/ci';
import LoginModal from '../../scripts/modal/login';
import Link from 'next/link'
import '../../globals.css';

export default function Profile({ params }) {
  const router = useRouter();
  const { data: session } = useSession();
  const [showDropdown, setShowDropdown] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [currentPath, setCurrentPath] = useState('');
  const { id } = params;
  let { name } = ""
  let { banner } = ""
  let { channels } = []
  let { artist } = ""

  if (id == "woowakgood") {
    name = "우왁굳"
    banner = "https://waktaverse-videos.vercel.app/shimhaedoo_banner.png"
    artist = "https://waktaverse-videos.vercel.app/woowakgood_150.png"
    channels = [
      { name: "우왁굳", img: "https://yt3.googleusercontent.com/8qJyQpSS6YLADyM5T6afKkpCsGtC3x_4_SSJWTNNO3qKX9FmlRRBZbO7VFy8IegO_717mU7zaqM=s160-c-k-c0x00ffffff-no-rj" },
      { name: "우왁굳의 종합게임", img: "https://yt3.googleusercontent.com/uEylUkZkTZFkl5utEME_6SS4_NTnMAoqKx95KQRXefzvgIF1CIwJEVvK0mUyXGrbAqLOjxF-wbQ=s160-c-k-c0x00ffffff-no-rj" }
    ]
  }

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
          <section className="artist_page">
            <div className='artist_profile'>
              <div className='artist_container'>
                <img src={banner} alt="배너 이미지" className='artist_banner'/>
                <img src={artist} alt="아티스트 이미지" className='artist_img'/>
                <h1 className='artist_a'>{name}</h1>
              </div>
            </div>
            <div className='artist_menu'>
              <div className="artist_channels">
                <ul className="channel_list_container">
                  {channels.map((channel, index) => (
                    <li key={index} className="channel_list">
                      <img src={channel.img} alt={channel.name} />
                      <span className="channel_name">{channel.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='artist_videos'>
                <h1>why</h1>
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