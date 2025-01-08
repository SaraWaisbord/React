
 
 import ImgComponent from "../components/ImgComponents";
 import a from "../imgs/img.JPG";
 import f from "../imgs/thefounders.JPG"
 function About(){
    return( 
      <>  
      <br></br>
         <h2>Elijah – "CEO of Red Trucks and Revolutionary Ideas"</h2>
         <ImgComponent path ={a}/>
         <h3>Three founders, a million ideas</h3>
         <h5>Elijah thinks, Noa codes, and Ayelet is already drinking espresso.</h5>
         <ImgComponent path={f}></ImgComponent>


      </>
    );
 }

 export default About;