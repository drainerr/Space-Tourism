import Header from "../header";
import "./home.css"
import HomeMain from "./home-main";
const Home = () => {
    return ( 
        <div className="home-container">
            <Header />
            <HomeMain />
        </div>
     );
}
 
export default Home;