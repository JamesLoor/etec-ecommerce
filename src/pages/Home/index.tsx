import * as React from 'react'
import styled from 'styled-components'
import Banner from '../../components/Banner'
import Button from '../../components/Button'
import HomeBanner from '../../static/images/HomeBanner.png'
import { useNavigate } from 'react-router-dom'
import FeaturedProductList from '../../components/FeaturedProductList'
import Promotion from '../../components/Promotion'
import { promotionBanner } from '../../data/promotionBanner.data'
import Publicity from '../../components/Publicity'
import publicityDeliveryImage from '../../static/images/publicityDelivery.png'
import GalleryElement from '../../components/GalleryElement'
import { galleryElementData } from '../../data/galleryElement.data'

const HomeStyled = styled.div`
  .banner-content {
    display: grid;
    gap: 10px;
    h1 {
      text-transform: capitalize;
      color: ${({ theme }) => theme.colors.secundary};
    }
    p {
      margin-bottom: 10px;
      color: ${({ theme }) => theme.colors.secundary};
    }
    @media (min-width: 768px) {
      h1 {
        font-size: 2.4em;
      }
    }
  }

  .promotions {
    padding: 0;
    margin-top: -100px;
    width: 100%;
    .promotions-container {
      display: grid;
      grid-template-columns: 1fr;
      padding: 15px;
      gap: 15px;
      background-color: ${({ theme }) => theme.colors.secundary};
      box-shadow: 0px -11px 24px 0px #0000004d;
      @media (min-width: 768px) {
        padding: 20px;
        gap: 20px;
        grid-template-columns: 1fr 1fr;
      }
    }
  }

  .featured-products-content,
  .new-products-content {
    display: grid;
    gap: 35px;
  }

  .gallery-products-container {
    display: grid;
    grid-gap: 20px;
    @media (min-width: 768px) {
      grid-template-areas:
        'product-1 product-1 product-2 product-5 product-5'
        'product-3 product-4 product-4 product-5 product-5';
      .products-1 {
        grid-area: product-1;
      }
      .products-2 {
        grid-area: product-2;
      }
      .products-3 {
        grid-area: product-3;
      }
      .products-4 {
        grid-area: product-4;
      }
      .products-5 {
        grid-area: product-5;
      }
    }
  }
`

const Home: React.FC = () => {
  const navigate = useNavigate()
  return (
    <HomeStyled>
      <Banner image={HomeBanner} height={''}>
        <div className="wrapper">
          <div className="banner-content">
            <h1>descubre nuestra colección</h1>
            <p>Estamos ofreciendo un 20% de descuento</p>
            <Button onClick={() => navigate('/contacto')}>Contactar</Button>
          </div>
        </div>
      </Banner>

      <section className="promotions">
        <div className="wrapper">
          <div className="promotions-container">
            {promotionBanner.map((promo) => {
              return (
                <Promotion
                  key={promo.id}
                  title={promo.title}
                  text={promo.text}
                  url={promo.url}
                  background={promo.background}
                />
              )
            })}
          </div>
        </div>
      </section>

      <section className="featured-products">
        <div className="wrapper">
          <div className="featured-products-content">
            <h2>Productos Destacados</h2>
            <FeaturedProductList />
          </div>
        </div>
      </section>

      <section className="publicity">
        <div className="wrapper">
          <Publicity
            title="Envios a todo el Ecuador"
            text="35% de descuento las 10 primeras personas"
            image={publicityDeliveryImage}
            buttonText="Ver productos"
          />
        </div>
      </section>

      <section className="wrapper">
        <div className="new-products-content">
          <h2>Productos Nuevos</h2>
          <FeaturedProductList />
        </div>
      </section>

      <section>
        <div className="wrapper">
          <div className="gallery-products-container">
            {galleryElementData.map((element) => {
              return (
                <GalleryElement
                  key={element.id}
                  className={element.className}
                  name={element.name}
                  text={element.text}
                  background={element.background}
                />
              )
            })}
          </div>
        </div>
      </section>
    </HomeStyled>
  )
}

export default Home
