
import { useState } from 'react';
import Input from './components/input';
import { todos } from '../src/type/type';
import Message from './components/message';

const App:React.FC=()=>{

  const [todo,setTodo] = useState<string>("")
   const [TodosArray,setTodos]=useState<todos[]>([])

 
  return (
    <div className="App">
    <Input todo={todo} setTodo={setTodo}/>
    <Message TodosArray={TodosArray} setTodos={setTodos}/>
    </div>
  );
}

export default App;
