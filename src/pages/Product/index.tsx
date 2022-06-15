import * as React from 'react'
import styled from 'styled-components'

const ProductStyled = styled.div`
  /*  */
`

type Props = {}

const Product: React.FC<Props> = () => {
  return (
    <ProductStyled>
      <h1>Product</h1>
    </ProductStyled>
  )
}

export default Product
