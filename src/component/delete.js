import {useCallback, useRef,useState} from "react";
import TodoHead from "./TodoHead";
import TodoList from "./TodoList";

const Delete = () => {
    const [todos, setTodos] = useState([
        {
            id: 1,
            text : 'react',
            checked : true,
        },
    ]);
    const nextId = useRef(2);
    
    const oninsert = useCallback(text => {
        const todo={
            id:nextId.current,
            text,
            checked : false,
        };
        setTodos(todos.concat(todo));
        nextId.current+=1;
    },
        [todos],
    );
    return(
        <input TodoList= "할 일" value={value} onChange={onchange} />
        <button type="submit" >
            
        </button>
    )

}