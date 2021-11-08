import Header from "../header";
import './crew.css'
import defaultImg from "../../assets/crew/image-douglas-hurley.webp"
import Data from '../../assets/data.json' 

const Crew = () => {
    
    const active = (id) => {
        const crew = document.querySelectorAll('.dot')

        const {role,name,bio,images} = Data.crew[id];

        crew.forEach(e => e.style.backgroundColor = 'rgba(255,255,255,.17)')
        crew[id].style.backgroundColor = 'white';

        document.querySelector('.crew-h2').innerText = role;
        document.querySelector('.crew-h1').innerText = name;
        document.querySelector('.crew-p').innerText = bio;  
        document.querySelector('.crew-img').src = images.webp;
    }

    return (
        <div className="crew">
            <Header/>
            <div className="about-container">
                <h2><span className="crew-num">02</span>Meet your crew</h2>
                <div className="about-wrapper">
                    <div className="about">
                        <h2 className="crew-h2">COMMANDER</h2>
                        <h1 className="crew-h1">DOUGLAS HURLEY</h1>
                        <p className="crew-p">Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
                        <ul className='dots'>
                            <li className="dot" style={{backgroundColor: 'white'}} onClick={()=> active(0)}></li>
                            <li className="dot" onClick={()=> active(1)}></li>
                            <li className="dot" onClick={()=> active(2)}></li>
                            <li className="dot" onClick={()=> active(3)}></li>
                        </ul>
                    </div>
                    <div className="crew-img-container">
                        <img src={defaultImg} className="crew-img" alt="crew" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Crew;
