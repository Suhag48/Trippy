import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Destination from "../Components/Destination";
import RecentTrips from "../Components/RecentTrips";

import Img from "../assets/pic1.png"
import Footer from "../Components/Footer";

const Home = () => {
    return(
        <div>
            <Navbar /> 
            <Hero
                cName="hero"
                HeroImg={Img}
                title="Your Journey Your Story"
                text="Choose Your Favourite Destination."
                buttonText="Travel Plan"
                url="/"
                btnClass="show"
            />
            <Destination />
            <RecentTrips />
            <Footer />
        </div>
    )
}

export default Home;