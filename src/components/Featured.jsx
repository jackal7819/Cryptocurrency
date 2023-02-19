import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BsArrowDown, BsArrowUp} from 'react-icons/bs';
import './Featured.scss';

const Featured = () => {
    const [data, setData] = useState(null);
    const url =
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false';

    useEffect(() => {
        axios
            .get(url)
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    console.log(data);

    if (!data) return null;

    const cards = data.map((card) => (
        <div className='card' key={card.id}>
            <div className='top'>
                <img src={card.image} alt='crypto' />
            </div>
            <div>
                <h4>{card.name}</h4>
                <p>${card.current_price.toLocaleString()}</p>
            </div>
            <span>
                {card.price_change_percentage_24h < 0 ? (
                    <span className='red'>
                        <BsArrowDown />
                        {card.price_change_percentage_24h.toLocaleString()}%
                    </span>
                ) : (
                    <span className='green'>
                        <BsArrowUp />
                        {card.price_change_percentage_24h.toLocaleString()}%
                    </span>
                )}
            </span>
        </div>
    ));

    return (
        <div className='featured'>
            <div className='container'>

                {/* Left */}
                <div className='left'>
                    <h2>
                        Explore top Crypto's Like Bitcoin, Etherium and Dogecoin
                    </h2>
                    <p>See all available assets: Cryptocurrencies and NFT's</p>
                    <button className='btn'>See More Coins</button>
                </div>

                {/* Right */}
                <div className='right'>{cards}</div>
            </div>
        </div>
    );
};

export default Featured;
