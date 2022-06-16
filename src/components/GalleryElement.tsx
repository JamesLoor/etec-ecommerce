import * as React from 'react'
import styled from 'styled-components'

type Props = {
  name: string
  text: string
  background: string
  className: string
}

type StyledProps = {
  background: string
}

const GalleryElementStyled = styled.div<StyledProps>`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  padding: 30px 20px;
  background: linear-gradient(to right, #00000075, #00000075),
    ${({ background }) => background && `url(${background})`};
  background-position: center;
  background-size: cover;
  min-height: 130px;
  color: ${({ theme }) => theme.colors.secundary};
  cursor: pointer;

  h3 {
    font-size: 1em;
    font-weight: 1000;
    margin-bottom: 4px;
    color: ${({ theme }) => theme.colors.secundary};
  }

  p {
    font-size: 0.9em;
  }

  @media (min-width: 768px) {
    min-height: 200px;
  }
`
const GalleryElement: React.FC<Props> = ({
  name,
  text,
  background,
  className,
}) => {
  return (
    <GalleryElementStyled background={background} className={className}>
      <div className="element-content">
        <h3>{name}</h3>
        <p>{text}</p>
      </div>
    </GalleryElementStyled>
  )
}

export default GalleryElement
