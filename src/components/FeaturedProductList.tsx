import * as React from 'react'
import styled from 'styled-components'
import Product from './Product'
import { products } from '../data/product.data'

const FeaturedProductListStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-template-rows: min-content;
  justify-content: stretch;
  gap: 20px;
`
const FeaturedProductList: React.FC = () => {
  const list = products.filter((item) => item.featured)
  return (
    <FeaturedProductListStyled>
      {list.map((item) => {
        return (
          <Product
            key={item.id}
            name={item.name}
            image={item.image}
            price={item.price}
          />
        )
      })}
    </FeaturedProductListStyled>
  )
}

export default FeaturedProductList
