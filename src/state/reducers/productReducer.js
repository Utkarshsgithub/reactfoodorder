const reducer = (state={}, action) => {
    let name = action.name
    let price = action.price

    if (action.type==='add') {
        state[name] = price;
    }
    else if (action.type==='remove') {
        return delete state.action.payload
    } 
    return state;
}

export default reducer;