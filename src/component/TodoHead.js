import React from "react";
import styled from 'styled-components';


const TodoHeadBlock = styled.div`
    padding-top : 10px;
    padding-left : 32px;
    padding-right : 42px;
    padding-bottom : 24px;
    border-bottom : 1px solid #e9ecef;
    
    h1{
        margin = 0;
        font-size:36px;
        color : #000000
    }
    .work{
        margin-top : 4px;
        color :  #93daff;
        font-weight :bold;
        font-size : 30px;
        border-radius : 16px;
    
    }
    .tasks-left {
        color : #000000;
        font-size : 21px;
        font - weight : bold;
    }
    `;



function TodoHead(){
    return(
        <TodoHeadBlock>
        <h1>To Do List</h1>
        <div className="work">해야할 일</div>
        <div className="tasks-left">2022.05.30</div>
        </TodoHeadBlock>
    );
}
export default TodoHead;