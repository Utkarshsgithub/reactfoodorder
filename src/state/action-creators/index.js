export const increaseTotalAmount = (amount) => {
    return (dispatch) => {
        dispatch({
            type: 'increase',
            payload: amount
        })
    }
}

export const decreaseTotalAmount = (amount) => {
    return (dispatch) => {
        dispatch({
            type: 'decrease',
            payload: amount
        })
    }
}

export const zeroTotalAmount = (amount) => {
    return (dispatch) => {
        dispatch({
            type: 'zero',
            payload: amount
        })
    }
}

export const addProduct = (name, price) => {
    return (dispatch) => {
        dispatch({
            type: 'add',
            name: name,
            price: price
        })
    }
}

export const removeProduct = (name) => {
    return (dispatch) => {
        dispatch({
            type: 'remove',
            payload: name
        })
    }
}

export const removeAllProducts = () => {
    return (dispatch) => {
        dispatch({
            type: 'removeAll'
        })
    }
}
