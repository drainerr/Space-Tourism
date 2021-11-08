import Header from '../header'
import MOON from '../../assets/destination/image-moon.webp'
import './destination.css'
import Data from '../../assets/data.json' 

const Destination = () => {
    const active = (e) => {
        let ul  = Object.values(document.querySelectorAll('.planet-links li'))    
        if(ul !== null && ul !== undefined){
            ul.forEach(el=>{
                el.style.borderBottomColor = 'transparent'
            })
            ul[e].style.borderBottomColor = "white"      
                    
            document.querySelector('.planet-img').src = Data.destinations[e].images.webp
            document.querySelector('.planet-name').innerText = Data.destinations[e].name
            document.querySelector('.planet-description').innerText = Data.destinations[e].description
            document.querySelector('#distance').innerText = Data.destinations[e].distance
            document.querySelector('#travel-time').innerText = Data.destinations[e].travel
        }
    }

    return ( 
        <div className="destination">
            <Header/>
                <div className="destination-main">
                    <h2><span className="destination-num">01</span>PICK YOUR DESTINATION</h2>
                    <div className="planet">
                        <div className="planet-image-div">
                            <img className = "planet-img" src={MOON} alt="Planet"></img>
                        </div>
                        <div className="about-planet">
                            <ul className='planet-links'>
                                <li className="planets" style={{borderBottomColor: 'white'}} onClick={()=> active(0)}>MOON</li>
                                <li className="planets" onClick={()=> active(1)}>MARS</li>
                                <li className="planets" onClick={()=> active(2)}>EUROPA</li>
                                <li className="planets" onClick={()=> active(3)}>TITAN</li>
                            </ul>
                            <h1 className ="planet-name">MOON</h1>
                            <p className = "planet-description">See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
                            <div className = "distance-time">
                                <div className="distance">
                                    <h4>AVG. DISTANCE</h4>
                                    <h3 id="distance">384,400 KM</h3>
                                </div>
                                <div className="time">
                                    <h4>Est. travel time</h4>
                                    <h3 id="travel-time">3 DAYS</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}
 
export default Destination;