import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// Import Swiper modules
import { Autoplay } from 'swiper/modules';
import BannerDetails from './BannerDetails';

const Banner = () => {
    return (
        <div>
            <Swiper
                modules={[Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <BannerDetails image={'https://visa-navigator-client-67a8d.web.app/assets/bg2-CMldZ7qT.avif'} title={'Unlocking Global Opportunities'} description={'Visa helps connect businesses, banks, and governments in over 200 countries, making it easier for people to access the global economy and achieve their financial goals.'} />
                </SwiperSlide>
                <SwiperSlide>
                    <BannerDetails image={'https://visa-navigator-client-67a8d.web.app/assets/bg-3-pWTzxpeE.avif'} title={'Empowering Financial Inclusion'} description={'Visa is committed to empowering underserved communities by providing innovative payment solutions that enable financial inclusion and support local economies worldwide.'} />
                </SwiperSlide>
                <SwiperSlide>
                    <BannerDetails image={'https://visa-navigator-client-67a8d.web.app/assets/bg-1-Byn0P2Ec.avif'} title={'Transforming Transactions'} description={'With a history of pioneering payment technology, Visa is dedicated to converting consumer spending from cash to digital payments, driving sustainable commerce and economic growth.'} />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;