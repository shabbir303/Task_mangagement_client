import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay,  Navigation } from 'swiper/modules';
import img1 from "../../../assets/1st.jpg"
import img2 from "../../../assets/2nd.jpg"
import img3 from "../../../assets/3rd.jpg"
import img4 from "../../../assets/4th.jpg"
import "./styles.css";
const Slider = () => {

    return (
        <div className="max-w-4xl  ">

            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                    
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="mySwiper rounded-xl swiper-button-prev-hidden"
            >
                <SwiperSlide className=''><img src={img1} alt=""
                    className="h-[400px] w-full" /></SwiperSlide>
                <SwiperSlide className=''><img src={img2} alt=""
                    className="h-[400px] w-full" /></SwiperSlide>
                <SwiperSlide className=''><img src={img3} alt=""
                    className="h-[400px] w-full" /></SwiperSlide>
                <SwiperSlide className=''><img src={img4} alt=""
                    className="h-[400px] " /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;