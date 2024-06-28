import styles from "../Login/login.module.scss";
import { useForm } from "react-hook-form";
import { LoginProps } from "../Login/login.types";
import { useEffect, useState } from "react";
import axios from "axios";
import authAxios from "../../services/AxiosInstance";

interface FormData {
  username: string;
  password: string;
}

export default function SignUp(props: LoginProps) {
  const [signupdata, setSignupdata] = useState<FormData[]>([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const setLogindata = async (formData: FormData) => {
    try {
      const { data } = await authAxios.post<FormData[]>(
        "/auth/register",
        formData,
       
      );
      console.log(data);
      setSignupdata(data);
      props.onLogin('login')
    } catch (error: any) {
      console.log(error.message);
    }
  };
  const onSubmit = (formdata: FormData) => {
  console.log(formdata);
    setLogindata(formdata);
   
  };

  return (
    <div className={styles.Login}>
      <form className={styles.Form} onSubmit={handleSubmit(onSubmit)}>
        <h1>Signup as a New User</h1>
        <div className={styles.Field}>
          <label>UserName</label>
          <input placeholder="enter your username" {...register("username")} />
        </div>
        <div className={styles.Field}>
          <label>Password</label>
          <input
            type="password"
            placeholder="enter your password"
            {...register("password")}
          />
        </div>

        <div className={styles.Btns}>
          <button type="submit" className={styles.LoginBtn} >
            SignUp
          </button>
        </div>
      </form>
    </div>
  );
}
