import { Link } from "react-router-dom";
import { Typewriter } from 'react-simple-typewriter'
import { Fade } from "react-awesome-reveal";

const BannerDetails = ({ image, title, description }) => {
    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage: `url(${image})`,
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">
                        <Typewriter
                            words={[title]}
                            loop={5}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}

                        />
                    </h1>
                    <Fade>
                        <p className="mb-5">
                            {description}
                        </p>
                    </Fade>
                    <Link to={'/all-visas'}>
                        <button className="btn bg-blue-500 text-white font-bold border-none">Explore Visas Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BannerDetails;