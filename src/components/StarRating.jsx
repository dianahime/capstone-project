import React from 'react'
import styled from 'styled-components'

export default function StarRating({ rating, onChange }) {
  return (
    <StarRatingStyled>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1

        return (
          <label key={ratingValue}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => onChange(ratingValue)}
            />
            <i
              className={ratingValue <= rating ? 'fas fa-star' : 'far fa-star'}
            />
          </label>
        )
      })}
    </StarRatingStyled>
  )
}

const StarRatingStyled = styled.div`
  input[type='radio'] {
    display: none;
  }

  .fa-star {
    margin: 10px 0;
    padding: 0 3px;
    font-size: 1.5rem;
    cursor: pointer;
    transition: color 200ms;
  }
`
