import React from "react";
import RatingsListItem from "./RatingsListItem";

const RatingsList = (props) => {

    const reviews = props.reviews;

    console.log(props);

    return (
        <ul className='list-group'>
            {reviews.map(review => {
                return (
                    <RatingsListItem
                        review={review}
                    />
                );
            })}
        </ul>
    );
}

export default RatingsList;