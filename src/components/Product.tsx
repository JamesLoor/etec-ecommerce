import * as React from 'react'
import styled from 'styled-components'
import Heart from '../icons/Heart'
import ShoppingBag from '../icons/ShoppingBag'
import Button from './Button'

type Props = {
  id?: string
  image: string
  name: string
  price: number
  stock?: boolean
  category?: string
  brand?: string
  discount?: number
}

const ProductStyled = styled.div`
  display: grid;
  grid-template-rows: 250px 1fr;
  background: ${({ theme }) => theme.colors.secundary};
  overflow: hidden;
  height: 100%;
  transition: 0.3s;
  .product-image {
    display: flex;
    width: 100%;
    height: 100%;
    border: 1px solid ${({ theme }) => theme.colors.gray};
    cursor: pointer;
    justify-content: center;
    align-items: center;
    position: relative;
    img {
      width: 90%;
      height: 90%;
      object-fit: contain;
    }
    .product-heart {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 10px;
      right: 10px;
      transition: 0.8s;

      path {
        stroke: ${({ theme }) => theme.colors.primary};
        stroke-width: 2;
      }

      &:hover {
        path {
          fill: ${({ theme }) => theme.colors.accent};
          stroke: ${({ theme }) => theme.colors.accent};
        }
      }
    }
  }
  .product-content {
    display: grid;
    grid-gap: 5px;
    padding: 10px;
    color: ${({ theme }) => theme.colors.primary};
    .product-name {
      font-size: 0.85em;
      font-weight: normal;
    }
    .price {
      font-size: 1em;
      font-weight: 800;
    }
    .discount {
      text-decoration: line-through;
      font-size: 1em;
      font-weight: normal;
      color: #bcbcbc;
    }
    .shopping-button {
      padding: 8px 18px;
      display: flex;
      gap: 5px;
      margin-top: 10px;

      p {
        font-size: 0.9em;
      }
    }
  }
  @media (min-width: 768px) {
    &:hover {
      transform: scale(1.02);
    }
  }
`
const Product: React.FC<Props> = ({
  id,
  image,
  name,
  price,
  stock,
  category,
  brand,
  discount,
}) => {
  return (
    <ProductStyled>
      <figure className="product-image">
        <img loading="lazy" src={image} alt={name} />
        <button className="product-heart">
          <Heart width="18px" height="18px" />
        </button>
      </figure>
      <div className="product-content">
        <h4 className="product-name">{name}</h4>
        <div className="product-values">
          {discount && <p className="discount">{`$ ${discount}`}</p>}
          <p className="price">{`$ ${price}`}</p>
        </div>
        <Button className="shopping-button">
          <ShoppingBag width="18px" height="18px" />
          <p>Agregar</p>
        </Button>
      </div>
    </ProductStyled>
  )
}

export default Product
