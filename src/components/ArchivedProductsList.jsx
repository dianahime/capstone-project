import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import FlipMove from 'react-flip-move'
import { selectors } from '../store/productsSlice'
import ProductsListItem from './ProductsListItem'
import ArchiveSortPopover from './ArchiveSortPopover'
import {
  sortProductsByNameAtoZ,
  sortProductsByNameZtoA,
} from '../store/compareFunctions'

export default function ArchivedProductsList() {
  const archivedProducts = useSelector(selectors.archivedProducts)
  const isBlurred = useSelector((state) => state.drawer.isOpen)
  const [isAtoZ, setIsAtoZ] = useState(true)
  const history = useHistory()

  useEffect(() => {
    if (!archivedProducts.length) {
      history.push('/products')
    }
  }, [archivedProducts, history])

  return (
    <UlStyled className={isBlurred && 'blurred'}>
      <ArchiveSortPopover isAtoZ={isAtoZ} setIsAtoZ={setIsAtoZ} />
      <FlipMove>
        {archivedProducts &&
          archivedProducts
            .sort(isAtoZ ? sortProductsByNameAtoZ : sortProductsByNameZtoA)
            .map((product) => (
              <ProductsListItem key={product.id} product={product} />
            ))}
      </FlipMove>
    </UlStyled>
  )
}

const UlStyled = styled.ul`
  margin-bottom: 100px;
  padding: 0;
  filter: blur(0);
  transition: 0.8s all ease-out;

  &.blurred {
    filter: blur(6px);
  }
`
