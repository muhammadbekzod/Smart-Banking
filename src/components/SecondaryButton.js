import React from 'react'
import styled from 'styled-components'
import arrow from '../img/arrow.svg';

function SecondaryButton({name}) {
    return (
        <SecondaryButtonStyled>
            {name}
            <img src={arrow} alt="" />
        </SecondaryButtonStyled>
    )
}

const SecondaryButtonStyled =  styled.button`
background-color: var(--dark-primary);
padding: .7rem 2rem;
border-radius: 20px;
outline: none;
border: none;
font-family: inherit;
font-size: inherit;
color: inherit;
cursor: pointer;
display: flex;
align-items: center;
justify-content: space-between;
img{
    padding-left: .9rem;
}

`;

export default SecondaryButton;
