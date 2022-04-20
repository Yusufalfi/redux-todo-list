//action untuk menambah data add
export const add = (title) => {
    return{
        type: "ADD",
        // data yg dikirim ke reducer
        payload: title

    }
}

//action untuk menghapus data delete
export const del = (id) => {
    return{
        type: "DEL",
        // data yg dikirim ke reducer
        payload: id

    }
}