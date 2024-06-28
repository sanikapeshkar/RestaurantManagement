import styles from "./FeedbackCard.module.scss"; 
import { FeedbackCardProps } from "./FeedbackCard.types.ts" 
import StarRating from "../ui/StarRating/Starrating.tsx";
 
const FeedbackCard = ({id,rating,feedback,restaurant}: FeedbackCardProps) => { 

    return <div className={styles.FeedbackCard}>
        <img src="" alt="restaurnat img here
    "></img>
        <h3>{restaurant}</h3>
        <h4>Pune, Maharashtra</h4>
        <div>Rating <StarRating size={30}/></div>
         <p>{feedback} Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, nostrum.</p>
    <div className={styles.BtnContainer}>
        <button>Edit</button>
        <button>Delete</button>
    </div>
    </div>
} 
 
export default FeedbackCard 
