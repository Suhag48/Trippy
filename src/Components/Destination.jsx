import "./DestinationStyle.css"
import DestinationData from "./DestinationData"

import Pic1 from "../assets/pic1.jpg"
import Pic2 from "../assets/pic2.jpg"
import Pic3 from "../assets/pic3.jpg"
import Pic4 from "../assets/pic4.jpg"


const Destination = () => {
    return(
        <div className="destination">
            <h1>Popular Destinations</h1>
            <p className="entry-title">Tour gives you the opportunity to see a lot within a time frame.</p>

            <DestinationData 
                heading = "Tal Volcano, Batangas"
                text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit deleniti aliquam recusandae ducimus magni atque? Id obcaecati officia quaerat assumenda harum vero quibusdam minus temporibus alias, corporis totam, illum ullam. Ad cumque molestiae dolorem exercitationem repellendus assumenda quis laborum minima ea non sit adipisci, in veritatis laboriosam praesentium cupiditate nobis voluptate recusandae perspiciatis delectus maxime? Aperiam corrupti quo ab voluptates."
                Pic1 = {Pic1}
                Pic2 = {Pic2}
                cName = "first-dest"
            />

            <DestinationData 
                heading = "Mt. Daguldul, Batangas"
                text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit deleniti aliquam recusandae ducimus magni atque? Id obcaecati officia quaerat assumenda harum vero quibusdam minus temporibus alias, corporis totam, illum ullam. Ad cumque molestiae dolorem exercitationem repellendus assumenda quis laborum minima ea non sit adipisci, in veritatis laboriosam praesentium cupiditate nobis voluptate recusandae perspiciatis delectus maxime? Aperiam corrupti quo ab voluptates."
                Pic1 = {Pic3}
                Pic2 = {Pic4}
                cName = "first-dest-reverse"
            />

        </div>
    )
}
export default Destination