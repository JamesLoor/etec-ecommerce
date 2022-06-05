import * as React from 'react'
import styled from 'styled-components'
import Close from '../icons/Close'
import Menu from '../icons/Menu'
import Logo from '../static/images/logo.png'
import { menuData } from '../data/menu.data'
import { NavLink } from 'react-router-dom'
import HeaderFigure from '../static/images/headerFigure.png'
import User from '../icons/User'
import Heart from '../icons/Heart'
import ShoppingBag from '../icons/ShoppingBag'

const HeaderStyled = styled.header<StyledProps>`
  display: grid;
  grid-template-columns: repeat(2, min-content);
  justify-content: space-between;
  align-items: center;
  padding: 15px 25px;
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.secundary};
  width: 100%;
  position: fixed;
  z-index: 1000;
  overflow: hidden;
  box-shadow: 0px 4px 4px 0px #00000040;

  .logo {
    width: 120px;
    user-select: none;
    cursor: pointer;
    z-index: ${({ theme }) => theme.positions.logo};
    img {
      width: 100%;
    }
  }

  .figure {
    position: absolute;
    width: 60%;
    bottom: 0;
    height: 100%;
    background-image: url(${HeaderFigure});
    background-repeat: no-repeat;
    background-position: right;
    background-size: cover;
    z-index: ${({ theme }) => theme.positions.headerFigure};
  }

  .menu-nav {
    background-color: ${({ theme }) => theme.colors.accent};
    position: fixed;
    width: 100%;
    height: 100vh;
    top: ${({ isOpen }) => (isOpen ? "0" : "-100vh")};
    bottom: 0;
    right: 0;
    left: 0;
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-rows: 1fr;
    transition: 0.3s;
    transition-property: top;
    z-index: ${({ theme }) => theme.positions.navbar};
  }

  .header-options {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: min-content;
    gap: 8px;

    svg {
      transition: .15s;
      :hover {
        transform: scale(1.25);
      }
    }
  }

  .menu-close {
    position: absolute;
    top: 15px;
    right: 5%;
    width: min-content;
    height: min-content;
  }

  .menu {
    color: ${({ theme }) => theme.colors.secundary};
    display: grid;
    gap: 20px;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    a {
      font-size: 16px;
      font-weight: 600;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.secundary};
      :hover {
        text-decoration: underline;
      }
    }
  }

  .link__active {
    transform: scale(1.5);
  }

  @media (min-width: 425px) {
    .figure {
      display: block;
      width: 65%;
    }
  }

  @media (min-width: 768px) {
    gap: 20px;

    .logo {
      width: 150px;
    }

    .figure {
      width: 45%;
    }

    .header-options {
      gap: 15px;
    }
  }

  @media (min-width: 1024px) {
    grid-template-areas: "logo menu options";
    grid-template-columns: 1fr max-content max-content;
    gap: 70px;

    .logo { grid-area: logo; }
    .menu { grid-area: menu; }
    .header-options { grid-area: options; }

    .menu-open,
    .menu-close {
      display: none;
    }

    .menu-nav {
      top: 0;
      position: static;
      height: auto;
      background: none;
      z-index: ${({ theme }) => theme.positions.navbar};
    }

    .menu {
      grid-auto-flow: column;
    }

    .figure {
      width: 35%;
    }
  }

  @media (min-width: 1240px) {
    gap: 100px;
    .menu {
      gap: 25px;
    }
  }
`

type StyledProps = {
  isOpen: boolean
}

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const openMenu = () => {
    setIsOpen(true);
  }

  const closeMenu = () => {
    setIsOpen(false);
  }

  return (
    <HeaderStyled isOpen={isOpen}>
      <figure className="logo">
        <img src={Logo} alt="Logo Etec" />
      </figure>

      <div className="figure"></div>

      <div className="header-options">
        <button onClick={() => console.log('ShoppingBag')} className="menu-cart">
          <ShoppingBag width="25px" height="25px" />
        </button>

        <button onClick={() => console.log('Heart')} className="menu-withList">
          <Heart width="25px" height="25px" />
        </button>

        <button onClick={() => console.log('User')} className="menu-user">
          <User width="25px" height="25px" />
        </button>

        <button onClick={openMenu} className="menu-open">
          <Menu width="25px" height="25px" />
        </button>
      </div>

      <nav className="menu-nav">
        <button onClick={closeMenu} className="menu-close">
          <Close />
        </button>

        <ul className="menu">
          {menuData.map(item => {
            return (
              <li key={item.id}>
                <NavLink
                  to={item.path}
                  onClick={closeMenu}
                  className={({ isActive }) => (isActive ? "link__active" : "")}
                >
                  {item.title}
                </NavLink>
              </li>
            )
          })}
        </ul>
      </nav>
    </HeaderStyled>
  )
}

export default Header
