import {removeToDoAction} from '../Redux/actions'
import AddToDoComponent from './AddToDoComponent';
import { useSelector } from 'react-redux';
export const todos = () =>{
    const todo = useSelector((state)=>state.todos);
    const tableRowsTodo = todo.map((element) => {
        return (
            <>
            <ul className="items">
                <li>{element.id}</li>
                <li>{element.start}</li>
                <li>{element.finish}</li>
                <li>{element.priority}</li>
            </ul>
            <button type="submit" onClick={()=>dispatch(removeToDoAction({element}))}>Remove✌️😊</button>
            </>
        );
    });
    <div className="container">
        <AddToDoComponent></AddToDoComponent>
        <tbody>{tableRowsTodo}</tbody>
    </div>
}
