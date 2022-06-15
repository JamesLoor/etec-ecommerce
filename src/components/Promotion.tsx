import * as React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

type Props = {
  title: string
  text: string
  url: string
  background: string
}

type StyledProps = {
  background: string
}

const PromotionStyled = styled.div<StyledProps>`
  height: 180px;
  background-image: ${({ background }) => background && `url(${background})`};
  background-size: 40%;
  background-position: right;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 10px;
  border-radius: 2px;
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.accent};

  h3 {
    margin-bottom: 3px;
  }

  p {
    margin-bottom: 15px;
  }

  a {
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    :hover {
      color: ${({ theme }) => theme.colors.accent};
      border-color: ${({ theme }) => theme.colors.accent};
    }
  }

  @media (min-width: 768px) {
    padding: 20px;
    height: 200px;
  }

  @media (min-width: 1024px) {
    height: 220px;
  }
`

const Promotion: React.FC<Props> = ({ title, text, url, background }) => {
  return (
    <PromotionStyled background={background}>
      <h3>{title}</h3>
      <p>{text}</p>
      <Link to={url}>Ver más</Link>
    </PromotionStyled>
  )
}

export default Promotion
