import { Userfeedback } from "../../../resdata.ts";

export interface ResCardProps{
resid:number;
resimg:string,
resname:string,
resdesc:string,
feedback?:Userfeedback[]
handleselected:(id:number)=>void
handleclick:(page:string)=>void

}