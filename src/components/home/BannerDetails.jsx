import { Link } from "react-router-dom";

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
                    <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                    <p className="mb-5">
                        {description}
                    </p>
                    <Link to={'/all-visas'}>
                    <button className="btn bg-blue-500 text-white font-bold border-none">Explore Visas Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BannerDetails;