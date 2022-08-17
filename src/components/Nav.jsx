import { NavBar, NavLogo, NavMenu, NavList, NavLink } from '../styles/styledElements'


function Nav() {
    return (
        <>
            <NavBar>
                <NavLogo to='/'>
                   NFT Flight Booking
                </NavLogo>

                <NavMenu>
                    <NavList>
                        <NavLink to='/'>Search flight</NavLink>
                    </NavList>
                    
                    <NavList>
                        <NavLink to='Booking'>Booking Flight</NavLink>
                    </NavList>

                    <NavList>
                        <NavLink to='ContractInfo'>Contract Info</NavLink>
                    </NavList>
                </NavMenu>
            </NavBar>
        </>
    )
}

export default Nav