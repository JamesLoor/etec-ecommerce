import * as React from 'react'
import styled from 'styled-components'
import Banner from '../../components/Banner'
import Button from '../../components/Button'
import HomeBanner from '../../static/images/HomeBanner.png'
import { useNavigate } from 'react-router-dom'

const HomeStyled = styled.div`
  .banner-content {
    display: grid;
    gap: 10px;
    h1 {
      text-transform: capitalize;
    }
    p {
      margin-bottom: 10px;
    }
    @media (min-width: 768px) {
      h1 {
        font-size: 2.4em;
      }
    }
  }
`

type Props = {
  
}

const Home: React.FC<Props> = () => {
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
    </HomeStyled>
  )
}

export default Home
