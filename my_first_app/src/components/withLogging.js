

function WithLoggingC(Component){
    return ()=>{
    console.log("HOC is called");
    return(
        <Component/>
    )
}
}
export default WithLoggingC;