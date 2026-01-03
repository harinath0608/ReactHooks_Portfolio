// import React, { useState } from 'react'

// const TodoList = () => {

//     const [task, setTask] = useState("")
//     const [todo, setTodo] = useState([])

//     const addTodo = () => {
//         if (task.trim() === "") return;
//         setTodo([...todo, task])
//         setTask("");
//     }

//     const deleteTodo = (index) => {
//         const updatedTodos = todo.filter((_, i) => i != index);
//         setTodo(updatedTodos)
//     }

//     return (
//         <>

//             <input type="text" value={task} onChange={(e) => setTask(e.target.value)}
//                 placeholder='Enter Task' />

//             <button onClick={addTodo}> Add </button>
//             <ul>
//                 {todo.map((todo, index) => (
//                     <li key={index}> {todo} <button onClick={() => deleteTodo(index)}> Delete </button> </li>

//                 ))}

//             </ul>

//         </>
//     )
// }

// export default TodoList


// import React, { useState } from 'react'

// const TodoList = () => {

//     const [task,setTask] = useState("")
//     const [todo,setTodo] = useState([])

//     const addTodo = () => {
//         if(task.trim() === "") return ;
//         setTodo([...todo,task]);
//         setTask("")
//     }

//     const deleteTodo = (index) => {
//         const updatedTodos = todo.filter((_ , i) => i != index )
//         setTodo(updatedTodos)
//     }

//   return (
//     <div>

//         <input type="text" value={task} placeholder='Enter a Task' onChange={(e)=> setTask(e.target.value)} />

//         <button onClick={addTodo}> Add </button>

//         <ul>
//             {todo.map((item,index) => (
//                 <li key={index}> {item} <button onClick={()=> deleteTodo(index)}> Del </button>  </li>
//             ))}
//         </ul>
      
//     </div>
//   )
// }

// export default TodoList


// import React, { useState } from 'react'

// const TodoList = () => {

//     const [task, setTask] = useState("")
//     const [todo,setTodo] = useState([])

//     const addTodo = () => {
//         if (task.trim() === "" ) return ;
//         setTodo([...todo,task]);
//         setTask("")
//     }

//     const deleteTask = (index) => {
//         const updatedTodos = todo.filter((_ , i) => i != index)
//         setTodo(updatedTodos)
//     }

//   return (
//     <>
//      <input type="text" 
//      value={task} 
//      placeholder='Enter a Task' 
//      onChange={(e)=> setTask(e.target.value)} /> 
//      <button onClick={addTodo}> Add </button>

//      <ul>
//         {todo.map((item,index) => (
//             <li key={index}> {item} <button onClick={()=> deleteTask(index)}> Del </button> </li>     
//         ))}
//      </ul>
//     </>
//   )
// }

// export default TodoList
import React, { useEffect, useState } from "react";

const TodoList = () => {

  const [task, setTask] = useState("");

  const [todo, setTodo] = useState(() => {
    const stored = localStorage.getItem("todos");
    return stored ? JSON.parse(stored) : [];
  });

  const [editIndex, setEditIndex] = useState(null);
  const [editTask, setEditTask] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo));
  }, [todo]);

  const addTodo = () => {
    if (task.trim() === "") return;
    setTodo([...todo, task]);
    setTask("");
  };

  const deleteTodo = (index) => {
    setTodo(todo.filter((_, i) => i !== index));
  };

  const edittodo = (index) => {
    setEditIndex(index);
    setEditTask(todo[index]);
  };

  const saveTodo = (index) => {
    const updatedTodos = [...todo];
    updatedTodos[index] = editTask;
    setTodo(updatedTodos);
    setEditIndex(null);
    setEditTask("");
  };

  return (
    <div>
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a Task"
      />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todo.map((item, index) => (
          <li key={index}>
            {editIndex === index ? (
              <>
                <input
                  value={editTask}
                  onChange={(e) => setEditTask(e.target.value)}
                />
                <button onClick={() => saveTodo(index)}>Save</button>
              </>
            ) : (
              <>
                {item}
                <button onClick={() => edittodo(index)}>Edit</button>
                <button onClick={() => deleteTodo(index)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
