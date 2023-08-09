import "./DestinationStyle.css"

const DestinationData = (props) => {
    return(
        <div className={props.cName}>
                <div className="dest-text">
                    <h2>{props.heading}</h2>
                    <p>{props.text}</p>
                </div>
                <div className="dest-img">
                    <img src={props.Pic1} alt="img" />
                    <img src={props.Pic2} alt="img2" />
                </div>
            </div>
    )
}
export default DestinationData