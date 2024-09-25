import styles from '../assets/css/ExperienceStyles.module.css'


const Experience = () => {
  return (
    <section className={`row ${styles.experience}`} id='experience'>
      <h1 data-aos="fade-up">Experience</h1>
      <div className={`${styles.subExperience}`}>
        <div className={`col-lg-7 col-10 card border-dark mb-5 ${styles.border}`} id='exp-card' data-aos="fade-up">
          <div className={`card-header ${styles.cardHeader}`}>
            <h5 className="card-title">TechCircle Solutions, LLC</h5>
            <p>Jan 2022 – Present</p>
          </div>
          <div className="card-body">
            <h5>Lead Automation Engineer/Software Engineer</h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Expertise in automation using Selenium WebDriver with Java on TestNG and JUnit, designing and implementing frameworks like Page Object Model, Keyword Driven, Data Driven, and Hybrid frameworks.</li>
              <li className="list-group-item">Proficient in build management tools (Maven/ANT) and continuous integration with Jenkins, maintaining automation code in GitHub, and performing cross-browser testing with TestNG.</li>
              <li className="list-group-item">Developed and maintained automation testing frameworks, including Robot Framework for end-to-end testing and integration with Jenkins for continuous integration, with experience in cloud testing on AWS.</li>
              <li className="list-group-item">Experienced in Agile/SCRUM processes, attending User Story sessions, providing feedback, and collaborating cross-functionally to ensure test coverage and improve acceptance criteria.</li>
              <li className="list-group-item">Strong communication skills, with a proven ability to design, develop, and maintain test automation infrastructure, leveraging tools like JIRA and Helix, and creating custom Python libraries to extend automation capabilities.</li>
            </ul>
          </div>
        </div>
        <div className={`col-lg-7 col-10 card border-dark mb-5 ${styles.border}`} id='exp-card' data-aos="fade-up">
          <div className={`card-header ${styles.cardHeader}`}>
            <h5 className="card-title">Farm Credit Bank of Texas</h5>
            <p>Jan 2020 – 2022</p>
          </div>
          <div className="card-body">
            <h5>QA Automation Engineer</h5>
            <ul className="list-group list-group-flush">
            <li className="list-group-item">Developed BDD test scripts and scenarios using Cucumber and Gherkin format, with extensive experience in Selenium-based automation frameworks (Data-driven and Hybrid).</li>
            <li className="list-group-item">Proficient in using Selenium WebDriver/IDE/Grid for automation testing of web and client-server applications, with expertise in cross-browser testing and Page Object Model (POM).</li>
            <li className="list-group-item">Implemented automation frameworks and performance testing scripts, utilizing tools like Maven for build management and Jenkins for Continuous Integration.</li>
            <li className="list-group-item">Conducted UI, Functional, Regression, and Smoke testing, mentoring manual testers on BDD approaches and contributing to User Acceptance Testing.</li>
            <li className="list-group-item">Actively participated in Agile methodologies (SCRUM), refining user stories, and collaborating with the development team to enhance project outcomes.</li>
          </ul>
          </div>
        </div>
      </div>


    </section>
  )
}

export default Experience