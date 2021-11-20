import React from 'react';
import "./app-header";
import styled from 'styled-components';

const Header = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    h1 {
        font-size: 26px;
        color: ${props => props.colored ? 'black' : 'red'};
        transition: all 0.5s ease-out;
        :hover {
            transform: scale(1.2);
        }
    }
    h2 {
        font-size: 1.2rem;
        color: grey;
    }
`

const AppHeader = ({liked, allPosts}) => {
    return (
        <Header colored>
            <h1>Timur Ibragimov</h1>
            <h2>{allPosts} записей, из них понравилось {liked}</h2>
        </Header>
    )
}

export default AppHeader;