import React from 'react';
import Link from '../Link';
import { Container } from './styles';

const LinkList:React.FC = () => {
    const myLinks:Array<ILink> = [
        { name: "LinkedIn", title: "LinkedIn", href: "https://linkedin.com/in/andreitoledo", target:"_blank" },
        { name: "GitHub", title: "GitHub", href: "https://github.com/andrei1110", target:"_blank" }
    ];

    return (
        <Container>
            { myLinks.map(link =>
                <Link link={link} />
            )}
        </Container>
    );
};

export default LinkList;