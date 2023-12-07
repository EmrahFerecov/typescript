import React from 'react'


type Props = {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>
}

const Input: React.FC<Props> = ({ todo, setTodo }) => {
    return (
        <div>
            <input type="text" />
            <button>Add</button>
        </div>
    )
}

export default Input