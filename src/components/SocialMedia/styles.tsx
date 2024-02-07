import styled from 'styled-components';

export const Container = styled.div`
    margin: 12px auto;
    height: 28px;
    display: flex;
    justify-content: center;
    gap: 8px;
`;

export const SocialIcon = styled.a`
    text-decoration: none;
    color: var(--white);
    font-size: 24px;
    transition-duration: .3s;
    &:hover {
        font-size: 28px;
    }
`