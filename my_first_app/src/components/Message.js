import { useEffect, useRef, useState } from "react";
import "../css/MessageComponent.css"
const MessageComponent = () =>{

    const [messageArray,setMessageArray] = useState([]);
    const [m,setMessage]=useState('');
    const useRefMsg = useRef(null);
    useEffect(()=>{

        useRefMsg.current.scrollIntoView({block: "end", inline: "nearest"});
    },[messageArray]);
    return<>
    <div ref={useRefMsg}>
    {messageArray.map((msg)=>(<h1>{msg}</h1>))}
        <input placeholder="your message..." onBlur={(e)=>{setMessage(e.target.value);e.target.value = ''}}/>
        <button onClick={()=>{setMessageArray([...messageArray,m])}}>שלח</button>

    </div>
    </>
}
export default MessageComponent;