import Marquee from "react-fast-marquee";

const TopCountries = () => {
    const countryImage = [
        "https://i.ibb.co.com/ckmC7Nj/Flag-of-Kenya-svg.png",
        "https://i.ibb.co.com/cQYNTcP/Flag-of-India-svg.png",
        "https://i.ibb.co.com/KwRndH1/Flag-Germany.webp",
        "https://i.ibb.co.com/1bHs3hD/Flag-of-Egypt-svg.png",
        "https://i.ibb.co.com/cTQT5rs/Flag-of-the-People-s-Republic-of-China-svg.webp",
        "https://i.ibb.co.com/KhzS7m9/Flag-of-Canada-Pantone-svg.png",
        "https://i.ibb.co.com/8sd39Dn/Flag-of-Australia-converted-svg.webp",
        "https://i.ibb.co.com/3S53X8T/Flag-of-Argentina-svg.webp",
        "https://i.ibb.co.com/DMnpCDM/Flag-of-Brazil-svg.png",
        "https://i.ibb.co.com/chm78j0/Flag-of-Bangladesh-svg.webp"
    ];

    return (
        <div>
            <div className="flex flex-col items-center mb-10 space-y-3">
                <h2 className="text-3xl font-bold">Top Countries</h2>
                <p className="text-gray-600">Featuring the flags of leading nations</p>
            </div>
            <div>
                <Marquee pauseOnHover={true}>
                    {countryImage.map((country, index) => (
                        <img
                            key={index}
                            className="w-24 mr-6 cursor-pointer"
                            src={country}
                            alt={country.brand_name || "Brand logo"}
                        />
                    ))}
                </Marquee>
            </div>
        </div>
    );
};

export default TopCountries;
