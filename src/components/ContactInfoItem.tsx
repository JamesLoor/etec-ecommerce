import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ContactInfoItemStyled = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.primary};
  gap: 10px;

  p {
    font-size: 0.9em;

    @media (min-width: 768px) {
      font-size: 1.1em;
    }
  }
`

type Props = {
  Icon: any
  text: string
  url?: string
  className: string
}

const ContactInfoItem: React.FC<Props> = ({ className, Icon, text, url }) => {
  const HTML = (
    <ContactInfoItemStyled className={className}>
      <Icon width="50" heigh="50" className="icon" />
      <p>{text}</p>
    </ContactInfoItemStyled>
  )

  if (url) {
    return <Link to={url}>{HTML}</Link>
  }

  return HTML
}

export default ContactInfoItem
