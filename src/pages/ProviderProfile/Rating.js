import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Rating.css";
const RatingStars = (props) => {
    const [rating, setRating] = useState(props.Rating);
    return (
        <div className="rating-stars">
            {[1, 2, 3, 4, 5].map((star) => (
                <span
                    key={star}
                    className={`star ${star <= rating ? "filled" : ""}`}
                >
                    &#9733;
                </span>
            ))}
        </div>
    );
};

RatingStars.propTypes = {
    initialRating: PropTypes.number.isRequired,
    onChange: PropTypes.func,
};

export default RatingStars;
