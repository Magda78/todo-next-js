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
		<div className="p-5 flex justify-end">
			<form className="w-3/4 mr-0 flex justify-end">
				<input onChange={inputHandler} value={Input} ref={input} className="border-b-2 border-grey-200 mr-3 p-2 focus:outline-none w-3/4 focus:border-green-500 text-sm" type="text" />
				<button className="text-sm p-2 border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white" type="submit" onClick={submitHandler}>Submit</button>
			</form>
		</div>
	);
}

export default Input;
