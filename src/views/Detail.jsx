import React, { useState, useEffect } from 'react';
import Nav from '../components/Nav';
import { MdNavigateNext } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import data from '../data.json';
import ProfileCard from '../components/ProfileCard';
import 'bootstrap/dist/css/bootstrap.min.css';

function Detail() {
    const { id } = useParams();
    const [dd, setDd] = useState(null);

    useEffect(() => {
        const index = parseInt(id);
        const item = data[index];

        setDd(item);
    }, [id]);

    const cardsPerPage = 8;
    const [page, setPage] = useState(1);

    const displayedCards = data.slice(0, page * cardsPerPage);

    return (
        <>
            <Nav />
            <div className="container">
                <div className="bread-crumb flex-w p-l-25 p-r-15 p-t-30 p-lr-0-lg">
                    <a href="/" className="stext-109 cl8 hov-cl1 trans-04">
                        <span className="breadcrumb-item">Home</span>
                    </a>
                    <MdNavigateNext className="breadcrumb-icon" />
                    <a href="about.html" className="stext-109 cl8 hov-cl1 trans-04">
                        <span className="breadcrumb-item">About</span>
                    </a>
                </div>
            </div>

            <div className="shh">
                <br />
                <div>
                    <img src="/images/x1.jpg" alt="" />
                    <span>
                        By Admin | 22 Jan, 2018 | StreetStyle, Fashion, Couple | 8 Comments
                    </span>
                </div>
                <br />
                <div>
                    <h1>{dd?.heading || "Product Title"}</h1>
                    <p>{dd?.desc || "No description available"}</p>
                </div>
                <br />
                <div>
                    <img src="/images/c1.jpg" alt="" />
                    <span>
                        By Admin | 22 Jan, 2018 | StreetStyle, Fashion, Couple | 8 Comments
                    </span>
                </div>
                <br />
                <div>
                    <h1>Shirt in Stretch Cotton</h1>
                    <p>
                        Straight off Pinterest’s 2025 hot list, this nostalgic-meets-modern trend is all about opposites attracting. Picture chunky
                        moto boots grounding flowy ’70s-inspired frocks, or a sleek leather biker jacket topping off a billowy maxi skirt.
                    </p>
                </div>
                <hr />
                <br />
                <h1>More for you to read</h1>
                <br />
                <br />
                <div className="container">
                    <div className="row my-4">
                        {displayedCards.map((item, index) => (
                            <ProfileCard key={index} data={item} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Detail;
