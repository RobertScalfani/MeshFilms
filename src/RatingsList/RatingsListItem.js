import React from "react";
import {Link} from "react-router-dom";

const RatingsListItem = (props) => {

    const review = props.review;

    const date = new Date(review.createdAt);

    /**
     * Render.
     */
    return (
        <div className='list-group-item ps-4'>
            <h5>
                Review by&nbsp;
                <Link to={`/profile/${review.reviewerId}`}>
                    @{review.reviewerUsername}
                </Link>
            </h5>
            <h5 className='fw-bold'>
                Film:&nbsp;
                <Link to={`/details/${review.filmId}`}>
                    {review.filmName}
                </Link>
            </h5>
            <h6>
                Overall Rating: {review.rating} out of 5
            </h6>
            <div className='border border-1 rounded p-2'>
                {review.review}
            </div>
            <small className='fw-light'>
                Date Reviewed: {date.toDateString() + ", " + date.toLocaleTimeString()}
            </small>
        </div>
    );
}

export default RatingsListItem;
