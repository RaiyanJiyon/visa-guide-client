import { useEffect, useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const Article = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch('/article.json')
            .then(res => res.json())
            .then(data => setArticles(data));
    }, []);

    return (
        <div className="w-11/12 mx-auto">
            <div className='space-y-4'>
                <h2 className="text-4xl font-bold">Cast Your Eyes Upon Our
                    Newest Article</h2>
                <p className="text-gray-600">
                    Explore the most recent addition to our informative articles
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
                {
                    articles.map((article, idx) => (
                        <div key={idx} className="card bg-base-100 shadow-xl">
                            <figure>
                                <img
                                    src={article.image}
                                    alt="image"
                                    className="w-full h-48 object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
                                />
                            </figure>
                            <div className="card-actions mt-6 pl-6">
                                    <div className="badge badge-outline">{article.author}</div>
                                    <div className="badge badge-outline">{article.date}</div>
                                </div>
                            <div className="card-body">
                                <h2 className="card-title">
                                    {article.title}
                                </h2>
                                <p className="flex items-center text-sm gap-2 cursor-pointer">Read the article <IoIosArrowRoundForward className="text-xl pt-1" /></p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Article;
