const reducer = (state={}, action) => {
    let name = action.name
    let price = action.price

    if (action.type==='add') {
        state[name] = price;
    }
    else if (action.type==='remove') {
        return delete state.action.payload
    }
    else if (action.type==='removeAll') {
        return Object.keys(state).forEach(key => delete state[key])
    } 
    return state;
}

export default reducer;