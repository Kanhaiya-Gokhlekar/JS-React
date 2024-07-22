import React from "react";
import { useContext } from "react";
import { createContext } from "react";

export const ToDoContext = createContext({
    todos:[
        {
            id:1,
            todo:"Todo msg",
            completed:false,
        }
    ],

    addTodo: (todo)=>{},
    updatedTodo: (id,todo)=>{},
    deleteTodo: (id)=>{},
    toggleComplete: (id)=>{}
})

export const usTodo =()=>{
    return useContext(ToDoContext)
}

export const TodoProvider = ToDoContext.Provider