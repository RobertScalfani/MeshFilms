import React from "react";
import RatingsListItem from "./RatingsListItem";

const RatingsList = (props) => {

    const reviews = props.reviews;

    if (!reviews || reviews.length < 1) {
        return (
            <ul className='list-group mb-5'>
                <li className='list-group-item'>
                    No reviews to show.
                </li>
            </ul>
        );
    }

    return (
        <ul className='list-group mb-5'>
            {reviews.map(review => {
                return (
                    <RatingsListItem
                        key={review.createdAt}
                        review={review}
                    />
                );
            })}
        </ul>
    );
}

export default RatingsList;