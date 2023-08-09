import Navbar from "../Components/Navbar"
import Hero from "../Components/Hero"
import AboutUs from "../Components/AboutUs"
import Footer from "../Components/Footer"
import Img from "../assets/pic2.png"

const About = () => {
  return (
    <div>
        <Navbar />
        <Hero
            cName="about-hero"
            HeroImg={Img}
            title="About"
            btnClass="hide"
         />
         <AboutUs />
         <Footer />
    </div>
  )
}

export default About