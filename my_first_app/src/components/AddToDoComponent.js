import { useDispatch , useSelector} from "react-redux";
import {addToDoAction, countIdAction} from '../Redux/actions'
import { useState } from "react";

const AddToDoComponent = () => {
    const [start,setStart] = useState('');
    const [finish,setFinish] = useState('');
    const [name,setName] = useState('');
    const [priority,setPriority] = useState('');
    const id = useSelector(state => state.id);
    const dispatch = useDispatch();
    return (
        <>
        <form>
        <h2 className="label-wrapper">
          <label>What needs to be done?</label>
        </h2>
        <input type="text" id="new-todo-name"  placeholder="name"           onBlur={(e) => setName(e.target.value)} />
        <input type="number" id="new-todo-start"    placeholder="start"     onBlur={(e) => setStart(e.target.value)}/>
        <input type="number" id="new-todo-finish"   placeholder="finish"    onBlur={(e) => setFinish(e.target.value)}/>
        <input type="number" id="new-todo-priority" placeholder="priority"  onBlur={(e) => setPriority(e.target.value)}/>
        </form>
        <>
        <button type="submit" onClick={()=>(dispatch(addToDoAction({start:start,finish:finish,name:name,priority:priority,id:id}),dispatch(countIdAction())))}>
            Add😵
        </button>
        </>
        </>
    )
}
export default AddToDoComponent;