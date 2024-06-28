
interface MainProps{
    renderPage:(page:string)=>void
    currentPage:string;
}

export default function Main(props:MainProps){
    


    return <>{props.renderPage(props.currentPage)}</>
}