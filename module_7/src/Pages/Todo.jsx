import { useState } from "react";

const Todo = () => {
  const [todolist, setTodolist] = useState([]);

  const [todo, setTodo] = useState("");
  const [completedtodo, setcCompletedtodo] = useState([""]);

  const handleAddTodo = (todo) => {
    setTodolist((todolist) => [...todolist, todo]);
  };
  const handleDeleteTask = (taskIndex) => {
    setTodolist(todolist.filter((_, index) => index !== taskIndex));
  };

  const handleCompleteTask = (taskIndex) => {
    // alert(taskIndex)
    setcCompletedtodo((completedtodo) => [
      ...completedtodo,
      todolist[taskIndex],
    ]);
    setTodolist(todolist.filter((_, index) => index !== taskIndex));
  };

  function handleSubmit(e) {
    e.preventDefault();
    const id = crypto.randomUUID();

    const newTodo = {
      id,
      todo,
      date: new Date().toLocaleDateString(),
    };
    console.log(newTodo);
    handleAddTodo(newTodo);
    setTodo("");
  }
  return (
    <>
      <div className="my-5">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className=" ">
            <form onSubmit={handleSubmit}>
              <div className="form-group w-full">
                <textarea
                  required
                  name="todo"
                  className="textarea textarea-bordered form-control w-full h-[200px]"
                  placeholder="Todo"
                  onChange={(e) => setTodo(e.target.value)}
                  value={todo}
                ></textarea>
                <button
                  type="submit"
                  className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium mt-2 text-sm px-5 py-2.5 rounded-none text-center mr-2 mb-2 float-right"
                >
                  Add Todo
                </button>
              </div>
            </form>
          </div>

          <div className=" ">
            <div className="block rounded-lg bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
              <div className="border-b-2 text-xl border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
                Task List
              </div>
              <div className="p-6 pt-0">
                <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
                  {todolist.map((task, index) => (
                    <li className="pb-3 sm:pb-4" key={index}>
                      <div className="flex text-left space-x-4">
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            {task.date}
                          </p>
                          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            {task.todo}
                          </p>
                        </div>

                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                          <button
                            className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-none text-sm px-3 py-0  text-center mr-2 mb-2"
                            onClick={() => handleDeleteTask(index)}
                          >
                            Delete
                          </button>
                          <button
                            className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-none text-sm px-3 py-0  text-center mr-2 mb-2"
                            onClick={() => handleCompleteTask(index)}
                          >
                            Complete
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className=" ">
            <div className="block rounded-lg bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
              <div className="border-b-2 text-xl border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
                Completed Task
              </div>
              <div className="p-6 pt-0">
                <ul className="max-w-md divide-y-reverse divide-y  divide-gray-200 dark:divide-gray-700">
                  {completedtodo.map((task, index) => (
                    <li className="pb-0 pt-1 sm:pb-2" key={index}>
                      <div className="flex text-left space-x-4">
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            {task.date}
                          </p>
                          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            {task.todo}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
