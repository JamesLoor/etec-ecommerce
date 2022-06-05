import * as React from 'react'
import styled from 'styled-components'

const BannerStyled = styled.div<Props>`
  background: linear-gradient(to right, #00000075 , #00000075), ${({ image }) => image && `url(${image})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  height: ${({ height }) => height ? height : "85vh"};
  display: grid;
  align-items: center;
`

type Props = {
  children: React.ReactNode
  image: string
  height: string
}

const Banner: React.FC<Props> = ({ children, image, height }) => {
  return (
    <BannerStyled image={image} height={height}>
      {children}
    </BannerStyled>
  )
}

export default Banner