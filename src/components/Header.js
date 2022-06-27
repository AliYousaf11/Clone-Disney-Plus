import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom';
function Header() {
  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      <NavMenu>
        <a href="/">
          <img src="" alt="" />
          <span></span>
        </a>

        <Link to="/">
        <img src="/images/home-icon.svg" alt="" />
        <span>HOME</span>
        </Link>

        <Link to="/login">
        <img src="/images/watchlist-icon.svg" alt="" />
        <span>LOGIN</span>
        </Link>

        <Link to="/detail">
        <img src="/images/search-icon.svg" alt="" />
        <span>DETAILS</span>
        </Link>

      </NavMenu>
      <UserImg src='/local/thumb2-disney-turquoise-logo-4k-turquoise-brickwall-disney-logo-artwork.jpg' />
    </Nav>
  )
}

export default Header

const Nav = styled.nav`

overflow-x:hidden;
height:70px;
background: #090b13;
display:flex;
align-items:center;
padding:0 36px;
`
const Logo = styled.img`
width: 80px;
`

const NavMenu = styled.div`
display:flex;
flex:1;
justify-content:center;
align-item:center;

  a{
    display:flex;
    align-items:center;
    padding :0 12px;
    cursor:pointer;
    color:white;
    text-decoration:none;

    img{
      height:20px;
    }
    span{
      font-size:13px;
      letter-spacing: 1.42px;
      position:relative;
      
      &:after{
        content: "";
        height: 2px;
        background: white;
        position:absolute;
        left:0;
        right:0;
        bottom:-6px;
        opacity:0;
        trasform-origin: left center;
        transform:scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }
    }
    &:hover{
      span:after{
        opacity:1;
        transform:scaleX(1);
      }
    }
  }

`
const UserImg = styled.img`
width:48px;
height:48px;
border-radius:50%;
cursor:pointer;

`