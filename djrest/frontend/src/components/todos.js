import React from 'react'

const TodoItem = ({todo}) => {
   return (
       <tr>
           <td>{todo.text}</td>
           <td>{todo.user_create}</td>
           <td>{todo.time_creation}</td>
           <td>{todo.project}</td>
       </tr>
   )
}

const TodoList = ({todos}) => {
   return (
       <table>
          <th>text</th>
          <th>user_create</th>
          <th>time_creation</th>
          <th>project</th>
          {todos.map((todo) => <TodoItem todo={todo} />)}
       </table>
   )
}

export default TodoList;