import Link from 'next/link'
import { useState, useEffect } from 'react';
import { FaGoogle } from "react-icons/fa";
import { useSession, signIn, signOut } from 'next-auth/react';
import { CiCircleInfo } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { FaDiscord } from "react-icons/fa";
import { SiNaver } from "react-icons/si";
 
export default function LoginModal({show, clickLogin}) {
  return (
    <>
        <div className={`login_modal ${show ? 'show' : ''}`} onClick={clickLogin}>
          <div className={`login_page ${show ? 'show' : ''}`} onClick={(e) => e.stopPropagation()}>
            <div class="container">
              <div className='login_close' onClick={clickLogin}><IoMdClose/></div>
              <h1>로그인</h1>
              <p className='login_about'><strong>Waktaverse Videos에 <span className='highlight_login'>로그인하세요.</span></strong></p>
              <div className='login_notice'>
                <div className='container_notice'>
                  <h4 className='notice_header'><span className='notice_icon'><CiCircleInfo className='google_icon'/></span>네이버 로그인 지원 관련 안내</h4>
                  <p>네이버 로그인은 현재 준비 중에 있습니다!<br></br>서비스 이용에 불편을 드려 죄송합니다.</p>
                </div>
              </div>
              <div>
                <button onClick={() => signIn('google')} className="login-btn_google">
                  <FaGoogle className="login-icon" /> 구글 계정으로 로그인
                </button>
              </div>
              <div>
                <button onClick={() => signIn('naver')} className="login-btn_naver">
                  <SiNaver className="login-icon" /> 네이버 계정으로 로그인
                </button>
              </div>
              <div>
                <button onClick={() => signIn('discord')} className="login-btn_discord">
                  <FaDiscord className="login-icon" /> 디스코드 계정으로 로그인
                </button>
              </div>
              <div className='policy'>
                <p className='policy_text'>로그인 시 <a className='policy_link' href='/policy'>이용약관</a>과 <a className='policy_link' href='/privacy'>개인정보 처리약관</a>에 동의한 것으로 간주합니다.</p>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}