import React from 'react'
import styled from 'styled-components';
import NavbarStyled from './Navbar'
import HeaderContent from './HeaderContent';
import bg from '../img/bg.svg'
function Header() {
    return (
        <div>
         <HeaderStyled>
         <div className="header-content">
              <NavbarStyled />
                <HeaderContent />
         </div>
         </HeaderStyled>
        </div>
    )
}

const HeaderStyled = styled.header`
    height: 100vh;
    width: 100%;
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: 100%;
    .header-content{
        padding: 0 18rem;
    }
`;

export default Header;
