import { RESDATA } from "../../../resdata";

export interface ResDashboardProps{
    resdata:RESDATA[]
onclick:(page:string)=>void;
handleselected:(id:number)=>void;
}