import React from 'react';
import Link from '../Link';
import { Container } from './styles';

const LinkList:React.FC = () => {
    const myLinks:Array<ILink> = [
        { name: "LinkedIn", title: "LinkedIn", href: "https://linkedin.com/in/andreitoledo", target:"" },
        { name: "GitHub", title: "GitHub", href: "https://github.com/andrei1110", target:"" }
    ];

    return (
        <Container>
            { myLinks.map((link, index) =>
                <Link link={link} key={'link' + index} />
            )}
        </Container>
    );
};

export default LinkList;