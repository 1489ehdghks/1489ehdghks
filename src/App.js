import React from "react";
import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./component/TodoTenplate";
import TodoHead from "./component/TodoHead";
import TodoList from "./component/TodoList";
import CreateMemo from "./component/CreateMemo";




const GlobalStyle =createGlobalStyle`
  body{
    background : #90AFFF ;
  }
  `;



function App(){
  return(
    <>
    <GlobalStyle />
      <TodoTemplate>
      <TodoHead/>
      <TodoList />
      </TodoTemplate>
      <CreateMemo></CreateMemo>
    </>
  );
}
export default App;