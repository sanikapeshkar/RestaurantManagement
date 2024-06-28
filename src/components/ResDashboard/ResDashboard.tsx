import ResCard from "../ResCard/ResCard.tsx";
import styles from "./ResDashboard.module.scss";
import { ResDashboardProps } from "./ResDashboard.types.ts";
import { RESDATA, RESTAURANTS } from "../../../resdata.ts";
import { useEffect, useState } from "react";
import axios from "axios";


const ResDashboard = ({resdata,onclick,handleselected}: ResDashboardProps) => {

 
  return (
    <div className={styles.ResDashboard}>
      <h2>Best Restaurants In the town </h2>
      <div className={styles.dashboardMain} >
        {resdata.map((restaurant: any) => {
          return (
            <ResCard
              resid={restaurant.resid}
              resname={restaurant.resname}
              resimg={restaurant.resimg}
              resdesc={restaurant.resdesc}
              handleselected={handleselected}
              handleclick={onclick}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ResDashboard;
