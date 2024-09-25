import styles from '../assets/css/ProfileStyles.module.css'
// run --> npm install aos --save
import 'aos/dist/aos.css'; 
import AOS from 'aos'; 
import { useEffect } from 'react';
import CV from '../assets/Bilguun_Zorigtbaatar.pdf'

const Profile = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: "ease", 
      mirror: false, 
      disable: "mobile", 
      once: true
    });
  }, []);
  return (
    <section className={`row ${styles.profileContainer}`} id='profile'>
            <div className={`${styles.nameDiv}`} id="nameDiv">
              <div className={`col-lg-6 ${styles.nameDivContainer}`}>
                <h2 className={`${styles.helloh2}`} id="helloh2" data-aos-anchor="#top" data-aos-anchor-placement="top-center" data-aos-delay="150" data-aos="fade-up">
                  Hello! My name is 
                </h2>
                <h1 className={`${styles.nameh1}`} id="nameh1" data-aos-anchor="#top" data-aos-anchor-placement="top-center" data-aos-delay="300" data-aos="fade-up">
                  Bilguun Zorigtbaatar.
                </h1>
                <h2  className={styles.seh2} id="seh2" data-aos-anchor="#top" data-aos-anchor-placement="top-center" data-aos-delay="450" data-aos="fade-up">
                  I'm a full-stack developer.
                </h2>
                <div className={`col-lg-12 col-12 ${styles.resumeBtn}`} data-aos-anchor="#top" data-aos-anchor-placement="top-center" data-aos-delay="600" data-aos="fade-up">
                  <a href="https://www.linkedin.com/in/bilguun-zorigtbaatar" target='_blank'>
                          <i className="fa-brands fa-linkedin-in"></i>
                      </a>
                      <a href="https://github.com/Bilguun-Zorig" target='_blank'>
                          <i className="fa-brands fa-github"></i>
                      </a>
                  <a href={CV} download>
                        <button className=' btn btn-success'>Resume</button>
                  </a>
                </div>
              </div>
            </div>
    </section>
  )
}

export default Profile