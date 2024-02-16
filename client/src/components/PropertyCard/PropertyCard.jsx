import React from 'react';
import './PropertyCard.css';
import { AiFillHeart } from "react-icons/ai";
import { truncate } from 'lodash';
const PropertyCard = ({ card }) => {
    return (
        <div className="flexColStart r-card">
            <AiFillHeart className="r-heart" color='white' />
            <img src={card.image} alt="home" />
            <span className="secondaryText r-price">
                <span style={{ color: "orange" }}>$</span>
                <span>{card.price}</span>
            </span>
            <span className="primaryText">{truncate(card.title, { length: 15 })}</span>
            <span className="secondaryText">{truncate(card.description, { length: 80 })}</span>
        </div>
    )
}

export default PropertyCard