import React from "react";

import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from 'react-simple-animate';
import './styles.scss';

const jobSummary = 'Seasoned Front-End Developer skilled in blending design artistry with programming expertise to deliver immersive and engaging user experiences. Specializing in efficient website development, proactive feature optimization, and relentless debugging, with a strong passion for aesthetics and UI design. Committed to a thorough and professional approach, emphasizing the use of UX and UI concepts and strict adherence to design guidelines. Demonstrates exceptional attention to detail and a proven ability to implement design ideas that enhance user satisfaction and align with employer goals. Ideal candidate for roles focused on creating high-quality, user-friendly web applications.'

const personalDetails = [
    {
        label: "Name: ",
        value: "Trupti Hande",
    },
    {
        label: "Education: ",
        value: "B.Tech Computer Engineeer",
    },
    {
        label: "Address: ",
        value: "Pune,India",
    },
    {
        label: "Email: ",
        value: "truptimhande81@gmail.com",
    },
    {
        label: "Work-Email: ",
        value: "1032221311@mitwpu.edu.in",
    },
    {
        label: "Contact No: ",
        value: "+91 7020022875",
    },
];


const About = () => {
    return (
        <section id="about" className="about">
            <PageHeaderContent
                headerText="About Me"
               
            />
            <div className="about_content">
                <div className="about_content_personalWrapper">

                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: 'translateX(-900px)'
                        }}
                        end={{
                            transform: 'translatex(0px)'
                        }}
                    >
                        <h3>Front End Developer</h3>
                        <p>{jobSummary}</p>
                    </Animate>


                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: 'translateX(500px)'
                        }}
                        end={{
                            transform: 'translatex(0px)'
                        }}
                    >
                        <h3 className="personalinformationHeaderText">Personal Inforamation</h3>
                        <ul>
                            {
                                personalDetails.map((item, i) => (
                                    <li key={i}>
                                        <span className="title">{item.label}</span>
                                        <span className="value">{item.value}</span>

                                    </li>
                                ))
                            }
                        </ul>
                    </Animate>
                </div>


                <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: 'translateX(500px)'
                        }}
                        end={{
                            transform: 'translatex(0px)'
                        }}
                    >               
                <div className="about_content_servicesWrapper">

                            <img src="./homeimg.png"></img>
                </div>
                </Animate> 
            </div>
        </section>
    );
};


export default About;