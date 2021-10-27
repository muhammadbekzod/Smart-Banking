import React from 'react'
import styled from 'styled-components'

function PrimaryButton({name}) {
    return (
        <ButtonStyled>
             <a href ="">
           {name}
           </a>
        </ButtonStyled>
    )
}

const ButtonStyled = styled.button`
background-color: var( --accent-pink);
padding: .7rem 2rem;
border-radius: 20px;
outline: none;
border: none;
font-family: inherit;
font-size: inherit;
color: inherit;
cursor: pointer;
`;

export default PrimaryButton;
