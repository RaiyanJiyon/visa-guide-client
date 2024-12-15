import Banner from "../components/home/Banner";
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
        </div>
    );
};

export default Home;