import React from 'react';
import { LinkBox } from './styles';

interface IProps {
    link: ILink
}

const Link:React.FC<IProps> = (props: IProps) => {
    return <LinkBox href={props.link.href} target={props.link.target} title={props.link.title} > {props.link.name} </LinkBox>
}

export default Link;