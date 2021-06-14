import { useSelector } from 'react-redux';
import { todos } from '../slices/todoSlice';
import Todo from '../components/todo'

function Todos() {
    const list = useSelector(todos);
    return (
        <div>
            {list.map(item => (
                <Todo key={item.id} title={item.title} id={item.id}/> 
            ))}
        </div>
    )
}

export default Todos
