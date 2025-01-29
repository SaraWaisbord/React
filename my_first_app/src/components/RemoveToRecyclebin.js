

import { removeToDoAction,restoreToDoAction,removeFromBinAction  } from '../Redux/actions';
import AddToDoComponent from './AddToDoComponent';
import { useSelector, useDispatch } from 'react-redux';

const RemoveFromBin = () => {
const todo = useSelector((state) => state.recycleBin.todos||[]); 
  const dispatch = useDispatch();
  console.log(todo);
    const tableRowsTodo = todo.map((element) => (
    <div key={element.id}> 
      <ul className="items">
      <li><strong>Name:</strong> {element.name}</li>
        <li><strong>Start:</strong> {element.start}</li>
        <li><strong>Finish:</strong> {element.finish}</li>
        <li><strong>Priority:</strong> {element.priority}</li>
      </ul>
      <button
        type="submit"
        onClick={() => dispatch(removeFromBinAction(element))}
      >
        Remove✌️😊😍
      </button>

      <button
        type="submit"
        onClick={() => dispatch(restoreToDoAction(element))}
      >
        Restore✌️😊🤣🤣🤣🤣
      </button>
    </div>
  ));
  return (
    <>
    <div className="container">
      <h1>my bin</h1>
      <div>{tableRowsTodo}</div> 
    </div></>
  );
};

export default RemoveFromBin;

