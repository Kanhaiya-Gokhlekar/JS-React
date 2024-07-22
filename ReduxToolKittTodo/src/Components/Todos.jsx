import React from "react";
import { useSelector , useDispatch} from "react-redux";
import { removeTodo } from "../Features/Todo/TodoSlice";

function Todos(params) {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    return (
         <>
         <div>Todos</div>
         {todos.map((todo)=>(
            <li key={todo.id}>
                {todo.text}
                <button
                onClick={()=>dispatch(removeTodo(todo.id))}>x</button>
            </li>
         ))}
         </>
    )
}

export default Todos