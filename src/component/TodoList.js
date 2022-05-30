import React from "react";
import styled from "styled-components";

const TodoListBlock = styled.div`
    flex : 1;
    padding : 20px 32px;
    padding-bottom : 48px;
    overflow-y : auto;
    background: #64aaff;
    border-radius : 12px;

    `


function TodoList() {
    return <TodoListBlock>To Do List</TodoListBlock>
}
export default TodoList;