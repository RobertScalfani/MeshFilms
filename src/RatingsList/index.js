import React from "react";
import RatingsListItem from "./RatingsListItem";

const RatingsList = (props) => {

    const reviews = props.reviews;

    if (!reviews || reviews.length < 1) {
        return (
            <ul className='list-group'>
                <li className='list-group-item'>
                    No reviews to show.
                </li>
            </ul>
        );
    }

    return (
        <ul className='list-group'>
            {reviews.map(review => {
                return (
                    <RatingsListItem
                        key={review.createdAt}
                        review={review}
                        canDelete={props.canDelete}
                        reloadRatings={props.reloadRatings}
                    />
                );
            })}
        </ul>
    );
}

export default RatingsList;