import React from 'react'
import styled from 'styled-components';
import logo from '../img/logo.svg';
import ButtonStyled from '../components/PrimaryButton'
function Navbar() {
    return (
        <NavbarStyled>
            <div className ="logo">
                <img src={logo} alt=""/>
            </div>
            <ul>
                <li>
                    <a href ="">Home</a>
                </li>
                <li>
                    <a href ="">Feature</a>
                </li>
                <li>
                    <a href ="">Pricing</a>
                </li>

            </ul>
            <ButtonStyled name={'Sign Up'}/>
        </NavbarStyled>
    )
}


const NavbarStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    min-height: 10vh;
    align-items: center;
  
    ul{
        display: flex;
        justify-content: space-between;
        width: 40%
    }

`
export default Navbar;
