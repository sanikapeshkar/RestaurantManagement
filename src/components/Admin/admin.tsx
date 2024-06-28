import { RESDATA, RESTAURANTS } from "../../../resdata"
import styles from './admin.module.scss';
import { USERS, FEEDBACKS, Feedback } from "../../../userdata";
import ResList from "../ResList/ResList";
import UserList from "../UserList/UserList";

interface AdminProps{
    resdata:RESDATA[];
    feedbackdata:Feedback[];

}

export default function Admin({resdata,feedbackdata}:AdminProps){


    return(
    <div className={styles.AdminMain}>
    <h2> ADMIN DASHBOARD</h2>
    <div className={styles.Admin}>
       <div className={styles.Restaurant}><h2>Restaurant List</h2> <ResList  resdata={RESTAURANTS} feedbackdata={FEEDBACKS}/></div>
       <div className={styles.Users}> <h2>Users List</h2><UserList resdata={RESTAURANTS} userdata={USERS} feedbackdata={FEEDBACKS}/></div>
    </div>
    
    </div>)
}