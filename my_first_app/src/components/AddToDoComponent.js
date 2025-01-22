
import { useDispatch} from "react-redux";
import {addToDoAction} from '../Redux/actions'
import { useState } from "react";

const AddToDoComponent = ()=>{
    const [start,setStart] = useState('');
    const [finish,setFinish] = useState('');
    const [id,setId] = useState('');
    const [priority,setPriority] = useState('');

    const dispatch = useDispatch();
    return (
        <>
        <form>
        <h2 className="label-wrapper">
          <label>What needs to be done?</label>
        </h2>
        <input type="text" id="new-todo-name"      onBlur={(e) => setId(e.target.value)} />id
        <input type="text" id="new-todo-start"     onBlur={(e) => setStart(e.target.value)}/>start
        <input type="text" id="new-todo-finish"    onBlur={(e) => setFinish(e.target.value)}/>finish
        <input type="text" id="new-todo-priority"  onBlur={(e) => setPriority(e.target.value)}/>priority
        </form>
        <>
        <button type="submit" onClick={()=>dispatch(addToDoAction({start:start,finish:finish,id:id,priority:priority}))}>
            Add😵
        </button>
        </>

        </>

    )
}
export default AddToDoComponent;