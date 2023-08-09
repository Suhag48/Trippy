import Navbar from "../Components/Navbar"
import Hero from "../Components/Hero"
import RecentTrips from "../Components/RecentTrips";
import Footer from "../Components/Footer";
import Img from "../assets/pic3.jpg"

const Service = () => {
  return (
    <div>
        <Navbar />
        <Hero
            cName="about-hero"
            HeroImg={Img}
            title="Service"
            btnClass="hide"
         />
         <RecentTrips />
         <Footer />
    </div>
  )
}

export default Service