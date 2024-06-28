import { RESDATA } from "../../../resdata";
import { Feedback, User } from "../../../userdata";

export interface UserProps{
    onLogin:(page:string)=>void;
userdata:User[];
feedbackdata:Feedback[];
resdata:RESDATA[];
}