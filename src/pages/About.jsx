
import React, { useRef, useEffect } from "react";
import "../css/About.css";
import { motion, useInView } from "framer-motion";
import { BsGithub } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";
import { AiOutlineMail } from "react-icons/ai";
import pdf from "../files/Maggie-Rozell-Resume.pdf";
import { LinkBtns, GitHub, Email, LinkedIn } from "../components/HeroSection/HeroElements"; //css in HeroElements


const textAnimate = {
    offscreen: { y: 100, opacity: 0 },
    onscreen: { y: 0, opacity: 1, transition: { duration: 1, type: "spring", bounce: 0.5 } }
};


const About = () => {

    // const ref = useRef(null)
    // const isInView = useInView(ref, {once: true})

    // useEffect(() => {
    //     console.log("Element is in view: ", isInView)
    //   }, [isInView])

    return (

        <div className="aboutContainer" id="About" >
            <motion.div className="aboutWrapper"
                // ref={ref}
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{ once: true, amount: 0 }}
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
                            I am a designer, a thinker, a team player, a leader. In my previous career, I helped
                            restaurants, bars, nightclubs, and music venues become better and more profitable.
                            Excellence in guest experience and client satisfaction required strict attention to detail,
                            something I excel in. With marketing and branding, whether in-house or on social
                            media, I helped foster identity and purpose for the businesses I worked with. Now, I want
                            to do just that by utilizing my design skills in web development. With a solid
                            understanding of HTML, CSS, JavaScript, and ReactJS, I am eager to put everything that
                            I have learned together with an innovative company.

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