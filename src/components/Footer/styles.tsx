import styled from "styled-components";
import { SlSocialGithub } from "react-icons/sl";

export const Container = styled.div`
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    text-align: center;
    position: absolute;
    border-radius: 30px;
    bottom: 16px;
    color: var(--light-gray);
    left: 50%;
    transform: translate(-50%);
    flex-direction: row;
    align-content: center;
    width: 100%;
`;

export const GitHubLink = styled.a`
    color: var(--light-gray);
    margin-left: 4px;
    text-decoration: none;
    transition-duration: .3s;
    &:hover {
        text-decoration: underline;
    }
`;

export const GitHubIcon = styled(SlSocialGithub)`
    vertical-align: middle;
`;