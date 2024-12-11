

function ImgComponent(props){
    return(
        <>
            <img src ={props.path} alt = "react's imgs:)" style={{width: 25+'%',height: 20+'%'}}></img>
        </>
    );
}

export default ImgComponent;