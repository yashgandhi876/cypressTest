import React, { useState } from 'react'
import './todo.css';

const Todo = () => {

    const [todoList, setTodoList] = useState([]);
    const [item, setItem] = useState("")

    const onChangeItem = (event) => {
        setItem(event.target.value);
    }

     const addItemToList = () => {
        if(item.trim() !== ''){
            setTodoList([...todoList, item])
            setItem('')
    }
     }

     const removeItemFromList = (key) => {
        console.log(key)
        let copyOfArray = [...todoList];
        copyOfArray.splice(key, 1);
        setTodoList(copyOfArray);
     }


    return (
		<>
			<div className="addItemToList">
				<input
				id='inputTodoItem'
					type={"text"}
					value={item}
					onChange={onChangeItem}
					className={"input"}
					placeholder={"Add todo item"}
					onKeyUp={(event) => {
						if (event.key === "Enter") {
							console.log(event.key);
							addItemToList();
						}
					}}
				/>
				<button id="addButton" onClick={addItemToList} className="button primaryBtn">
					Add
				</button>
			</div>
			<div>
				<ul className="unorderList">
					{todoList.map((item, index) => (
						<div id='todoListBox' className={"todoListBox"}>
							<div className="items">
								<li key={index} className='item'>{item}</li>
							</div>
							<button
								key={index}
								id={`${index}`}
								onClick={() => removeItemFromList(index)}
								className="button secondaryButton"
							>
								X
							</button>
						</div>
					))}
				</ul>
			</div>
		</>
	);
}


export default Todo;