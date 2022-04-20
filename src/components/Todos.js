import React from 'react';
import {useSelector, useDispatch} from "react-redux"
import {del} from "../store/actions/listAction"

const Todos = () => {

    // mengambil data objek todos dari store/index
    const todos = useSelector(state => state.lists.todos)
    // console.log(todos)
    const Dispatch = useDispatch()
    const delData = id => {
        Dispatch(del(id))
    }
    return(
        <ul>
            {todos.map( item =>
                <li key={item.id}>
                    {item.title}
                    <button onClick={() => delData(item.id)}>X</button>
                </li>
            )}
        </ul>
    )
}

export default Todos