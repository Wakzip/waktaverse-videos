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
  let { image_sizew } = ""

  if (id == "woowakgood") {
    name = "우왁굳"
    banner = "https://waktaverse-videos.vercel.app/artist/banner/shimhaedoo_banner.png"
    artist = "https://waktaverse-videos.vercel.app/artist/woowakgood.png"
    channels = [
      { name: "우왁굳", img: "https://yt3.googleusercontent.com/8qJyQpSS6YLADyM5T6afKkpCsGtC3x_4_SSJWTNNO3qKX9FmlRRBZbO7VFy8IegO_717mU7zaqM=s160-c-k-c0x00ffffff-no-rj" },
      { name: "우왁굳의 종합게임", img: "https://yt3.googleusercontent.com/uEylUkZkTZFkl5utEME_6SS4_NTnMAoqKx95KQRXefzvgIF1CIwJEVvK0mUyXGrbAqLOjxF-wbQ=s160-c-k-c0x00ffffff-no-rj" }
    ]
    image_sizew = "34.1%"
  }

  if (id == "ine") {
    name = "아이네"
    banner = "https://waktaverse-videos.vercel.app/artist/banner/ine.png"
    artist = "https://waktaverse-videos.vercel.app/artist/ine.png"
    channels = [
      { name: "아이네 INE", img: "https://yt3.googleusercontent.com/nZa-NIOFaUMmP1iDQz0VP165jcN7z_Ysp7yxXOJUr47SRFbvRb2vD2qOWRrEnZ7UuuBnquPR_gM=s160-c-k-c0x00ffffff-no-rj" },
      { name: "데친 숙주나물", img: "https://yt3.googleusercontent.com/x9-y3pGkF35m-aVKlwuAkoVa2gbMS_sKYa3JIHSq6Wz-ihIEk8pUep6hKSwduw3C2QFbGPqyiLc=s160-c-k-c0x00ffffff-no-rj" },
      { name: "아이네 다시보기", img: "https://yt3.googleusercontent.com/rhiZ-ExBZYdrFgGjdKhPjMsEGIBs5KXvsL6sdBNAxv7ertzow_vfutdkEyy1ua1OoRjufpSWeA=s160-c-k-c0x00ffffff-no-rj" }
    ]
    image_sizew = "50%"
  }

  if (id == "jingburger") {
    name = "징버거"
    banner = "https://waktaverse-videos.vercel.app/artist/banner/jingburger.png"
    artist = "https://waktaverse-videos.vercel.app/artist/jingburger.png"
    channels = [
      { name: "징버거 JINGBURGER", img: "https://yt3.googleusercontent.com/T9B_ya0W3IpDWjXlev6m96Y0XPNtRz8UCHYcSbtcHYEmS4bb99F73PjxjFcrQGuyMM6X7RbuCxo=s160-c-k-c0x00ffffff-no-rj" },
      { name: "징버거가 ZZANG센 주제에 너무 신중하다", img: "https://yt3.googleusercontent.com/1ESCChR2AwzP1REOimwnTmdyWVz5SZx6k08ZsdTwUKH0pn-ZAVz5r74HSAGvBW8RJEt45UdV=s160-c-k-c0x00ffffff-no-rj" },
      { name: "징버거의 무한 츠쿠요미", img: "https://yt3.googleusercontent.com/3E5avxNP3A75-jnRqodualSqGB2T6CpiqWH0ay3EvXmk5zOaodaKyWfvurl-njLHbwm0a-qZzQ=s160-c-k-c0x00ffffff-no-rj" }
    ]
    image_sizew = "50%"
  }

  if (id == "lilpa") {
    name = "릴파"
    banner = "https://waktaverse-videos.vercel.app/artist/banner/lilpa.png"
    artist = "https://waktaverse-videos.vercel.app/artist/lilpa.png"
    channels = [
      { name: "릴파 lilpa", img: "https://yt3.googleusercontent.com/ZqC92CDGtM19mufhDBXEUixTQ0wkzjONrhZqVJBfLiRYEaRhXfilzJX8w7Sn6K9yU8g5iETX=s160-c-k-c0x00ffffff-no-rj" },
      { name: "릴파의 순간들", img: "https://yt3.googleusercontent.com/uvJ0cC_a7uW5qqA33ccIRmxpWlkfbkvI6BiYJcspqWfiZJKmp4khvMPsBP_bKnMoa4JSV5XKy1k=s160-c-k-c0x00ffffff-no-rj" },
      { name: "릴파 다시보기", img: "https://yt3.googleusercontent.com/u3TthWlcsFNZ21FG-PY0SQgRAQKPb_aE6PyzDQOI8Xzxt4H9p8feuUkJbviVHEzLyuFIbPiMjw=s160-c-k-c0x00ffffff-no-rj" },
      { name: "LILPA ARCHIVE [ISEGYE IDOL]", img: "https://yt3.googleusercontent.com/T7dbICLct__vpU2LHF7nLrVgIU9_eWui_Ubi6J_xYPMYhWhgAssdlCsm0hB70aW-kCtOJzVcyQ=s160-c-k-c0x00ffffff-no-rj" }
    ]
    image_sizew = "50%"
  }

  if (id == "jururu") {
    name = "주르르"
    banner = "https://waktaverse-videos.vercel.app/artist/banner/jururu.png"
    artist = "https://waktaverse-videos.vercel.app/artist/jururu.png"
    channels = [
      { name: "주르르 JURURU", img: "https://yt3.googleusercontent.com/tzT1UeH3BoszxXLwBeCzjkfpev-Tjb8ZfZSwnQleKSRcbCqLtQZkEzZGDMnPusVgfpoC_X7k=s160-c-k-c0x00ffffff-no-rj" },
      { name: "봉인 풀린 주르르", img: "https://yt3.googleusercontent.com/YTvtKjdXOxp61b5f4T7oDwWTvMxKphhXfPRMjQ0gM1iyCWs9pp2siXLbh-iN5-MPPtpSnXz_Aw=s160-c-k-c0x00ffffff-no-rj" },
      { name: "주르르 다시보기", img: "https://yt3.googleusercontent.com/-_Ta4z5-oAAf4y6C32TNG41ngcaYDTj4xG2BsZ-qTAOdLUOAFbDqmqmZwfUm4LzuCDoAusdb=s160-c-k-c0x00ffffff-no-rj" }
    ]
    image_sizew = "50%"
  }

  if (id == "gosegu") {
    name = "고세구"
    banner = "https://waktaverse-videos.vercel.app/artist/banner/gosegu.png"
    artist = "https://waktaverse-videos.vercel.app/artist/gosegu.png"
    channels = [
      { name: "고세구 GOSEGU", img: "https://yt3.googleusercontent.com/X6-_fvK3KbCYU-EOK9iTzP2TVa9hbIs1E4BFI2qfEuiHev4wbbigivV99GvyrsqYIjuH-r64=s160-c-k-c0x00ffffff-no-rj" },
      { name: "고세구의 짧은거", img: "https://yt3.googleusercontent.com/5MhZ6xkpzRbdk6e0uBygXKJsQXotoS7tZZjQqfOVBfhOpwVuHGli9HqDHIC_BLSPx9E_IkSJtA=s160-c-k-c0x00ffffff-no-rj" },
      { name: "밥친구 고세구", img: "https://yt3.googleusercontent.com/faDxL7wlkou17PfJ9camL7IPNPAFjW84CDfsdRuu9SrnmzqX-KNxNDvlK4XJK8LB9zAlsVmX=s160-c-k-c0x00ffffff-no-rj" }
    ]
    image_sizew = "50%"
  }

  if (id == "viichan") {
    name = "비챤"
    banner = "https://waktaverse-videos.vercel.app/artist/banner/viichan.png"
    artist = "https://waktaverse-videos.vercel.app/artist/viichan.png"
    channels = [
      { name: "비챤 VIichan", img: "https://yt3.googleusercontent.com/LsW-WGlK2PU4XaiIejOVdZnJFRJ54J73F5spLYiTYJZbiMiB1y3MiU7olPHoRl4WpW2fWgRh=s160-c-k-c0x00ffffff-no-rj" },
      { name: "비챤의 나랑놀아", img: "https://yt3.googleusercontent.com/fvnyQLfQk02hMlX0_acuDvCWs5oVCLZjNd9FJ37pFss1_Ovj4be7hpuFE5NKIGKpzkvlH8MR=s160-c-k-c0x00ffffff-no-rj" },
      { name: "비챤의 무릉도원", img: "https://yt3.googleusercontent.com/GO-8Ks8OQPNNTLig0FfVBz4p4wCt8LzJAjdot4F26YjlTCBow36xboCMu2SR-LKVxq27x69O=s160-c-k-c0x00ffffff-no-rj" }
    ]
    image_sizew = "50%"
  }

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const clickLogin = () => setShowLoginModal(!showLoginModal);
  return (
    <>
      {session ? (
        <>
<section className="artist_page">
            <div className='artist_profile'>
              <div className='artist_container'>
                <img src={banner} alt="배너 이미지" className='artist_banner'/>
                <img src={artist} alt="아티스트 이미지" className='artist_img' width={image_sizew}/>
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
                <h1></h1>
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
          <section className="artist_page">
            <div className='artist_profile'>
              <div className='artist_container'>
                <img src={banner} alt="배너 이미지" className='artist_banner'/>
                <img src={artist} alt="아티스트 이미지" className='artist_img' width={image_sizew}/>
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
                <h1></h1>
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