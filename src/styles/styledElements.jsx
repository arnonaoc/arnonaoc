import { NavLink as Link} from 'react-router-dom'
import styled from 'styled-components'
import { FaBars } from 'react-icons/fa'


export const NavBar = styled.nav`
    background: #34a0ff;
    height: 85px;
    display: flex;
    justify-content: space-between;
    padding: 0.2rem calc((100vw - 1000px) / 2);
`

export const NavLogo = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: bold;
    color: #fff;

    @media screen and (max-width: 768 px ) {
        display: none;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style-type: none;
    height: auto;
    
    @media screen and (max-width: 768 px ) {
        display: none;
    }
`
export const NavList = styled.li`

    @media screen and (max-width: 768 px ) {
        padding: 2rem 0;
    }
`

export const NavLink = styled(Link)`
   color: #fff;
   display: flex;
   align-items: center;
   text-decoration: none; 
   padding: 0 1rem;
   cursor: pointer;
   &.active {
       color: #333;
   }
`

export const FooterCon = styled.footer`
   background-color: #333;
   color: #fff;
   padding: 0.1rem;
   text-align: center;
   position: fixed;
   bottom: 0;
   width: 100%;
`
