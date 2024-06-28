import Header from "./components/Header/Header";
import styles from "./App.module.scss";
import { useEffect, useState } from "react";
import Login from "./components/Login/Login";
import ResDashboard from "./components/ResDashboard/ResDashboard";
import User from "./components/UserProfile/User";
import Main from "./components/Main/main";
import ResPage from "./components/ResPage/ResPage";
import { RESDATA, RESTAURANTS } from "../resdata";
import { USERS, FEEDBACKS, Feedback } from "../userdata";
import Admin from "./components/Admin/admin";

import SignUp from "./components/Signup/signup";
import authAxios from "./services/AxiosInstance";

export default function App() {
  const [currentPage, setCurrentPage] = useState("login");
  const [seldata, setSeldata] = useState<RESDATA[]>(RESTAURANTS);
  const [ResData, setResdata] = useState<RESDATA[]>([]);
  const [FeedbackData, setFeedbackdata] = useState<Feedback[]>(FEEDBACKS);
  const getData = async (): Promise<void> => {
    try {
      const res = await authAxios.get<any[]>(
        "/restaurants",
      );

    setResdata(res.data);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const getFeedback = async (): Promise<void> => {
    try {
      const { data } = await authAxios.get<Feedback[]>(

        "/feedback",
        
      );

      setFeedbackdata(data);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getFeedback();
  }, []);

  // const handleselected = async (id:number): Promise<void> => {
  //   try {
  //     const res = await authAxios.get<any[]>(
  //       `/restaurants/${id}`,
  //     );
  //  console.log("Getting selected data")
  //   setSeldata(res.data);
  //   console.log(seldata)
  //   } catch (error: any) {
  //     console.log(error.message);
  //   }
  // };

  // useEffect(() => {
  //   getData();
  // }, []);
  const goToHomePage = (page: string) => {
    setCurrentPage(page);
  };

  function handleselected(id: number) {
    const selecteddata = RESTAURANTS.filter(f=>f.resid===id)
    setSeldata(selecteddata);
  }

  return (
    <div className={styles.App}>
      <Header renderPage={goToHomePage} />
      <Main renderPage={goToHomePage} currentPage={currentPage} />
      {currentPage === "login" && <Login onLogin={goToHomePage} />}
      {currentPage === "home" && (
        <ResDashboard
          resdata={ResData}
          onclick={goToHomePage}
          handleselected={handleselected}
        />
      )}
      {currentPage === "givefeedback" && (
        <ResPage selecteddata={seldata} feedbackdata={FeedbackData} />
      )}
     {currentPage === "signup" && (
        <SignUp onLogin={goToHomePage}/>
      )}
      {currentPage === "admin" && <Admin resdata={ResData} feedbackdata={FeedbackData}/>}
      {currentPage === "profile" && (
        <User
        onLogin={goToHomePage}
          userdata={USERS.filter((f) => f.userid === 1)}
          resdata={RESTAURANTS}
          feedbackdata={FEEDBACKS}
        />
      )}
    </div>
  );
}
