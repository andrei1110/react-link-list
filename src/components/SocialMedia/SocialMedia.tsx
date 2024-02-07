import React from 'react';
import { Container, SocialIcon } from './styles';
import { SlSocialInstagram, SlSocialSpotify } from "react-icons/sl";

const SocialMedia:React.FC = () => {
    const socials = [
        { href: "https://instagram.com/toledoandrei", icon: <SlSocialInstagram />, title: "Instagram" },
        { href: "https://open.spotify.com/user/12174950077?si=ad4e5e0383f64de3", icon: <SlSocialSpotify />, title: "Spotify" }
    ]
    return (
        <Container>
            {socials.map(social => (
                <SocialIcon href={social.href} title={social.title}> {social.icon} </SocialIcon>
            ))}
        </Container>
    );
};

export default SocialMedia;