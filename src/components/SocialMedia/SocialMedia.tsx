import React from "react";
import { Container, SocialIcon } from "./styles";
import { SlSocialInstagram, SlSocialSpotify } from "react-icons/sl";
import { IconType } from "react-icons";

interface SocialLink {
  href: string;
  icon: IconType;
  title: string;
}

const SocialMedia: React.FC = () => {
  const socials: SocialLink[] = [
    {
      href: "https://instagram.com/toledoandrei",
      icon: SlSocialInstagram,
      title: "Instagram",
    },
    {
      href: "https://open.spotify.com/user/12174950077?si=ad4e5e0383f64de3",
      icon: SlSocialSpotify,
      title: "Spotify",
    },
  ];
  return (
    <Container>
      {socials.map(({ href, icon: Icon, title }) => (
        <SocialIcon href={href} key={title} title={title}>
          {" "}
          {/* @ts-ignore */}
          <Icon />{" "}
        </SocialIcon>
      ))}
    </Container>
  );
};

export default SocialMedia;
