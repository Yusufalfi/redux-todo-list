
// membuat inisial state
const initialState = {
    todos: [
        {
            id: 1,
            title: "ini title"
        }
     ] 
    }
    
    //membuat reducer
    //reducer itu sebuah function dan menerima 2 parameter state dan action
    const listReducer = (state = initialState, action) => {
        // /destructure actionnya 
        const {type, payload} = action
        switch(type) {
            case "ADD":
                // buat newdata
                const newData = {
                    // ambil id state todos + 1
                    id: state.todos.length + 1,
                    title:payload
                }
                return{
                    ...state,
                    todos: [...state.todos, newData]
                }
            case "DEL":
                return{
                    ...state,
                    todos:state.todos.filter(item =>item.id !== payload)
                }
    
            default:
                return state
    
        }
    }

    export default listReducer
    