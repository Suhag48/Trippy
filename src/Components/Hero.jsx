import "./HeroStyle.css"

const Hero = (props) => {
  const {cName, HeroImg, title, text, url, buttonText, btnClass} = props

  return (
    <>
        <div className={cName}>
            <img src={HeroImg} alt="HeroImg" />
            <div className="hero-text">
                <h1>{title}</h1>
                <p>{text}</p>
                <a href={url} className={btnClass}>{buttonText}</a>
            </div>
        </div>
    </>
  )
}

export default Hero