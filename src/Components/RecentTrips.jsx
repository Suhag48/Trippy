import "./RecentTripsStyle.css"
import { RecenTripsData } from "./RecentTripsData"

const RecentTrips = () => {
    return(
        <div className="Recent-trips">
            <h1>Recent Trips</h1>
            <p className="recent-para">You can discover unique Destinations using google maps</p>
            <div className="trips-card">
                {RecenTripsData.map((items, index) => {
                    const {Img, title, text} = items
                    return(
                        <div className="card" key={index}>
                            <div className="card-image">
                                <img src= {Img} alt="img" />
                            </div>
                            <h4> {title} </h4>
                            <p> {text} </p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default RecentTrips