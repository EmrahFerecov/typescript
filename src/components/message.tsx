
import React from 'react'
import { todos } from '../type/type'



type Props = {
    TodosArray: todos[],
    setTodos: React.Dispatch<React.SetStateAction<todos[]>>

}

const Message: React.FC<Props> = ({ TodosArray, setTodos }) => {
    return (
        <div>
            {TodosArray.map((todo,i) => (
                <li key={i}>{todo.id + " " + todo.text}</li>

            ))}
        </div>
    )
}

export default Message