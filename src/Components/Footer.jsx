import "./FooterStyle.css"

const Footer = () => {
    return(
        <>
            <div className="footer">
                <div className="up">
                    <div className="logo">
                        <h1>Trippy</h1>
                        <p>Choose Your Favourite Destination</p>
                    </div>
                    <div className="social">
                        <a href="/">
                            <i className="fa-brands fa-square-facebook"></i>
                        </a>
                        <a href="/">
                            <i className="fa-brands fa-square-twitter"></i>
                        </a>
                        <a href="/">
                            <i className="fa-brands fa-square-behance"></i>
                        </a>
                        <a href="/">
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                    </div>
                </div>
                <div className="bottom">
                    <div className="project">
                        <h2>Project</h2>
                        <div className="items">
                            <a href="/">Changelog</a>
                            <a href="/">Status</a>
                            <a href="/">License</a>
                            <a href="/">All Versions</a>
                        </div>
                    </div>

                    <div className="community">
                        <h2>Community</h2>
                        <div className="items">
                            <a href="/">Github</a>
                            <a href="/">Issues</a>
                            <a href="/">Project</a>
                            <a href="/">Twitter</a>
                        </div>
                    </div>

                    <div className="help">
                        <h2>Help</h2>
                        <div className="items">
                            <a href="/">Support</a>
                            <a href="/">Troubleshooting</a>
                            <a href="/">Contact Us</a>
                        </div>
                    </div>

                    <div className="Others">
                        <h2>Others</h2>
                        <div className="items">
                            <a href="/">Terms of Service</a>
                            <a href="/">Privacy Policy</a>
                            <a href="/">License</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer