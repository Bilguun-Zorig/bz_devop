import 'aos/dist/aos.css'; 
import AOS from 'aos'; 
import { useEffect } from 'react';
import styles from '../assets/css/AboutMeStyles.module.css';
import profileImg from '../images/profile-pic.png';
import cucumberLogo from '../images/cucumberLogo.png'
import github from '../images/githublogo.png'
import gitLogo from '../images/gitlogo.png'
import javaLogo from '../images/java.png'
import jenkinsLogo from '../images/jenkinsLogo.png'
import jUnit from '../images/junitLogo.png'
import maven from '../images/maveLogo.png'
import postman from '../images/postman.png'
import selenium from '../images/seleniumLogo.png'
import testng from '../images/testngLogo.png'
import SkillList from '../assets/context/SkillList';
import checkMarkIconLight from '../images/checkmark-light.svg'
import bootstrap from '../images/bootstraplogo.png'
import reactLogo from '../images/reactlogo2.png'
import jinja from '../images/jinja_logo.svg.png'
import html from '../images/htmllogo.png'
import css from '../images/csslogo.png'
import jquery from '../images/jquery.png'
import nodejs from '../images/nodelogo.png'
import express from '../images/expresslogo.png'
import socketio from '../images/socket-io-logo.png'
import mysql from '../images/mysql.png'
import mongodb from '../images/mongodblogo.png'
import npm from '../images/npm.png'
import jira from '../images/atlassinlogo.png'
import js from '../images/jslogo.png'
import python from '../images/pythonlogo.png'
import vscode from '../images/vscode.png'
import eclipse from '../images/eclipse.png'




const AboutMe = () => {
    return (
    <section className={`row ${styles.profileContainer}`} id='about'>
        <div className={`${styles.abouth1}`} data-aos="fade-up">
            <h1>About Me</h1>   
        </div>
        <div className={`col-lg-5 col-10 ${styles.profileImage}`} data-aos="fade-up">
            <img src={profileImg} alt="Bilguun Zorigtbaatar" />
        </div>
        <div className={`col-lg-7 col-10 ${styles.aboutMe}`} data-aos="fade-up">
            <p>Hi!, I'm Bilguun Zorigtbaatar, software test engineer and full-stack web developer based in Fairfax, VA. After working as a QA engineer for over 4 years, i have decided to the leap to pursue a career in software web development.</p>
        </div>
        <div className={`col-lg-7 col-10 ${styles.technologies}`} data-aos="fade-up">

            <div id="skillsDiv">
                <div id="techTitle" data-aos="fade-up" className="aos-init aos-animate">
                <h3>Technologies I've Worked With</h3>
                </div>
                <div id="skillsMain" className={`row ${styles.skillsMain}`}>
                    <div className={`col-lg-2 col-2 aos-init aos-animate ${styles.techDiv}`} id="frontend" data-aos="fade-up">
                        <div className={`${styles.techDivTitle}`}>
                        Frontend
                        </div>
                        <div className={`${styles.tech} ${styles.tooltip}`}>
                            <img src={reactLogo} alt="React / React Native" />
                            <span className={`${styles.tooltiptext}`}>React / React Native</span>
                        </div>
                        <div className={`${styles.tech} ${styles.tooltip}`}>
                            <img src={jinja} alt="Redux"/>
                            <span className={`${styles.tooltiptext}`}>Jinja</span>
                        </div>
                        <div className={`${styles.tech} ${styles.tooltip}`}>
                            <img src={html} alt="HTML"/>
                            <span className={`${styles.tooltiptext}`}>HTML</span>
                        </div>
                        <div className={`${styles.tech} ${styles.tooltip}`}>
                            <img src={css} alt="CSS"/>
                            <span className={`${styles.tooltiptext}`}>CSS</span>
                        </div>
                        <div className={`${styles.tech} ${styles.tooltip}`}>
                            <img src={jquery} alt="jQuery"/>
                            <span className={`${styles.tooltiptext}`}>jQuery</span>
                        </div>
                        <div className={`${styles.tech} ${styles.tooltip}`}>
                            <img src={bootstrap} alt="Bootstrap"/>
                            <span className={`${styles.tooltiptext}`}>Bootstrap</span>
                        </div>
                    </div>

                    <div className={`col-lg-2 col-2 aos-init aos-animate ${styles.techDiv}`} id="backend" data-aos="fade-up">
                        <div className={`${styles.techDivTitle}`}>
                        Backend
                        </div>
                        <div className={`${styles.tech} ${styles.tooltip}`}>
                            <img src={nodejs} alt="Node.js"/>
                            <span className={`${styles.tooltiptext}`}>Node.js</span>
                        </div>
                        <div className={`${styles.tech} ${styles.tooltip}`}>
                            <img src={express} alt="Express"/>
                            <span className={`${styles.tooltiptext}`}>Express</span>
                        </div>
                        <div className={`${styles.tech} ${styles.tooltip}`}>
                            <img src={mysql} alt="MySQL"/>
                            <span className={`${styles.tooltiptext}`}>MYSQL</span>
                        </div>
                        <div className={`${styles.tech} ${styles.tooltip}`}>
                            <img src={socketio} alt="Socket.io"/>
                            <span className={`${styles.tooltiptext}`}>Socket.io</span>
                        </div>
                        <div className={`${styles.tech} ${styles.tooltip}`}>
                            <img src={mongodb} alt="MongoDB"/>
                            <span className={`${styles.tooltiptext}`}>MongoDB</span>
                        </div>
                    </div>

                    <div className={`col-lg-2 col-2 aos-init aos-animate ${styles.techDiv}`} id="devops" data-aos="fade-up">
                        <div className={`${styles.techDivTitle}`}>
                        DevOps
                        </div>
                        <div className={`${styles.tech} ${styles.tooltip}`}>
                            <img src={gitLogo} alt="Git"/>
                            <span className={`${styles.tooltiptext}`}>Git</span>
                        </div>
                        <div className={`${styles.tech} ${styles.tooltip}`}>
                            <img src={github} alt="Github"/>
                            <span className={`${styles.tooltiptext}`}>Github</span>
                        </div>
                        <div className={`${styles.tech} ${styles.tooltip}`}>
                            <img src={npm} alt="npm"/>
                            <span className={`${styles.tooltiptext}`}>npm</span>
                        </div>
                        <div className={`${styles.tech} ${styles.tooltip}`}>
                            <img src={jira} alt="Jira"/>
                            <span className={`${styles.tooltiptext}`}>Jira</span>
                        </div>
                    </div>

                    <div className={`col-lg-2 col-2 aos-init aos-animate ${styles.techDiv}`} id="languages" data-aos="fade-up">
                        <div className={`${styles.techDivTitle}`}>
                        Languages
                        </div>
                        <div className={`${styles.tech} ${styles.tooltip}`}>
                            <img src={js} alt="JavaScript"/>
                            <span className={`${styles.tooltiptext}`}>JavaScript</span>
                        </div>
                        <div className={`${styles.tech} ${styles.tooltip}`}>
                            <img src={javaLogo} alt="C++"/>
                            <span className={`${styles.tooltiptext}`}>Java</span>
                        </div>
                        <div className={`${styles.tech} ${styles.tooltip}`}>
                            <img src={python} alt="C#"/>
                            <span className={`${styles.tooltiptext}`}>Python</span>
                        </div>
                    </div>

                    <div className={`col-lg-2 col-2 aos-init aos-animate ${styles.techDiv}`} id="tools" data-aos="fade-up">
                        <div className={`${styles.techDivTitle}`}>
                        Tools
                        </div>
                        <div className={`${styles.tech} ${styles.tooltip}`}>
                            <img src={vscode} alt="VS Code"/>
                            <span className={`${styles.tooltiptext}`}>VS Code</span>
                        </div>
                        <div className={`${styles.tech} ${styles.tooltip}`}>
                            <img src={postman} alt="Postman"/>
                            <span className={`${styles.tooltiptext}`}>Postman</span>
                        </div>
                        <div className={`${styles.tech} ${styles.tooltip}`}>
                            <img src={eclipse} alt="Eclipse"/>
                            <span className={`${styles.tooltiptext}`}>Eclipse IDE</span>
                        </div>
                        <div className={`${styles.tech} ${styles.tooltip}`}>
                            <img src={selenium} alt="Unity"/>
                            <span className={`${styles.tooltiptext}`}>Selenium WebDriver</span>
                        </div>
                        <div className={`${styles.tech} ${styles.tooltip}`}>
                            <img src={maven} alt="Maven"/>
                            <span className={`${styles.tooltiptext}`}>Maven Built</span>
                        </div>
                    </div>

                    <div className={`col-lg-2 col-2 aos-init aos-animate ${styles.techDiv}`} id="testing" data-aos="fade-up">
                        <div className={`${styles.techDivTitle}`}>
                        Testing
                        </div>
                        <div className={`${styles.tech} ${styles.tooltip}`}>
                            <img src={testng} alt="TestNG"/>
                            <span className={`${styles.tooltiptext}`}>TestNG</span>
                        </div>
                        <div className={`${styles.tech} ${styles.tooltip}`}>
                            <img src={jUnit} alt="JUnit"/>
                            <span className={`${styles.tooltiptext}`}>JUnit</span>
                        </div>
                        <div className={`${styles.tech} ${styles.tooltip}`}>
                            <img src={cucumberLogo} alt="Cucumber"/>
                            <span className={`${styles.tooltiptext}`}>Cucumber</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div className={`col-lg-7 col-md-10 col-10  ${styles.skillsContainer}`} data-aos="fade-up">
            <h3>Education and Certifications</h3>
            <div className={styles.skillList}>
                <SkillList src={checkMarkIconLight} skill="Washington University of Science and Technology (WUEST) - M.Sc. Information Technology, GPA: 3.75, (Jan 2022 - Aug 2024)" />
            </div>
            <hr />
            <div className={styles.skillList}>
                <SkillList src={checkMarkIconLight} skill="University of the Potomac, School of Business - MBA in Marketing, GPA: 3.9, (Sep 2017 - May 2020)" />
            </div>
        </div>
    </section>
  )
}

export default AboutMe