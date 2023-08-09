import Navbar from "../Components/Navbar"
import Hero from "../Components/Hero"
import ContactForm from "../Components/ContactForm"
import Footer from "../Components/Footer"
import Img from "../assets/pic1.jpg"

const Contact = () => {
  return (
    <div>
        <Navbar />
        <Hero
            cName="about-hero"
            HeroImg={Img}
            title="Contact"
            btnClass="hide"
         />
         <ContactForm />
         <Footer />
    </div>
  )
}

export default Contact