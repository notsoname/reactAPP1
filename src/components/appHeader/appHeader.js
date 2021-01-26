/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    h1 {
        font-size: 26px;
        color: ${props => props.colored ? 'red' : 'black'};
        transition: .3s all;
        :hover {
            color: red;
            transition: .3s all;
        }
    }
    h2 {
        font-size: 1.2rem;
        color: grey;
    }
`


const AppHeader = ({allPosts, liked}) => {
    return (
        <Header>
            <h1>Asar Akhmetbekov</h1>
            <h2>{allPosts} записей, из них понравилось {liked}</h2>
        </Header>
    )
}

export default AppHeader;