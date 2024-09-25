import styles from '../assets/css/ContactStyles.module.css'
import CV from '../assets/Bilguun_Zorigtbaatar.pdf'

const Contact = () => {
  return (
    <section className={`row ${styles.contactContainer}`} id='contact'>
        <div className="col-lg-8 col-10" data-aos="fade-up">
            <h1>Resume</h1>
            <div className={`col-lg-12 col-12 ${styles.resumeBtn}`} >
                <a href={CV} target='_blank'>
                    <button className='btn'>View Resume
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </button>
                </a>
                <a href={CV} download>
                    <button className='btn'>Download Resume
                        <i class="fa-solid fa-download"></i>
                    </button>
                </a>
            </div>
        </div>
        <div className="col-lg-8 col-10" data-aos="fade-up">
            <h1>Contact</h1>
            <div className={`${styles.border}`} id='exp-card'>
                    <p>
                        <a href="mailto:bilguinzorigt07@gmail.com" target='_blank'>
                            <i className="fa-solid fa-envelope"></i>
                        </a>
                    </p>
                    <p>
                        <a href="https://www.linkedin.com/in/bilguun-zorigtbaatar" target='_blank'>
                            <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                    </p>
                    <p>
                        <a href="https://github.com/Bilguun-Zorig" target='_blank'>
                            <i className="fa-brands fa-github"></i>
                        </a>
                    </p>
                    <p>
                        <a href="https://www.instagram.com/#" target='_blank'>
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                    </p>
            </div>
        </div>
        <footer>
            <p>
            &copy;2024 Bilguun Zorigtbaatar. <br />
            All rights reserved.
            </p>
        </footer>
    </section>
  )
}

export default Contact