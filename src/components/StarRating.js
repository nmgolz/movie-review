import React, { useState} from 'react';
import { FaStar }  from "react-icons/fa";


function StarRating() {

    const[rating, setRating] = useState(null);
    const[hover, setHover] = useState(null);


  return (
    <div>
        {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;
            return (
                <label>
                    <input
                        type='radio' 
                        name='rating' 
                        value={ratingValue} 
                        onClick={() => setRating(ratingValue)}

                    />
                    <FaStar
                        className='star' 
                        color={ratingValue <= (hover || rating)  ? '#ffc107' : '#e4e5e9'}
                        size='25' 
                        onMouseEnter={() => setHover(ratingValue)}
                        onMouseLeave={() => setHover(null)}
                    />
                </label>
            )
        })}
        
    </div>
  )
}

export default StarRating

/*
this is the css that goes with star rating

.App {
  display: flex;
  justify-content: left;
  align-items: center;
  min-height: 100vh;
}

input[type='radio'] {
  display: none;
}

.star {
  cursor: pointer;
  transition: color 200ms;
}

colors yellow: #ffc107 grey #e4e5e9
*/