import React from 'react';
import { Container, GitHubLink, GitHubIcon } from './styles';

const Footer:React.FC = () => {
    return (
        <Container>
            Developed by: Andrei Toledo - See me on 
            <GitHubLink title="GitHub" href="https://github.com/andrei1110/react-link-list" target="_blank">
                GitHub <GitHubIcon />
            </GitHubLink>
        </Container>
    );
};

export default Footer;