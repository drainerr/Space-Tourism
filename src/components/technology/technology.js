import Header from "../header";
import './technology.css'
import defaultImage from '../../assets/technology/image-launch-vehicle-portrait.jpg'
import Data from '../../assets/data.json'
import fImagePortrait from '../../assets/technology/image-launch-vehicle-portrait.jpg'
import fImageLandscape from '../../assets/technology/image-launch-vehicle-landscape.jpg'
import sImagePortrait from '../../assets/technology/image-space-capsule-portrait.jpg'
import sImageLanscape from '../../assets/technology/image-space-capsule-landscape.jpg'
import tImagePortrait from '../../assets/technology/image-spaceport-portrait.jpg'
import tImageLandscape from '../../assets/technology/image-spaceport-landscape.jpg'

const Technology = () => {
    const onActive = (id) => {   
        const buttons = document.querySelectorAll('.button-num')
        const {name,description} = Data.technology[id]

        buttons.forEach(e => {
            e.style.backgroundColor = 'transparent'
            e.style.color = 'white'
        })
        buttons[id].style.backgroundColor = 'white'
        buttons[id].style.color = 'black'

        document.querySelector('.tech-h1').innerText = name.toUpperCase()
        document.querySelector('.tech-p').innerText = description
        const img = document.querySelector('.tech-img')
        const width = window.innerWidth
        if(width > 768){
            if(id === 0){
                img.src = fImagePortrait;
            } 
            if(id === 1){
                img.src = sImagePortrait;
            } 
            if(id === 2){
                img.src = tImagePortrait;
            }
        } else {
            if(id === 0){
                img.src = fImageLandscape;
            } 
            if(id === 1){
                img.src = sImageLanscape;
            }
            if(id === 2){
                img.src = tImageLandscape;
            }
        }
    }

    return ( 
        <div className="technology">
            <Header/>
            <div className="technology-wrapper">
                <h2><span className="tech-num">03</span>SPACE LAUNCH 101</h2>
                <div className="technology-main">
                    <ul className='buttons'>
                        <li className="button-num" style={{backgroundColor: 'white',color:'black'}} onClick={()=> onActive(0)}>1</li>
                        <li className="button-num" onClick={()=> onActive(1)}>2</li>
                        <li className="button-num" onClick={()=> onActive(2)}>3</li>
                    </ul>
                    <div className='about-tech'>
                        <h4 className="tech-h4">THE TERMINOLOGY…</h4>
                        <h1 className="tech-h1">LAUNCH VEHICLE</h1>
                        <p className="tech-p">A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!</p>
                    </div>
                    <div className='img-container'>
                        <img className='tech-img' src={defaultImage} alt="technology"/>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Technology;