
 
 import ImgComponent from "../ImgComponents";
 import a from "../../imgs/img.JPG";
 import f from "../../imgs/thefounders.JPG"
 import '../../i18n'
 import { useTranslation } from 'react-i18next';
 
 function About(){
  const { t } = useTranslation();
  return( 
    <>  
       <h2>{t("descriptionImgEli")}</h2>
       <ImgComponent path ={a}/>
       <h3>{t("descriptionImgFounders")}</h3>
       <h5>{t("aboutDescription")}</h5>
       <ImgComponent path={f}></ImgComponent>
    </>
  );
}

 export default About;