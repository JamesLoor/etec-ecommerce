import * as React from 'react'
import styled from 'styled-components'
import Button from './Button'

type StyledProps = {
  backgroundImage: string
}

const PublicityStyled = styled.section<StyledProps>`
  background: linear-gradient(to right, #00000075, #00000075),
    ${({ backgroundImage }) => backgroundImage && `url(${backgroundImage})`};
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  padding: 60px 10px;
  display: grid;
  grid-auto-rows: max-content;
  flex-direction: column;
  gap: 10px;

  .publi__title,
  .publi__text {
    color: ${({ theme }) => theme.colors.secundary};
  }

  @media (min-width: 768px) {
    padding: 60px 40px;
  }
`

type Props = {
  title: string
  text: string
  image: string
  buttonText: string
}

const Publicity: React.FC<Props> = ({ title, text, image, buttonText }) => {
  return (
    <PublicityStyled backgroundImage={image}>
      <h2 className="publi__title">{title}</h2>
      <p className="publi__text">{text}</p>
      <Button className="publi__button">{buttonText}</Button>
    </PublicityStyled>
  )
}

export default Publicity
