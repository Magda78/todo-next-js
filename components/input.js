import { useRef, useState } from 'react';
import { useDispatch} from 'react-redux';
import { addToTheList } from '../slices/todoSlice';

function Input() {
    const input = useRef(null);
	const dispatch = useDispatch();
	const [Input, setInput] = useState('')

	const inputHandler = () => {
		setInput(input.current.value);
	}

    const submitHandler = (e) => {
		dispatch(addToTheList(Input));
		setInput('');
        e.preventDefault();
	}

	return (
		<div className='p-10 flex justify-center'>
			<form>
				<input onChange={inputHandler} value={Input} ref={input} className='border-b-2  border-green-400 border-b-green-600 mr-3 p-2 focus:outline-none' type="text" />
				<button className="text-sm p-2 border-2 border-purple-200" type="submit" onClick={submitHandler}>Submit</button>
			</form>
		</div>
	);
}

export default Input;
