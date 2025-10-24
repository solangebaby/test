import BookingSteps from "../organs/BookingSteps"
import Footer from "../organs/Footer"
import HeroSection from "../organs/HeroSection"
import NavBar from "../organs/NavBar"
import NewsLetter from "../organs/NewsLetter"
import Partners from "../organs/Partners"
import Services from "../organs/Services"
import Testimonials from "../organs/Testimonials"
import TopDestination from "../organs/TopDestination"


const Home = () => {
    return (
        <>
            <NavBar />
            <HeroSection />
            <Services />
            <TopDestination />
            <BookingSteps />
            <Testimonials />
            <Partners />
            <NewsLetter />
            {<Footer /> }
        </>
    )
}

export default Home