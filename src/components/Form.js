import React, {useState} from 'react';
// import {useSelector} from "react-redux"
// untukmenggunakan action add, gunakan usedispatch
import { useDispatch } from 'react-redux';

// import function add yg di store/action/listaction
import {add} from "../store/actions/listAction"

const Form = () => {
    const [text, SetText] = useState("")

    const Dispatch = useDispatch()

    // method handlechange perubahan di input
    const handleChange = e => {
        // settetxt nya  apapun yg di tulis di input
        SetText(e.target.value)
    }

    // method subbmit when onSubmit add data
    const submit = (e) => {
        e.preventDefault()
            // console.log('ok')
        Dispatch(add(text))
        // settextnya menjadi kosong ketika di submit
        SetText("")
    }


    return(
        <form onSubmit={submit}>
            <input type="text"  
                value={text} 
                onChange={handleChange} 
                placeholder="masukan kata"/>
            <button>add</button>
        </form>
    )
}

export default Form