import { removeToDoAction } from '../Redux/actions';
import AddToDoComponent from './AddToDoComponent';
import { useSelector, useDispatch } from 'react-redux';

const Todos = () => {
const todo = useSelector((state) => state.todos || []); 
  const dispatch = useDispatch();
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
        onClick={() => dispatch(removeToDoAction(element))}
      >
        Remove✌️😊
      </button>
    </div>
  ));
  return (
    <div className="container">
      <AddToDoComponent />
      <div>{tableRowsTodo}</div> 
    </div>
  );
};

export default Todos;

