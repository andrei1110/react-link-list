import React from 'react';
import { CentralBox, Container, H1, Image, SubTitle } from './styles';
import profilePic from '../../assets/images/profile-pic.jpg';
import LinkList from '../../components/LinkList';
import SocialMedia from '../../components/SocialMedia';

const HomePage:React.FC = () => {
    return (
        <Container>
            <CentralBox>
                <Image src={profilePic} alt="Profile picture" />
                <H1>Andrei Toledo</H1>
                <SubTitle>Full Stack Software Engineer</SubTitle>
                <SocialMedia />
                <LinkList />
            </CentralBox>
        </Container>
    );
};

export default HomePage;