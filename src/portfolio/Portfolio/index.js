import { GiLinkedRings } from "react-icons/gi"
import './index.css'

const Portfolio = ()=>(
   <div className='portfolio-container' id='PORTFOLIO'>
        <h1 className='port-hading'>Portfolio</h1>
        <p className='skills-para'>Skills: Python,Javascript,HTML,CSS,Bootstrap,React.js,Node.js,SQL,Git,Commandline,Responsive web design</p>
        <p className='skills-para'>Projects</p>
        <p className='skills-para'>Note: Login Credentials for all projects username:rahul,password:rahul@2021</p>
        <ul className='unorder-list'>
            <li className="list-item">
                <a target="_blank" href='https://cloneapp.ccbp.tech' rel="noreferrer" style={{textDecoration:"none"}}>
                    <GiLinkedRings style={{color:"#000000",fontSize:40}}/>
                </a>
                <div className='project-details'>
                    <p className="list-para">Title: Nxtwatch</p>
                    <p className="list-para">Technologies: React.js,CSS,HTML</p>
                    <a target='_blank' href='https://github.com/Jayasuryaprakashreddy333/nxtwave' rel="noreferrer" style={{textDecoration:"none"}}>Git Repository</a>
                </div>
            </li>
            <li className="list-item">
                <a target="_blank" href='https://suryanxt.ccbp.tech' rel="noreferrer" style={{textDecoration:"none"}}>
                    <GiLinkedRings style={{color:"#000000",fontSize:40}}/>
                </a>
                <div className='project-details'>
                    <p className="list-para">Title: E-commerce</p>
                    <p className="list-para">Technologies: React.js,CSS,HTML</p>
                    <a target='_blank' href='https://github.com/Jayasuryaprakashreddy333/nxtwave' rel="noreferrer" style={{textDecoration:"none"}}>Git Repository</a>
                </div>
            </li>
            <li className="list-item">
                <a target="_blank" href='https://ipluae2020.ccbp.tech' rel="noreferrer" style={{textDecoration:"none"}}>
                    <GiLinkedRings style={{color:"#000000",fontSize:40}}/>
                </a>
                <div className='project-details'>
                    <p className="list-para">Title: IPL 2020</p>
                    <p className="list-para">Technologies: React.js,CSS,HTML</p>
                    <a target='_blank' href='https://github.com/Jayasuryaprakashreddy333/nxtwave' rel="noreferrer" style={{textDecoration:"none"}}>Git Repository</a>
                </div>
            </li>
            <li className="list-item">
                <a target="_blank" href='https://imagematching.ccbp.tech' rel="noreferrer" style={{textDecoration:"none"}}>
                    <GiLinkedRings style={{color:"#000000",fontSize:40}}/>
                </a>
                <div className='project-details'>
                    <p className="list-para">Title: Image Matching</p>
                    <p className="list-para">Technologies: React.js,CSS,HTML</p>
                    <a target='_blank' href='https://github.com/Jayasuryaprakashreddy333/nxtwave' rel="noreferrer" style={{textDecoration:"none"}}>Git Repository</a>
                </div>
            </li>
            <li className="list-item">
                <a target="_blank" href='https://emojigamecard.ccbp.tech' rel="noreferrer" style={{textDecoration:"none"}}>
                    <GiLinkedRings style={{color:"#000000",fontSize:40}}/>
                </a>
                <div className='project-details'>
                    <p className="list-para">Title: Emoji Game</p>
                    <p className="list-para">Technologies: React.js,CSS,HTML</p>
                    <a target='_blank' href='https://github.com/Jayasuryaprakashreddy333/nxtwave' rel="noreferrer" style={{textDecoration:"none"}}>Git Repository</a>
                </div>
            </li>
            <li className="list-item">
                <a target="_blank" href='https://kuppireddyfood.ccbp.tech' rel="noreferrer" style={{textDecoration:"none"}}>
                    <GiLinkedRings style={{color:"#000000",fontSize:40}}/>
                </a>
                <div className='project-details'>
                    <p className="list-para">Title: Food App</p>
                    <p className="list-para">Technologies: React.js,CSS,HTML</p>
                    <a target='_blank' href='https://github.com/Jayasuryaprakashreddy333/nxtwave' rel="noreferrer" style={{textDecoration:"none"}}>Git Repository</a>
                </div>
            </li>
            <li className="list-item">
                <a target="_blank" href='https://tipca.ccbp.tech' rel="noreferrer" style={{textDecoration:"none"}}>
                    <GiLinkedRings style={{color:"#000000",fontSize:40}}/>
                </a>
                <div className='project-details'>
                    <p className="list-para">Title: Tip Calculator</p>
                    <p className="list-para">Technologies: React.js,CSS,HTML</p>
                    <a target='_blank' href='https://github.com/Jayasuryaprakashreddy333/nxtwave' rel="noreferrer" style={{textDecoration:"none"}}>Git Repository</a>
                </div>
            </li>
        </ul>
   </div>
)

export default Portfolio