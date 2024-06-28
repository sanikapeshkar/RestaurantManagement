  import StarRating from "../ui/StarRating/Starrating.tsx";
  import styles from "./ResCard.module.scss";
  import { ResCardProps } from "./ResCard.types.ts";





  const ResCard = (props: ResCardProps) => {
    return (
      <div className={styles.Main} onClick={()=>{props.handleclick('givefeedback');   props.handleselected(props.resid)}}>
        <img src={props.resimg} alt="something"></img>
        <div className={styles.CardContent}>
          <h3>{props.resname}</h3>
          <p>{props.resdesc}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          </p>
          <div className={styles.Rating}>Rating :<StarRating/></div>

        </div>
      </div>
    );
  };

  export default ResCard;
