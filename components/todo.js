import { TrashIcon } from '@heroicons/react/outline';
import { removeFromTheList } from '../slices/todoSlice';
import { useDispatch } from 'react-redux';

function Todo({ id, title }) {
	const dispatch = useDispatch();

	const removeHandler = (id) => {
		dispatch(removeFromTheList(id));
	};
	return (
		<div className="flex justify-between p-5 text-sm border-b-2 border-grey-500">
			<h1>{title}</h1>
			<TrashIcon
				className="h-6 text-red-400 hover:text-red-600 cursor-pointer"
				onClick={() => removeHandler(id)}
			/>
		</div>
	);
}

export default Todo;
