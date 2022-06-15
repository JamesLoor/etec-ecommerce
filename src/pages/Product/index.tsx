import * as React from 'react'
import styled from 'styled-components'
import MagnifyingGlass from '../../icons/MagnifyingGlass'

const ProductStyled = styled.div`
  /*  */
`

type Props = {}

const Product: React.FC<Props> = () => {
  return (
    <ProductStyled>
      <header className="product__header">
        <div className="wrapper">
          <div className="productHeader">
            <div className="productSearch">
              <MagnifyingGlass />
              <input type="text" className="product__search" />
            </div>
          </div>
        </div>
      </header>
      <h1>Product</h1>
    </ProductStyled>
  )
}

export default Product
