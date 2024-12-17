import Banner from "../components/home/Banner";
import Article from "../components/home/ExtraSections/Article";
import FAQ from "../components/home/ExtraSections/FAQ";
import TopCountries from "../components/home/ExtraSections/TopCountries";
import LatestVisas from "../components/home/LatestVisas";

const Home = () => {
    return (
        <div>
            <div>
                <Banner />
            </div>
            <div className="my-10">
                <TopCountries />
            </div>
            <div className="my-10">
                <LatestVisas />
            </div>
            <div className="my-16">
                <FAQ />
            </div>
            <div className="my-10">
                <Article />
            </div>
        </div>
    );
};

export default Home;