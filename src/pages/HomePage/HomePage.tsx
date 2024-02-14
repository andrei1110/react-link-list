import React from 'react';
import { CentralBox, Container, H1, Image, SubTitle } from './styles';
import profilePic from '../../assets/images/profile-pic.jpg';
import LinkList from '../../components/LinkList';
import SocialMedia from '../../components/SocialMedia';
import Footer from '../../components/Footer';

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
            <Footer />
        </Container>
    );
};

export default HomePage;