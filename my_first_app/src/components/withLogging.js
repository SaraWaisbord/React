import { data } from "react-router-dom";


function WithLoggingC(Component){
    return ()=>{
    console.log(Date.now())
    return(
        <Component/>
    )
}
}
export default WithLoggingC;