import * as React from 'react'
import styled from 'styled-components'
import { contactInfo } from '../data/contactInfo.data'
import { Link } from 'react-router-dom'
import ContactInfoItem from './ContactInfoItem'
import { menuData } from '../data/menu.data'
import Logo from '../static/images/logo.png'
import Location from '../icons/Location'
import Phone from '../icons/Phone'
import Mail from '../icons/Mail'
import Clock from '../icons/Clock'

const FooterStyled = styled.div`
  margin-top: 40px;
  border-top: 1px solid ${({ theme }) => theme.colors.gray};

  .footer-content {
    display: grid;
    grid-template-areas:
      'logo'
      'left'
      'right';
    justify-content: center;
    align-items: center;
    padding: 15px 0;

    .logo {
      justify-self: center;
      width: 120px;
      user-select: none;
      cursor: pointer;
      grid-area: logo;
      z-index: ${({ theme }) => theme.positions.logo};
      img {
        width: 100%;
      }
    }

    .left-info {
      grid-area: left;
      margin-top: 20px;
      margin-bottom: 10px;
    }

    .left-info,
    .right-info {
      display: grid;
      gap: 10px;
    }

    .right-info {
      grid-area: right;
      display: grid;
      gap: 10px;
    }

    @media (min-width: 768px) {
      grid-template-areas:
        'logo logo logo'
        'left . right';
      justify-content: initial;
      .item-right {
        flex-direction: row-reverse;
      }
    }

    @media (min-width: 1024px) {
      grid-template-areas: 'left logo right';
    }
  }

  .footer-links {
    display: grid;
    grid-template-areas:
      'menu'
      'rights'
      'legal';
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.accent};
    padding: 25px 0;

    .menu {
      display: grid;
      justify-content: center;
      align-items: center;
      gap: 15px;
      text-align: center;
      margin-bottom: 25px;
      grid-area: menu;

      li a {
        font-size: 0.9em;
        font-weight: 1000;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.secundary};
        letter-spacing: 0.05em;
      }

      @media (min-width: 768px) {
        grid-auto-flow: column;
        gap: 20px;
        margin-bottom: 10px;
      }

      @media (min-width: 1240px) {
        margin-bottom: 0;
      }
    }

    .rights {
      align-self: center;
      text-align: center;
      color: ${({ theme }) => theme.colors.secundary};
      font-size: 0.7em;
      grid-area: rights;

      @media (min-width: 1024px) {
        br {
          display: none;
        }
      }
    }

    .legal {
      display: grid;
      grid-template-columns: 1fr;
      justify-content: center;
      align-items: center;
      color: ${({ theme }) => theme.colors.secundary};
      gap: 5px;
      text-align: center;
      grid-area: legal;

      p {
        font-size: 0.7em;
      }
      a {
        font-size: 0.7em;
        width: 100%;
        color: ${({ theme }) => theme.colors.secundary};
      }

      @media (min-width: 375px) {
        grid-template-columns: repeat(3, max-content);
      }
    }

    @media (min-width: 1240px) {
      padding: 25px 5%;
      grid-template-columns: max-content 1fr max-content;
      grid-template-areas: 'rights menu legal';
      justify-content: space-between;
    }
  }
`

type Props = {}

const Footer: React.FC<Props> = () => {
  return (
    <FooterStyled>
      <div className="wrapper">
        <div className="footer-content">
          <figure className="logo">
            <img src={Logo} alt="Logo Etec" />
          </figure>

          <div className="left-info">
            <ContactInfoItem
              className="item-left"
              Icon={Location}
              text={contactInfo.location.text}
              url={contactInfo.location.url}
            />
            <ContactInfoItem
              className="item-left"
              Icon={Phone}
              text={contactInfo.phone.text}
              url={contactInfo.phone.url}
            />
          </div>
          <div className="right-info">
            <ContactInfoItem
              className="item-right"
              Icon={Mail}
              text={contactInfo.mail.text}
              url={contactInfo.mail.url}
            />
            <ContactInfoItem
              className="item-right"
              Icon={Clock}
              text={contactInfo.horary.text}
            />
          </div>
        </div>
      </div>
      <div className="footer-links">
        <ul className="menu">
          {menuData.map((i) => {
            return (
              <li key={i.id}>
                <Link to={i.path}>{i.title}</Link>
              </li>
            )
          })}
        </ul>
        <p className="rights">
          © 2022 ETEC <br /> Todos los derechos reservados
        </p>
        <div className="legal">
          <Link to="/terminos">Términos y condiciones</Link>
          <p>|</p>
          <Link to="/politica">Políticas de privacidad</Link>
        </div>
      </div>
    </FooterStyled>
  )
}

export default Footer
