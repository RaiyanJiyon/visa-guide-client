import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// Import Swiper modules
import { Autoplay } from 'swiper/modules';
import BannerDetails from './BannerDetails';
import { Link } from 'react-router-dom';

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

            <div className='md:w-1/2 mx-auto md:text-center mt-10 space-y-4'>
                <h1 className='text-3xl font-bold'>Welcome to <span className='text-blue-600'>Visa Navigator!</span></h1>
                <p className='text-sm'>Start your journey and explore your destination</p>
                <p className='font-medium pb-6'>
                    Discover a seamless way to manage and apply for visas. Your journey starts here!
                </p>
                <Link to={'/all-visas'}>
                    <button className='btn bg-blue-500 text-white font-bold border-none'>Explore Visas Now</button>
                </Link>
            </div>
        </div>
    );
};

export default Banner;