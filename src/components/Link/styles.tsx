import styled from 'styled-components';

export const LinkBox = styled.a`
    font-family: 'DM Sans', sans-serif;
    color: var(--black);
    font-size: 16px;
    text-decoration: none;
    background-color: var(--light-gray);
    width: 680px;
    margin-bottom: 12px;
    height: 40px;
    padding: 16px 12px 0 12px;
    border-radius: 8px;
    box-shadow: var(--black) 0px 3px 5px;
    text-align: center;
    align-items: center;
    transition-duration: .2s;
    text-overflow: ellipsis;
    &:hover {
        box-shadow: var(--gray) 0px 5px 8px;
        color: var(--dark-gray);
        width: 684px;
        height: 42px;
        font-size: 17px;
    }
    @media(max-width: 501px) {
        width: 95%;
        &:hover {
            width: 96%;
            height: 42px;
        }
    }
    @media(max-width: 768px) {
        width: 440px;
        &:hover {
            width: 344px;
            height: 42px;
        }
    }
`;