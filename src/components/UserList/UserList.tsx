import styles from "./UserList.module.scss"; 
import { UserListProps } from "./UserList.types.ts" 

const UserList = ({ resdata, userdata, feedbackdata }: UserListProps) => { 
    return (
        <div className={styles.UserList}>
            {userdata.map((user) => (
                <div className={styles.UserEach} key={user.userid}>
                    <h2><span>{user.userid}</span>  {user.username}</h2>
                    <ul className={styles.FeedbackList}>
                        {feedbackdata
                            .filter((feedback) => feedback.userid === user.userid)
                            .map((feedback) => {
                                const restaurant = resdata.find(res => res.resid === feedback.resid);
                                return (
                                    <li className={styles.FeedbackEach} key={feedback.userid}>
                                        <strong>{restaurant ? restaurant.resname : "Unknown Restaurant"}</strong>: {feedback.feedbackText}

                                        <button>Edit Feedback</button>
                                    </li>
                                );
                            })}
                    </ul>
                    <button>Delete User</button>
                </div>
            ))}
        </div>
    );
}

export default UserList;
