import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slideData = [
    {
      id: 1,
      text: '테스트1',
    },
    {
      id: 2,
      text: '테스트2',
    },
    {
      id: 3,
      text: '테스트3',
    },
    {
      id: 4,
      text: '테스트4',
    },
    {
      id: 5,
      text: '테스트5',
    }
  ];

export default function SwiperTest() {
    SwiperCore.use([Navigation, Scrollbar, Autoplay]);
    return (
      <div className="swiper-container">
        <Swiper
          loop={true} // 슬라이드 루프
          spaceBetween={10} // 슬라이스 사이 간격
          slidesPerView={3} // 보여질 슬라이스 수
          navigation={true} // prev, next button
          autoplay={{
            delay: 2500,
            disableOnInteraction: true, // 사용자 상호작용시 슬라이더 일시 정지 비활성
          }}
        >
          {slideData.map((slide) => (
                <SwiperSlide key={slide.id}>          
                <div>
                    <div>{slide.text}</div>
                </div>
                </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }