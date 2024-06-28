import styles from "./login.module.scss";
import { useForm } from "react-hook-form";
import { LoginProps } from "./login.types";
import { useEffect, useState } from "react";
import authAxios from "../../services/AxiosInstance";
import axios from "axios";

interface FormData {
  username: string;
  password: string;
  accessToken: string;
}

export default function Login(props: LoginProps) {
  const [login, setLogin] = useState<FormData[]>([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const checkLogindata = async (formdata: FormData[]) => {
    try {
      const res = await axios.post(
        "https://d623-2401-4900-52be-c5f4-1995-8b38-5aa3-21a7.ngrok-free.app/auth/login",
        formdata,
        {
          headers: {
            "ngrok-skip-browser-warning": "skip-browser-warning",
           
          },
        }
      );
      const accessToken = res.data.accessToken;
      console.log("tokenn", accessToken);

      props.onLogin("home");
      console.log("akkahk", res.data);
    } catch (error: any) {
      console.log(error.message);
      alert("Invalid credentials");
    }
  };

  const onSubmit = async (formdata: FormData) => {
    if (formdata.username === "admin" && formdata.password === "password") {
      props.onLogin("admin");
    } else {
      await checkLogindata(formdata);
    }
  };

  return (
    <div className={styles.Login}>
      <form className={styles.Form} onSubmit={handleSubmit(onSubmit)}>
        <h1>Login as User</h1>
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
          <button type="submit" className={styles.LoginBtn}>
            Login
          </button>
          <button
            type="button"
            className={styles.LoginBtn}
            onClick={() => props.onLogin("signup")}
          >
            SignUp
          </button>
        </div>
      </form>
    </div>
  );
}
