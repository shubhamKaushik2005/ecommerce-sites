import React, { useState } from 'react'
import ProfileCard from '../components/ProfileCard';
import data from '../data.json';
import Nav from '../components/Nav';
import { MdNavigateNext } from "react-icons/md";

function Shop() {
    const cardsPerPage = 8;
    const [page, setPage] = useState(1);

    const displayedCards = data.slice(0, page * cardsPerPage);

    const loadMore = () => {
        setPage(page + 1);
    };
    return (
        <>
            <Nav />
            <div className="container">
                <div className="bread-crumb flex-w p-l-25 p-r-15 p-t-30 p-lr-0-lg">
                    <a href="/" className="stext-109 cl8 hov-cl1 trans-04">
                        Home
                        <MdNavigateNext />
                    </a>

                    <a href="blog.html" className="stext-109 cl8 hov-cl1 trans-04">
                        Blog
                        <MdNavigateNext />
                    </a>

                    <span className="stext-109 cl4">
                        Shopping
                    </span>
                </div>
            </div>
            <div className="container">
                <div className="row my-4">
                    {displayedCards.map((item, index) => {
                        return <ProfileCard key={index} data={item} index={index} />;
                    })}
                </div>

                {displayedCards.length < data.length && (
                    <div className="qwer">
                        <button className='qwe' onClick={loadMore}>Load More</button>
                    </div>
                )}
            </div>
        </>
    )
}

export default Shop
