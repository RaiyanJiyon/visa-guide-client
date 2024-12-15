import Banner from "../components/home/Banner";
import Article from "../components/home/ExtraSections/Article";
import FAQ from "../components/home/ExtraSections/FAQ";

const Home = () => {
    return (
        <div>
            <div>
                <Banner />
            </div>
            <div className="mt-10">
                <FAQ />
            </div>
            <div className="mt-10 mb-10">
                <Article />
            </div>
        </div>
    );
};

export default Home;