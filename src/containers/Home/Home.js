import React, { Component } from 'react';
import Navbar from '../../components/navbar/navbar';
import Jumbotron from '../../components/jumbotron/jumbotron';
import SkillCard from '../../components/skillCard/skillCard';
import WorkCard from '../../components/workCard/workCard';
import ProjectCard from '../../components/projectCard/projectCard';
import { Container, CardDeck } from 'react-bootstrap';
import "./Home.css";

class Home extends Component {
    render() {
        return (
            <Container>
                <Navbar />
                <Jumbotron className="content-section" />
                <h4 style={{ textAlign: "center" }}>Skills</h4>
                <CardDeck className="content-section">
                    <SkillCard
                        skills={["Java", "JavaScript", "Python", "C"]}
                        title="Programming Languages" />
                    <SkillCard
                        skills={["HTML5", "CSS", "ReactJS", "VueJS"]}
                        title="Front-End" />
                    <SkillCard
                        skills={["ExpressJS", "REST Endpoints", "API Architecture", "MySQL", "MongoDB"]}
                        title="Back-End" />
                    <SkillCard
                        skills={["CI/CD", "Docker", "Heroku"]}
                        title="Deployment" />
                </CardDeck>
                <h4 style={{ textAlign: "center" }}>Work Experience</h4>
                <div className="content-section">
                    <CardDeck>
                        <WorkCard
                            companyName="AnalytiQ Inc"
                            jobTitle="Software Engineer"
                        />
                        <WorkCard
                            companyName="TELUS New Jersey Institute Of Technology"
                            jobTitle="Research Assistant | Web Developer"
                        />
                    </CardDeck>
                </div>
                <h4 style={{ textAlign: "center" }}>Projects</h4>
                <div className="content-section">
                    <ProjectCard
                        title="E-shop"
                        techs={["ReactJS", "HTML5", "CSS", "NodeJS", "ExpressJS", "MongoDB"]}
                        description={"Write a goooood description here"}
                    />
                    <ProjectCard
                        title="Yelp Plus"
                        techs={["Android SDK", "Java", "NodeJS", "ExpressJS", "RestFul API", "MongoDB", "Heroku", "Mocha", "Chai"]}
                        description={"Write a goooood description here"}
                    />
                    <ProjectCard
                        title="Do It Today"
                        techs={["Android SDK", "Java", "SQLlite"]}
                        description={"Write a goooood description here"}
                    />
                </div>
                <div className="contact-me">
                    <h4 style={{ textAlign: "center" }}>Contact Me</h4>
                </div>
            </Container>
        )
    }
}

export default Home;