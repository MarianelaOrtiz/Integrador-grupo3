import  {useState} from "react";
import  './formTodo.css';

const FormTodo = (props) => {
    const { handleAddItem } = props;

    const [description, setDescription] = useState("");

    const handleSubmit = e => {
        e.preventDefault();

    handleAddItem({
          done: false,
          id: (+new Date()).toString(),
          description
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
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <button
                        className="inputBoton"
                        disabled={description ? "" : "disabled"}
                    >
                        Add
                    </button>
                    </div>
                </div>
            </form>
        );
}

export default FormTodo
