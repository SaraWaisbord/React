import { ADD_TODO } from "../Redux/actionType";


const formMiddlware = store => next => action =>{
    if(action.type == ADD_TODO)
        if(action.payload.name==='' || action.payload.start===''||action.payload.finish===''||action.payload.priority===''){
            alert("אנא ממך😒😒 מלא את כל השדות🤗🥲😎")
            return;
        }

    next(action)

};
export default formMiddlware;