import styles from "./Header.module.scss";
import { HeaderProps } from "./Header.types";

export default function Header({renderPage}: HeaderProps) {
  return (
    <div className={styles.Header}>
      {<img src="" alt="logo here"></img>&&<h1 onClick={()=>renderPage('home')}>Foodify</h1>}
      <div className={styles.LoginBtns}>
       
        <img  className={styles.profile} src="https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg" alt="profile image" onClick={()=>renderPage('profile')} height={60}></img>
      </div>
    
    </div>
  );
}
