import { useState, useEffect } from "react";
import { AppUI } from "./AppUI";
import { TodoProvider } from "../TodoContext";

// const defaulfTodos = [
//   { text: "Cortar cebolla", completed: true },
//   { text: "Tomar el curso react", completed: false },
//   { text: "Llorar con la llorona", completed: false },
// ];

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
