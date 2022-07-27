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
                        <NavLink to='Wallet'>Wallet</NavLink>
                    </NavList>
                    <NavList>
                        <NavLink to='Mint'>Mint</NavLink>
                    </NavList>
                </NavMenu>
            </NavBar>
        </>
    )
}

export default Nav