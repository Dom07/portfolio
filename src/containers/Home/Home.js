import React, { Component } from 'react';
import Navbar from '../../components/navbar/navbar';
import Jumbotron from '../../components/jumbotron/jumbotron';
import SkillCard from '../../components/skillCard/skillCard';
import WorkCard from '../../components/workCard/workCard';
import ProjectCard from '../../components/projectCard/projectCard';
import { Container, CardDeck } from 'react-bootstrap';
import "./Home.css";

import yelpPlusImageOne from '../../images/yelpPlus/shippedImage.png';
import yelpPlusImageTwo from '../../images/yelpPlus/shippedImage2.png';
import yelpPlusImageThree from '../../images/yelpPlus/shippedImage3.png';

import todoOne from '../../images/doItToday/shippedImageOne.png';
import todoTwo from '../../images/doItToday/shippedImageTwo.png';
import todoThree from '../../images/doItToday/shippedImageThree.png';
import todoFour from '../../images/doItToday/shippedImageFour.png';

import eshopOne from '../../images/eshop/ss1.jpg';
import eshopTwo from '../../images/eshop/ss2.jpg';
import eshopThree from '../../images/eshop/ss3.jpg';


class Home extends Component {
    render() {
        const analytiqDetails = "Developed a reactive web application for an ERP system that would be used in the healthcare industry especially during the COVID-19 situation. It was a three tier application which was deployed on Microsoft Azure Services."
        const telusDetails = "Assisted a team of PHD research students in developing a full stack web application to monitor real time traffic data. This was an IOT project where I had the opportunity to work remotely on multiple Raspberry Pis that were installed at various intersections on the streets."
        const eShopDetails = "Designed and developed a fullstack ecommerce website and performed unit, integration and system tests on the whole application. The application was built for my Software Testing Class and was developed using the agile principles with a primary foucs on testing.   "
        const yelpDetails = "Worked with a team of developers in cloning the yelp app. We performed a detailed analysis on the features available on the app and decided to remove featueres that did not have much impact replacing with some of the new features that were discovered using the brain storming session. I was responsible to develop the complete backend of the application along with some partial work on the Android app as well."
        const doItTodayDetails = "This is the first app I created and shipped to the Google Playstore in 2018. It was a wonderful development experience and I learnt so much about how a software goes through each phase of SDLC and finally gets shipped."
        const description = "My name is Dominic Devasahayam and I am a Software Engineer graduating from New Jersey Institute Of Technology. I am passionate consumer facing applications and experience that defines them. Most of the time I am hustling with a side project looking for opportunities to learn something new. I am proficient with the NodeJS stack and looking towards career opportunities in the same."
        return (
            <Container>
                <Navbar />
                <Jumbotron className="content-section" description={description} />
                <h4 id="skills" style={{ textAlign: "center" }}>Skills</h4>
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
                <h4 id="workExp" style={{ textAlign: "center" }}>Work Experience</h4>
                <div className="content-section">
                    <CardDeck>
                        <WorkCard
                            companyName="AnalytiQ Inc"
                            jobTitle="Software Engineer"
                            details={analytiqDetails}
                        />
                        <WorkCard
                            companyName="TELUS New Jersey Institute Of Technology"
                            jobTitle="Research Assistant | Web Developer"
                            details={telusDetails}
                        />
                    </CardDeck>
                </div>
                <h4 id="projects" style={{ textAlign: "center" }}>Projects</h4>
                <div className="content-section">
                    <ProjectCard
                        title="E-shop"
                        techs={["ReactJS", "HTML5", "CSS", "NodeJS", "ExpressJS", "MongoDB"]}
                        description={eShopDetails}
                        images={[eshopOne, eshopTwo, eshopThree]}
                        width="500px"
                        height="300px"
                    />
                    <ProjectCard
                        title="Yelp Plus"
                        techs={["Android SDK", "Java", "NodeJS", "ExpressJS", "RestFul API", "MongoDB", "Heroku", "Mocha", "Chai"]}
                        description={yelpDetails}
                        images={[yelpPlusImageOne, yelpPlusImageTwo, yelpPlusImageThree]}
                        width="300px"
                        height="500px"
                    />
                    <ProjectCard
                        title="Do It Today"
                        techs={["Android SDK", "Java", "SQLlite"]}
                        description={doItTodayDetails}
                        images={[todoOne, todoThree, todoFour]}
                        width="300px"
                        height="500px"
                    />
                </div>
                <div className="contact-me">
                    <h4>Contact Me</h4>
                    <div className="contact-section">
                        <span><a style={{color: "white"}} href="https://www.linkedin.com/in/dominic-devasahayam/"><i class="fab fa-linkedin contact-item"></i></a></span>
                        <span><a style={{color: "white"}} href="https://github.com/Dom07"><i class="fab fa-github contact-item"></i></a></span>
                        <span><a style={{color: "white"}} href="https://www.instagram.com/dom9505/"><i class="fab fa-instagram contact-item"></i></a></span>
                    </div>
                    <div className="contact-section">
                        <div>
                            <p>dominic5230@gmail.com</p>
                            <p>Jersey City, New Jersey</p>
                        </div>
                    </div>
                </div>
            </Container>
        )
    }
}

export default Home;