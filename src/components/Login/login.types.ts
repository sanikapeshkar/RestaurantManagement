export interface FormData {
    username: string;
    email: string;
    password: string;
  }


  export interface LoginProps{
    onLogin:(page:string)=>void;
  }