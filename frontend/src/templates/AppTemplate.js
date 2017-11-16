import React from 'react';
import styled from 'styled-components';

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
`;

const Header = styled.header`
    text-align: center;
    font-size: 2em;
    font-family: 'Roboto', sans-serif;
`;

export {
    AppTemplate,
    Header,
    Container
};