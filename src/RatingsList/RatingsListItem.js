import React from "react";

const RatingsListItem = (props) => {

    const review = props.review;

    return (
        <div className='d-flex list-group-item ps-4'>
            <h4 className='fw-bold'>
                {review.rating}
            </h4>
            <div className='fw-light'>
                {review.review}
            </div>
            <div className='fw-light'>
                {review.createdAt}
            </div>
            <div className='fw-light'>
                Film Name
            </div>
            <div className='fw-light'>
                Reviewer username
            </div>
        </div>
    );
}

export default RatingsListItem;
