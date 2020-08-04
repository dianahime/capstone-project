import React, { useState } from 'react'
import styled from 'styled-components'
import ProductCommentEdit from './ProductCommentEdit'

export default function ProductComment({ product }) {
  const [formVisible, setFormVisible] = useState(false)

  return (
    <ProductCommentStyled>
      {formVisible ? (
        <ProductCommentEdit setFormVisible={setFormVisible}/>
      ) : (
        <>
          <TitleContainer>
            <p>{product.title}</p>
            <i
              className="fas fa-pen"
              onClick={() => {
                setFormVisible(true)
              }}
            />
          </TitleContainer>
          <p>{product.comment}</p>
        </>
      )}
    </ProductCommentStyled>
  )
}

const ProductCommentStyled = styled.section`
  width: 100%;
  font-size: 1.2rem;
  text-align: center;
  margin: 20px 0;
  
  p {
    font-size: 1.2rem;
    word-break: break-word;
  }
`
const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  p:first-of-type {
    font-size: 1.4rem;
    font-weight: bold;
    margin: 10px;
  }
  
  i {
    color: var(--secondary);
  }
`

