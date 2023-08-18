import React from 'react'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import CheckIcon from '@mui/icons-material/Check';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import InsightsIcon from '@mui/icons-material/Insights';
import { IMAGES } from '../../constants';
import Navbar from '../../components/navabar/Navbar'
import "./home.css"

const Home = () => {
    return (
        <div className='color'>
            <Navbar />
            <div className='logo-wrapper'>
                <img className="background-image" src={IMAGES.picture} alt="Socimo" />
                <span className="overlay-text">Discover Your <a href='https://legacy.reactjs.org/docs/getting-started.html'>Scientific</a> Knowledge</span>
                <p className='overlay-paragraph'>and stay connected with Sci|</p>
                <button className='overlay-button'>Join now</button>
            </div>
            <div className='container'>
                <div className='style'>
                    <div style={{ display: 'flex' }}>
                        <CheckIcon style={{ color: 'blue' }} />
                    </div>
                    <h1 className='text'>Learn from industry experts</h1>
                    <p className='paragraph'>Share your research, collaborate with your peers, and get the support you need to advance your career</p>
                </div>

                <div className='style'>
                    <div style={{ display: 'flex' }}>
                        <PlayCircleIcon style={{ color: 'blue' }} />
                    </div>
                    <h1 className='text'>Find video Course of any topic</h1>
                    <p className='paragraph'>Share your research, collaborate with your peers, and get the support you need to advance your career</p>
                </div>

                <div className='style'>
                    <div style={{ display: 'flex' }}>
                        <AccessTimeIcon style={{ color: 'blue' }} />
                    </div>
                    <h1 className='text'>Go at your own pace</h1>
                    <p className='paragraph'>Share your research, collaborate with your peers, and get the support you need to advance your career</p>
                </div>
            </div>
            <div className='design'>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img className="" src={IMAGES.Researchers} alt="Socimo" />
                    <h1 className='number'>599</h1>
                    <p className='paragraph'>Researchers</p>
                </div>


                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img className="" src={IMAGES.Registereduser} alt="Socimo" />
                    <h1 className='number'>897</h1>
                    <p className='paragraph'>Registered user</p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img className="" src={IMAGES.ActivePeople} alt="Socimo" />
                    <h1 className='number'>556</h1>
                    <p className='paragraph'>Active People</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img className="" src={IMAGES.PostPublished} alt="Socimo" />
                    <h1 className='number'>15</h1>
                    <p className='paragraph'>Post Published</p>
                </div>

            </div>
            <div className='content'>
                <div className='a'>
                    <div className="icon-container">
                        <TipsAndUpdatesIcon style={{ color: 'rgb(8,141,205)' }} />
                    </div>
                    <h1 className='b'>Measure Your scientific impact</h1>
                    <p style={{ color: '#a1a6ad', fontSize: '18px' }}>
                        Get in-depth stats on who's been reading your work and keep track of your citations.
                    </p>
                </div>
                <div>
                    <img className="contentPic" src={IMAGES.researchAvatar} alt="researchAvatar" />
                </div>
            </div>
            <div className='content'>
                <div>
                    <img className="researchPeople" src={IMAGES.researchPeople} alt="researchPeople" />
                </div>
                <div className='a'>
                    <div className="icon-container">
                        <InsightsIcon style={{ color: 'rgb(8,141,205)' }} />
                    </div>

                    <h1 className='b'>Connect with Your scientific Community</h1>
                    <div className='adjust'>
                        <button className="custom-button" >
                            <a className="button" href="">Engineering</a>
                        </button>
                        <button className="custom-button" >
                            <a className="button" href="">mathamatic</a>
                        </button>
                        <button className="custom-button" >
                            <a className="button" href="">biology</a>
                        </button>
                        <button className="custom-button" >
                            <a className="button" href="">computer science</a>
                        </button>
                        <button className="custom-button" >
                            <a className="button" href="">climate</a>
                        </button>
                        <button className="custom-button" >
                            <a className="button" href="">medicine</a>
                        </button>
                        <button className="custom-button" >
                            <a className="button" href="">Physics</a>
                        </button>
                        <button className="custom-button" >
                            <a className="button" href="">sociology</a>
                        </button>
                        <button className="custom-button" >
                            <a className="button" href="">chemistry</a>
                        </button>
                        <button className="custom-button" >
                            <a className="button" href="">astrophysics</a>
                        </button>
                    </div>
                </div>
            </div>
            <div className='staffcontent'>
                <img className="staff" src={IMAGES.staff} alt="Socimo" />
                <div className='x'>
                <p className='overlay-staff'>ADVANCE YOUR RESEARCH</p>
                <button className='overlay-staffbutton'>Join now</button>
                </div>
            </div>
        </div>
    )
}

export default Home