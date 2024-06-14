import React, { useRef } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";

import { Animate } from "react-simple-animate";
import "./styles.scss";
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_70dos4i', 'template_johi3wo', form.current, {
                publicKey: 'ZZ7YmEWrkDQNOjp0d',
            })
            .then(
                () => {
                    window.alert('Email Sent!');
                },
                (error) => {
                    window.alert('FAILED...', error.text);
                },
            );

        e.target.reset();
    };



    return (
        <section id="contact" className="contact">
            <PageHeaderContent
                headerText="My Contact"
                
            />
            <div className="contact__content">
                <Animate
                    play
                    duration={1}
                    delay={0}
                    start={{
                        transform: "translateX(-200px)",
                    }}
                    end={{
                        transform: "translateX(0px)",
                    }}
                >
                    <h3 className="contact__content__header-text">Let's Talk</h3>
                </Animate>
                <Animate
                    play
                    duration={1}
                    delay={0}
                    start={{
                        transform: "translateX(200px)",
                    }}
                    end={{
                        transform: "translateX(0px)",
                    }}
                >
                    <form className="contact__content__form" onSubmit={sendEmail} ref={form} action="">
                        <div className="contact__content__form__controlswrapper">
                            <div>
                                <input
                                    required
                                    name="name"
                                    className="inputName"
                                    type={"text"}
                                />
                                <label htmlFor="name" className="nameLabel">
                                    Name
                                </label>
                            </div>
                            <div>
                                <input
                                    required
                                    name="email"
                                    className="inputEmail"
                                    type={"text"}
                                />
                                <label htmlFor="email" className="emailLabel">
                                    Email
                                </label>
                            </div>
                            <div>
                                <input
                                    required
                                    name="subject"
                                    className="inputSubject"
                                    type={"text"}
                                />
                                <label htmlFor="subject" className="subjectLabel">
                                    Subject
                                </label>
                            </div>
                            <div>
                                <textarea
                                    required
                                    name="description"
                                    className="inputDescription"
                                    type={"text"}
                                    rows="5"
                                />
                                <label htmlFor="description" className="descriptionLabel">
                                    Description
                                </label>
                            </div>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </Animate>
            </div>
        </section>
    );
};

export default Contact;
