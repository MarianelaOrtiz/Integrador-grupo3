import  {useState} from "react";
import { FaPlus } from "react-icons/fa6";
import  './formTodo.css';

const FormTodo = (props) => {
    const { handleAddItem } = props;

    const [description, setDescription] = useState("");

    const handleSubmit = e => {
        e.preventDefault();

    handleAddItem({
          done: false,
          id: (+new Date()).toString(),
          description,
          createAt: new Date ().toTimeString,
          
        });
        setDescription("");
    };
        return (
            <form onSubmit={handleSubmit}>
                <div className="formInput">
                    <div className="inputContainer ">
                    <input
                        type="text"
                        className="inputText"
                        placeholder="Task"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <button
                        className="inputBoton"
                        disabled={description ? "" : "disabled"}>
                        <FaPlus />
                        Add                       
                    </button>
                    </div>
                </div>
            </form>
        );
}

export default FormTodo
