import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: var(--black);
    padding-top: 148px;
    overflow: hidden;
    @media(max-width: 500px) {
        padding-top: 48px;
    }
`;

export const CentralBox = styled.div`
    width: 100%;
    height: 100%;
    background-color: var(--black);
    margin: 0 auto;
    text-align: center;
    color: white;
    min-height: 248px;
    // border-radius: 4px;
    padding: 24px;
    @media(max-width: 501px) {
        padding: 24px 0 0 0;
    }
`;

export const H1 = styled.h1`
    font-family: 'DM Sans', sans-serif;
    font-size: 24px;
    font-weight: 400;
    color: white;
`;

export const Image = styled.img`
    width: 96px;
    height: 96px;
    border-radius: 100%;
    object-fit: cover;
`;

export const SubTitle = styled.h2`
    font-family: 'DM Sans', sans-serif;
    font-size: 18px;
    font-weight: 200;
    color: white;
`;