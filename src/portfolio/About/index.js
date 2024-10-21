import { Chrono } from "react-chrono";
import './index.css'

const About = ()=>(
 <div className='about-container' id='ABOUT'>
    <h1 className='about-heading'>About</h1>
        <div className='profile-container'>
            <img src='https://pbs.twimg.com/profile_images/1565906344359899137/wjXzJwJ-_400x400.jpg' alt='profile' className='profile-image'/>
            <div className='bio-container'>
                <h1 className='profile-heading'>NAME: JAYA SURYA PRAKASH REDDY KUPPIREDDY</h1>
                <p className='profile-para'>DOB: 29-11-2003</p>
                <p className='profile-para'>ADDRESS: 1-131A Velagatur(V),Koilakuntla(M),Nandyal(Dist),Andhrapradesh,India 510134</p>
            </div>
        </div>
        <h1 className='about-heading'>Education</h1>
        <div className="chrono-container">
            <Chrono mode='VERTICAL_ALTERNATING' disableToolbar useReadMore>
                <div className='chrono-card'>
                    <h1 className='chrono-title'>2006-2015</h1>
                    <img src='https://induspublicschool.in/wp-content/uploads/2024/01/logo.png' alt='indus' className='chrono-image'/>
                    <h1 className='chrono-title'>Indus high school</h1>
                    <div>
                    <p>I joined this school when I was three years old and studied here until sixth grade. During my time at the school, I was immersed in a nurturing and dynamic learning environment that fostered both my academic and personal growth. 
                    </p>
                    </div>
                </div>
                <div className='chrono-card'>
                    <h1 className='chrono-title'>2016-2019</h1>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0MNCqfSr8-Rnqgbt2A5sx85gPRj7mN_Znug&s' alt='chaitanya' className='chrono-image'/>
                    <h1 className='chrono-title'>Sri chaitanya techno school</h1>
                    <div>
                    <p>I joined in seventh standard and continued my studies at this school until 10th standard, where I appeared for the Andhra Pradesh Secondary School Certificate Examination and achieved an impressive score of 93%. Throughout these years, I focused on strengthening my academic foundation, particularly in subjects like mathematics, science, and social studies, which were pivotal in shaping my academic interests and future goals.
                    </p>
                    </div>
                </div>
                <div className='chrono-card'>
                    <h1 className='chrono-title'>2019-2021</h1>
                    <img src='https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/128x128/b934fca7803ac71c45d544a12ab2aa81' alt='college' className='chrono-image'/>
                    <h1 className='chrono-title'>Sri chaitanya junior college</h1>
                    <div>
                    <p>I studied 11th and 12th at Sri Chaitanya Junior College, specializing in the MPC (Mathematics, Physics, and Chemistry) stream. These two years were both challenging and rewarding, as I immersed myself in advanced concepts in these core subjects.I appeared for the Board of Intermediate Education, AP exam, and secured a score of 88%, which was a significant achievement, reflecting my dedication and consistent effort throughout those two years.
                    </p>
                    </div>
                </div>
                <div className='chrono-card'>
                    <h1 className='chrono-title'>2021-2025</h1>
                    <img src='https://biet.ac.in/images/Common%20Images/BIET%20CLG_LOGO_NEW.png' alt='bharat' className='chrono-image' style={{width:"100px"}}/>
                    <h1 className='chrono-title'>Bharat institue of engineering and technology</h1>
                    <div>
                    <p>I began my journey in Computer Science, specializing in Data Science, in 2021 at Bharat Institute of Engineering and Technology under JNTUH. Throughout my time here, I have focused on gaining in-depth knowledge of data science, algorithms, machine learning, and programming, all of which are essential for a career in this field.
                        My hard work has resulted in a current CGPA of 7.5, and I am on track to graduate in 2025. This program has provided me with the technical expertise and problem-solving skills needed to excel in the ever-evolving field of data science.
                    </p>
                    </div>
                </div>
            </Chrono>
        </div>
 </div>
)

export default About 