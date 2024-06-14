import React from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import './styles.scss';

const Home = () => {
    const navigate = useNavigate();
    console.log(navigate);
    const handleNavigateToContactPage = () => {
        navigate('/contact');
    };

    const handleNavigateToResumePage = () => {
        navigate('/resume');
    };

    return (
        <section id="home" className="home">
            <div className="home_text-wrapper">
                <h1>
                    Hello, I'm Trupti
                    <br />
                    Front end developer
                </h1>
            </div>
            <Animate 
                play
                duration={1.5}
                delay={1}
                start={{
                    transform: 'translateY(550px)'
                }}
                end={{
                    transform: 'translateX(0px)'
                }}
            >
                <div className="home_contact-me">
                    <button onClick={handleNavigateToContactPage}>Hire  Me</button>
                </div>
                <div className="home_resume">
                    <button onClick={handleNavigateToResumePage}>Resume</button>
                </div>
            </Animate>
        </section>
    );
};

export default Home;
