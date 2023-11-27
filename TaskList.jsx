import Checkbox from "./Checkbox";
import { RiDeleteBin6Line } from "react-icons/ri";
import './TaskList.css'

const TaskList = props => {
    const { list, setList } = props; 

    const onChangeStatus = e => {
        const { name, checked } = e.target;

        const updateList = list.map(item => ({
          ...item,
          done: item.id === name ? checked : item.done
        }));
        setList(updateList);
      };

      const onClickRemoveItem = (e) => {
        const updateList = list.filter(item => !item.done);
        setList(updateList);
      };    

    const chk = list.map(item => (
        <Checkbox key={item.id} data={item}  onChange={onChangeStatus}/>
      ));

	return (
        <div className="todoList">
       
        {list.length ? chk : "No tasks"}
        
        {list.length ? (
          <div className="done">
            <button className="botonDone" onClick={onClickRemoveItem}>
            <RiDeleteBin6Line />
              Delete all done
            
            </button>
          </div>
        ) : null}
      </div>
    );

};

export default TaskList;