import { useEffect, useRef, useState } from "react";

const MessageComponent = () =>{

    const [messageArray,setMessageArray] = useState([]);
    const [m,setMessage]=useState('');
    const useRefMsg = useRef(null);
    useEffect(()=>{
        useRefMsg.current.scrollIntoView({ behavior: "smooth" });
    },[messageArray]);
    return<>
    <div ref={useRefMsg}>
    write your message here:
        <input onBlur={(e)=>{setMessage(e.target.value);e.target.value = ''}}/>
        <button onClick={()=>{setMessageArray([...messageArray,m])}}>שלח</button>
        {messageArray.map((msg)=>(<h1>{msg}</h1>))}
    </div>
    </>
}
export default MessageComponent;