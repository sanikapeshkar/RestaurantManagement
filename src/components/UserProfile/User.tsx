import FeedbackCard from "../FeedbackCard/FeedbackCard.tsx";
import styles from "./User.module.scss"; 
import { UserProps } from "./User.types.ts" 
 
const User = ({ onLogin,userdata, resdata, feedbackdata }: UserProps) => { 
    const user = userdata[0];

    const userFeedbackRestaurants = feedbackdata
        .filter(feedback => feedback.userid === user.userid)
        .map(feedback => {
            const restaurant = resdata.find(res => res.resid === feedback.resid);
            return {
                restaurant: restaurant ? restaurant.resname : "Unknown Restaurant",
                feedback: feedback.feedbackText 
            };
        });

   

    return (
        <div className={styles.User}>
            <div className={styles.Profile}>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg" alt="profile image here" />
                <div className={styles.UserInfo}>
                    <h3>{user.username}</h3>
                    <h6>######{user.userid}</h6>
                    <p>From: Pune Maharashtra</p>
                </div>
            </div>
            <div className={styles.Feedback}>
                {userFeedbackRestaurants.map((item, index) => (
                    <FeedbackCard key={index} id={index} rating={3} feedback={item.feedback} restaurant={item.restaurant} />
                ))}
                   <button onClick={()=>onLogin('login')}>Sign Out</button>
            </div>

         
        </div>
    );
} 
 
export default User;
