import * as React from 'react'
import styled from 'styled-components'

const ButtonStyled = styled.button`
  width: max-content;
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.secundary};
  outline: none;
  border: none;
  cursor: pointer;
  padding: 8px 30px;
  border-radius: 30px;
  font-weight: 500;
  transition: all 0.3s ease;
  :hover {
    background-color: #000;
  }
`

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string
  className?: string
  type?: 'submit' | 'reset' | 'button'
  width?: string | number
  loading?: boolean
  disabled?: boolean
  onClick?: () => void
}

const Button: React.FC<Props> = ({ children, onClick, ...rest }) => {
  const handleClick = () => {
    if (onClick) {
      onClick()
    }
  }
  return (
    <ButtonStyled {...rest} onClick={handleClick}>
      {children}
    </ButtonStyled>
  )
}

export default Button
