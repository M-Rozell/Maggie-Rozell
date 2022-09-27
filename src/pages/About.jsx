
import React from "react";
import "../css/About.css";
import { AiOutlineMail } from "react-icons/ai";
import { ImLinkedin } from "react-icons/im";
import { BsGithub } from "react-icons/bs";
import pdf from "../files/Resume.pdf";
import { LinkBtns, GitHub, Email, LinkedIn } from "../components/HeroSection/HeroElements"; //css in HeroElements
import { motion } from "framer-motion";

const textAnimate = {
    offscreen: { y: 100, opacity: 0 },
    onscreen: { y: 0, opacity: 1, transition: { duration: 1, type: "spring", bounce: 0.5 } }
};


const About = () => {

    return (

        <div className="aboutContainer" id="About">
            <motion.div className="aboutWrapper"
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{ once: false, amount: 1 }}
                transition={{ staggerChildren: 0.5 }}>

                <div className="aboutTitleContainer">
                    <motion.h3 className="aboutTitle"

                        variants={textAnimate}
                    >About</motion.h3>
                </div>

                <div className="resume" >
                    <div className="objective">

                        <motion.p className="pObjective"

                            variants={textAnimate}>
                            Hi there! I'm Maggie Rozell, a web designer and full-stack developer with a background
                            in graphic design and business management. I am a critical thinker who enjoys problem 
                            solving in a fast paced working environment and am ready to design scalable web applications
                            for an innovative company.
                        </motion.p>


                        <motion.div className="certifications"

                            variants={textAnimate}>
                            <div className="txtCertifications">Certifications:</div>
                            <ul className="certList">
                                <li>Innovate Birmingham Full-Stack Web Development</li>
                                <li> Agile Education Registered Scrum Master</li>
                                <li> Agile Education Registered Product Owner</li>
                                <li> AIDT Certified Leader</li>
                                <li> Florida Atlantic University certificate in Hospitality and Tourism Management</li>
                            </ul>
                        </motion.div>


                        <motion.div className="education"

                            variants={textAnimate}>
                            <div className="txtEducation">Education:</div>
                            <ul className="educationList">
                                <li>Innovate Birmingham: Web-Dev</li>
                                <li>UAH: BFA (Graphic Design)</li>
                                <li>FAU: Hospitality and Tourism Management</li>
                            </ul>
                        </motion.div>

                        <motion.div

                            variants={textAnimate}>
                            <LinkBtns>
                                <a href="https://github.com/M-Rozell/maggie-rozell" target="blank" className="portfolioLink">Portfolio</a>
                                <GitHub href="https://github.com/M-Rozell" target="_blank"><BsGithub /></GitHub>
                                <Email href="mailto: maggiemagnum@gmail.com" ><AiOutlineMail /></Email>
                                <LinkedIn href="https://www.linkedin.com/in/maggie-rozell/" target="_blank"><ImLinkedin /></LinkedIn>
                                <a href={pdf} target="blank" rel="noreferrer" className="resumeLink">Resume</a>
                            </LinkBtns>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
};

export default About;