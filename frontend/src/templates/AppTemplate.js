import React from 'react';
import styled from 'styled-components';
import {media} from '../utils/Media';

const AppTemplate = (props) => {
    return (
        <Container>
            {props.children}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-item: center;
    margin: auto;
    width: 80%;
    min-height: 80vh;
    font-size: 18px;
    ${media.handheld`
        width: 100%;
    `}
`;

const Header = styled.header`
    text-align: center;
    font-size: 2em;
    font-family: 'Roboto', sans-serif;
    padding-bottom: 10px;
`;

export {
    AppTemplate,
    Header,
    Container
};