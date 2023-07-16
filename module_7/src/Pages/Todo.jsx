import Todolist from "../Components/todo/Todolist";
import todolist from "../data/todolist.js";
const Todo = () => {
    return (
        <>
        <div  className="flex flex-wrap 
        justify-between mx-auto my-5" >
 
            <div className='grid grid-cols-3'>
            <div className="form-group">
            <textarea className="textarea textarea-bordered form-control w-full h-[200px]" placeholder="Todo" onClick={(e)=>e.target.value}></textarea>
            <button className="btn  rounded-0 btn-primary mt-2 float-right">Add Todo</button>
        
            </div>
            <div className='grid grid-cols-6'>
         
                <Todolist data={todolist} />
            </div>
            </div>
        </div>
        </>
    );
};

export default Todo;