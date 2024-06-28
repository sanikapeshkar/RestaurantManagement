import { useState } from "react";
import { FaStar } from "react-icons/fa";
import styles from "./star.module.scss";
const StarRating = (prop:any) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

function handleClick(getCurrIndex: number) {
    console.log("click");
    setRating(getCurrIndex);
  }
  function handleMouseEnter(getCurrIndex: number) {
    setHover(getCurrIndex);
  }
  function handleMouseLeave() {
    setHover(rating);
  }

  return (
    <div className={styles.Star}>

      {[...Array(prop.rating)].map((_, index) => {
        // index += 1;
        return (
          <FaStar
            key={index}
            className={
              index <= (hover || rating)
                ? `${styles.active}`
                : `${styles.inactive}`
            }
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
            size={prop.size}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
