import React from 'react'
import "./TodoCounter.css"
import { useContext } from 'react';
import { TodoContext } from '../TodoContext';

function TodoCounter(){
  const {completedTodos,totalTodos} = useContext(TodoContext)
  return (
    <h2 className='TodoCounter'>Has completado {completedTodos} de {totalTodos} todos</h2>
  )
}

export { TodoCounter};