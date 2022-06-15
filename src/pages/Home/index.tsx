import * as React from 'react'
import styled from 'styled-components'
import Banner from '../../components/Banner'
import Button from '../../components/Button'
import HomeBanner from '../../static/images/HomeBanner.png'
import { useNavigate } from 'react-router-dom'
import Promotion from '../../components/Promotion'
import { promotionBanner } from '../../data/promotionBanner.data'

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
    </HomeStyled>
  )
}

export default Home
